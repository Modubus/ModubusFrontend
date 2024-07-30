import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import SignUpHeader from "@src/components/onBoard/(user)/signUp/signUpHeader";
import TextInput from "@src/components/basic/TextInput";
import { useUserSignUpStore } from "@src/store/userSignUp";
import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
// import { useShallow } from "zustand/react/shallow";
// import { useState } from "react";

type UserSignUpPageParams = {
  // title: string;
};
const UserSignUpStep1Page: ActivityComponentType<UserSignUpPageParams> = () => {
  const { push } = useOnBoardFlow();
  const { data: signUpData, updateData } = useUserSignUpStore();

  const onClickHandler = () => {
    if (!signUpData.username) return;
    push("UserSignUpStep2Page", {});
  };
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col justify-center items-stretch px-[2rem]">
        <SignUpHeader step={1}></SignUpHeader>
        <section className="flex-1 flex flex-col w-full items-center justify-start">
          <div className="w-full text-start text-Bold21 text-lightGreen mb-[1.75rem]">
            아이디를 입력해 주세요
          </div>
          <TextInput
            className="rounded-b-[0.625rem]"
            placeholder="아이디"
            value={signUpData.username}
            onChange={(e) => updateData({ username: e.target.value })}
          ></TextInput>
          <div className="flex justify-between w-full mt-[1.19rem]">
            <div className="flex justify-start flex-col text-Regular12 text-mutegreen01">
              <span className=" text-start">
                최소 2자이상~최대 20자 이하 (공백 포함)
              </span>
              <span className="text-start">특수문자, 이모지 사용 불가</span>
            </div>

            <span className="text-green text-Bold16">
              {signUpData.username.length}/20
            </span>
          </div>
        </section>
        <button
          onClick={onClickHandler}
          className={`bg-green h-[2.875rem] text-Bold16 text-black mb-[3.56rem] rounded-[1.4375rem] mx-[2rem]
           ${signUpData.username ? "" : "!bg-darkGray text-mutegreen02"}
            `}
        >
          다음
        </button>
      </article>
    </AppScreen>
  );
};

export default UserSignUpStep1Page;
