import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import TypeSelector from "@src/components/onBoard/typeSelector";
import { useState } from "react";
import { selectedUserType } from "@src/types/onBoard/userType.type";
import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";

type SelectPageParams = {
  type: "signIn" | "signUp";
};

const SelectPage: ActivityComponentType<SelectPageParams> = ({
  params: { type },
}) => {
  const { push } = useOnBoardFlow();

  const [clickedUserType, setClickedUserType] = useState<
    selectedUserType | undefined
  >(undefined);
  const startHandler = () => {
    if (!clickedUserType) return;
    if (type === "signIn" && clickedUserType === "user")
      push("UserSignInPage", {});
    else if (type === "signUp" && clickedUserType === "user")
      push("UserSignUpStep1Page", {});
    else if (clickedUserType === "driver")
      push("DriverEnterCompanyCodePage", {});
  };

  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col justify-between">
        <section className="flex-1 flex gap-[0.88rem] w-full items-start justify-center mt-[5.56rem] px-[2rem]">
          <TypeSelector
            clickedType={clickedUserType}
            setClickedType={setClickedUserType}
            type="user"
          ></TypeSelector>
          <TypeSelector
            clickedType={clickedUserType}
            setClickedType={setClickedUserType}
            type="driver"
          ></TypeSelector>
        </section>
        <button
          onClick={startHandler}
          className={`bg-green h-[2.875rem] text-Bold16 text-black mb-[3.56rem] rounded-[1.4375rem] mx-[2rem]
           ${!clickedUserType ? "!bg-darkGray text-mutegreen02" : ""}
            `}
        >
          시작하기
        </button>
      </article>
    </AppScreen>
  );
};

export default SelectPage;
