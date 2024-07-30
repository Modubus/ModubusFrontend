export default function SignUpHeader({ step }: { step: number }) {
  console.log(step);
  return (
    <header className="flex gap-[0.56rem] pt-[1.75rem] px-[2rem] mb-[4.75rem]">
      <div
        className={`flex-1 h-[0.75rem] rounded-[0.1875rem] bg-darkGray
            ${step >= 1 ? "bg-green" : ""}
            `}
      ></div>
      <div
        className={`flex-1 h-[0.75rem] rounded-[0.1875rem] bg-darkGray
            ${step >= 2 ? "bg-green" : ""}
            `}
      ></div>
      <div
        className={`flex-1 h-[0.75rem] rounded-[0.1875rem] bg-darkGray
            ${step >= 3 ? "bg-green" : ""}
            `}
      ></div>
    </header>
  );
}
