import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import TextInput from "@src/components/basic/TextInput";
import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
import { useNavigate } from "react-router-dom";

type DriverEnrollCompanyCodePageParams = {
  searchCodeResult?: string;
};

const DriverEnrollCompanyCodePage: ActivityComponentType<
  DriverEnrollCompanyCodePageParams
> = ({ params: { searchCodeResult } }) => {
  const router = useNavigate();
  const { push } = useOnBoardFlow();
  const textClickHandler = () => {
    push("DriverSearchCompanyCodePage", {});
  };
  const startButtonClickHandler = () => {
    if (searchCodeResult) {
      router("/driver/home");
    }
  };
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{
        backButton: {
          render: () => (
            <button className="ms-[2rem] mt-[0.5rem]" onClick={() => pop()}>
              <img src="/icons/backButton.svg" alt="" />
            </button>
          ),
        },
        title: (
          <div className="text-Bold28 text-green mt-[0.5rem]">
            버스 회사 코드
          </div>
        ),
        iconColor: "white",
        height: "3rem",
      }}
    >
      <article className="relative pt-[2.25rem] mx-[2rem] h-full">
        <p className="text-Bold21 text-lightGreen text-left mb-[1.75rem]">
          버스 회사 코드를 입력해주세요.
        </p>
        <TextInput
          placeholder="버스 회사 코드"
          className="mb-[0.88rem] rounded-t-[0.625rem]"
          readOnly={true}
          value={searchCodeResult}
          onClick={textClickHandler}
        />

        <button
          className={`bg-green w-[100%] h-[2.875rem] text-Bold16 text-black rounded-[1.4375rem]
           ${
             !searchCodeResult
               ? "!bg-darkGray text-mutegreen02 absolute bottom-[1.44rem] left-0"
               : ""
           }
            `}
          onClick={startButtonClickHandler}
        >
          시작하기
        </button>
      </article>
    </AppScreen>
  );
};

export default DriverEnrollCompanyCodePage;
