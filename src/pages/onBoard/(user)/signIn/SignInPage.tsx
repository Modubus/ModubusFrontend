import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import ImageWrapper from "@src/components/basic/ImageWrapper";
import TextInput from "@src/components/basic/TextInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { postRegister } from "@src/api/user/user/post";

type UserSignInPageParams = {
  // title: string;
};
const UserSignInPage: ActivityComponentType<UserSignInPageParams> = () => {
  const router = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState({
    id: "",
    password: "",
  });
  // const {
  //   data: accessToken,
  //   isPending,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["login"],
  //   queryFn: () =>
  //     postRegister({ username: signUpInfo.id, password: signUpInfo.password }),
  // });
  const onClickHandler = async () => {
    const accessToken = await postRegister({
      username: signUpInfo.id,
      password: signUpInfo.password,
    });
    console.log(accessToken);
    router("/user/home");
  };
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col justify-center">
        <section className="flex-1 flex flex-col w-full items-center justify-start gap-[1rem] px-[2rem]">
          <ImageWrapper className="mt-[9.13rem] mb-[4.14rem]">
            <img src="/images/onBoard/signInImg.svg" alt="" />
          </ImageWrapper>
          <div className="w-full">
            <TextInput
              placeholder="아이디"
              value={signUpInfo.id}
              onChange={(e) => {
                setSignUpInfo({ ...signUpInfo, id: e.target.value });
              }}
              className="mb-[0.88rem] rounded-t-[0.625rem]"
            ></TextInput>
            <TextInput
              placeholder="비밀번호"
              value={signUpInfo.password}
              onChange={(e) => {
                setSignUpInfo({ ...signUpInfo, password: e.target.value });
              }}
              type="password"
              className="mb-[0.88rem] rounded-b-[0.625rem]"
            ></TextInput>
          </div>
        </section>
        <button
          onClick={onClickHandler}
          className={`bg-green h-[2.875rem] text-Bold16 text-black mb-[3.56rem] rounded-[1.4375rem] mx-[2rem]
           ${
             signUpInfo.id && signUpInfo.password
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

export default UserSignInPage;
