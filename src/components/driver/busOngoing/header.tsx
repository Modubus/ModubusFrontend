type HeaderProps = {
  busNumber: number;
};
export default function Header({ busNumber }: HeaderProps) {
  return (
    <div className="w-full h-[3rem] text-[2.125rem] text-green font-bold relative">
      {busNumber}
      <img
        className="absolute top-[0.5rem] right-[2rem]"
        src="/icons/driver/busIcon.svg"
        alt=""
      />
    </div>
  );
}
