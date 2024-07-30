import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import SignUpHeader from "@src/components/onBoard/(user)/signUp/signUpHeader";
import TextInput from "@src/components/basic/TextInput";

import { useUserSignUpStore } from "@src/store/userSignUp";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

type UserSignUpPageParams = {
  // title: string;
};
const UserSignUpStep3Page: ActivityComponentType<UserSignUpPageParams> = () => {
  const router = useNavigate();
  const { data: signUpData, updateData } = useUserSignUpStore();

  const onClickHandler = () => {
    if (signUpData.email.length < 10) return;
    router("/user/home");
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
            이메일를 입력해 주세요
          </div>
          <TextInput
            className="rounded-b-[0.625rem]"
            placeholder="이메일"
            type="email"
            value={signUpData.email}
            onChange={(e) => updateData({ email: e.target.value })}
          ></TextInput>
          <div className="flex justify-between w-full mt-[1.19rem]">
            <div className="flex justify-start flex-col text-Regular12 text-mutegreen01">
              <span className=" text-start">
                아이디 및 비밀번호 찾을 때 사용됩니다.{" "}
              </span>
            </div>
          </div>
        </section>
        <button
          onClick={onClickHandler}
          className={`bg-green h-[2.875rem] text-Bold16 text-black mb-[3.56rem] rounded-[1.4375rem] mx-[2rem]
           ${
             signUpData.email.length >= 10
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

export default UserSignUpStep3Page;
