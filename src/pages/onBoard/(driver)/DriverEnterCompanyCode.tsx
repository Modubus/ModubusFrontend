import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import TextInput from "@src/components/basic/TextInput";
import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
import { useNavigate } from "react-router-dom";
import { useStepFlow } from "@stackflow/react/future";
import { useState } from "react";

type DriverEnrollCompanyCodePageParams = {
  searchCodeResult?: string;
  isViewDetailedSearchUI?: boolean;
};

const DriverEnrollCompanyCodePage: ActivityComponentType<
  DriverEnrollCompanyCodePageParams
> = ({ params: { searchCodeResult, isViewDetailedSearchUI } }) => {
  const router = useNavigate();
  const { pop } = useOnBoardFlow();
  const { pushStep } = useStepFlow("DriverEnterCompanyCodePage");
  const textClickHandler = () => {
    pushStep({ isViewDetailedSearchUI: true });
  };
  const startButtonClickHandler = () => {
    if (searchCodeResult) {
      router("/driver/home");
    }
  };

  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  if (isViewDetailedSearchUI) {
    return (
      <AppScreen backgroundColor="#121212">
        <article className="h-full">
          <header className="bg-black px-[1.75rem] pt-[0.75rem] pb-[1.44em]">
            <TextInput
              placeholder="버스 회사 코드 검색"
              value={text}
              onChange={handleChange}
              className="rounded-[0.625rem]"
            />
          </header>
          <section className="bg-darkGray h-full">
            <div
              onClick={() => {
                pushStep({
                  searchCodeResult: "999",
                  isViewDetailedSearchUI: false,
                });
              }}
            >
              example
            </div>
          </section>
        </article>
      </AppScreen>
    );
  } else {
    return (
      <AppScreen
        backgroundColor="#121212"
        appBar={{
          backButton: {
            render: () => (
              <button
                className="ms-[2rem] mt-[0.5rem]"
                onClick={() => {
                  pop();
                }}
              >
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
            className={`bg-green w-[100%] h-[2.875rem] text-Bold16 text-black rounded-[1.4375rem] absolute bottom-[1.44rem] left-0 
             ${!searchCodeResult ? "!bg-darkGray text-mutegreen02 " : ""}
              `}
            onClick={startButtonClickHandler}
          >
            시작하기
          </button>
        </article>
      </AppScreen>
    );
  }
};

export default DriverEnrollCompanyCodePage;
