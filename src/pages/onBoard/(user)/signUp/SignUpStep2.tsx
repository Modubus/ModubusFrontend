import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import SignUpHeader from "@src/components/onBoard/(user)/signUp/signUpHeader";
import TextInput from "@src/components/basic/TextInput";
import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
import { useUserSignUpStore } from "@src/store/userSignUp";
// import { useState } from "react";

type UserSignUpPageParams = {
  // title: string;
};
const UserSignUpStep2Page: ActivityComponentType<UserSignUpPageParams> = () => {
  const { push } = useOnBoardFlow();
  const { data: signUpData, updateData } = useUserSignUpStore();

  const onClickHandler = () => {
    if (signUpData.password.length < 10) return;
    push("UserSignUpStep3Page", {});
  };
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col justify-center items-stretch px-[2rem]">
        <SignUpHeader step={2}></SignUpHeader>
        <section className="flex-1 flex flex-col w-full items-center justify-start">
          <div className="w-full text-start text-Bold21 text-lightGreen mb-[1.75rem]">
            비밀번호를 입력해 주세요
          </div>
          <TextInput
            className="rounded-b-[0.625rem]"
            placeholder="비밀번호"
            type="password"
            value={signUpData.password}
            onChange={(e) => updateData({ password: e.target.value })}
          ></TextInput>
          <div className="flex justify-between w-full mt-[1.19rem]">
            <div className="flex justify-start flex-col text-Regular12 text-mutegreen01">
              <span className=" text-start">최소 10자리 이상 </span>
              <span className="text-start">
                영어 대문자, 소문자, 숫자, 특수문자 중 2가지 포함
              </span>
            </div>

            <span className="text-green text-Bold16">
              {signUpData.password.length}/20
            </span>
          </div>
        </section>
        <button
          onClick={onClickHandler}
          className={`bg-green h-[2.875rem] text-Bold16 text-black mb-[3.56rem] rounded-[1.4375rem] mx-[2rem]
           ${
             signUpData.password.length >= 10
               ? ""
               : "!bg-darkGray text-mutegreen02"
           }
            `}
        >
          다음
        </button>
      </article>
    </AppScreen>
  );
};

export default UserSignUpStep2Page;
