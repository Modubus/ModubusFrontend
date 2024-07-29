import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
export default function OnBoardButton() {
  const { push } = useOnBoardFlow();

  const onClickSignIn = () => {
    push("SelectPage", {
      type: "signIn",
    });
  };
  const onClickSignUp = () => {
    push("SelectPage", {
      type: "signUp",
    });
  };
  return (
    <div className="w-full flex flex-col gap-[1.06rem] px-[2rem] mb-[7.81rem]">
      <button
        onClick={onClickSignIn}
        className="h-[2.875rem] bg-green text-Bold16 text-busBlack rounded-[1.4375rem]"
      >
        로그인
      </button>
      <button
        onClick={onClickSignUp}
        className="h-[2.875rem] bg-darkGray text-Bold16 text-white rounded-[1.4375rem]"
      >
        회원가입
      </button>
    </div>
  );
}
