import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
export default function OnBoardButton() {
  const { push } = useOnBoardFlow();

  const onClickLogin = () => {
    push("LoginPage", {
      title: "Hello",
    });
  };
  const onClickRegister = () => {
    push("RegisterPage", {
      title: "Hello",
    });
  };
  return (
    <div className="w-full flex flex-col gap-[1.06rem] px-[2rem] mb-[7.81rem]">
      <button
        onClick={onClickLogin}
        className="bg-green text-busBlack rounded-[1.4375rem]"
      >
        로그인
      </button>
      <button
        onClick={onClickRegister}
        className="bg-darkGray text-white rounded-[1.4375rem]"
      >
        회원가입
      </button>
    </div>
  );
}
