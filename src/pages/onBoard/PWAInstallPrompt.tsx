import { useEffect, useState } from "react";
// import Button from "../UIElements/Button";

// import { RiInstallLine } from "react-icons/ri";
// global.d.ts
declare global {
  export interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>();

  useEffect(() => {
    promptAppInstall();
  }, [deferredPrompt]);
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("sw worker registered", reg))
        .catch(() => console.log("failed"));
    }
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);
  const promptAppInstall = async () => {
    const isUnsupportedBrowser = checkUnsupportedBrowser();
    if (isUnsupportedBrowser) {
      alert(
        "공유 아이콘 -> 홈 화면에 추가를 클릭해 앱으로 편리하게 이용해보세요!"
      );
    }
    if (!isUnsupportedBrowser) {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        setDeferredPrompt(undefined);
      } else {
        // alert("이미 저희 서비스를 설치해주셨어요!");
        return;
      }
    }
  };
  const checkUnsupportedBrowser = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return (
      (userAgent.indexOf("safari") > -1 &&
        userAgent.indexOf("chrome") <= -1 &&
        userAgent.indexOf("chromium") <= -1) ||
      (userAgent.indexOf("firefox") > -1 &&
        userAgent.indexOf("seamonkey") <= -1)
    );
  };

  return (
    <div>
      <button onClick={promptAppInstall}></button>
    </div>
  );
};

export default PWAInstallPrompt;
