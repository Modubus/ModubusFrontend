type HeaderProps = {
  busNumber: number;
};
export default function Header({ busNumber }: HeaderProps) {
  return (
    <header className="w-full flex justify-between items-center px-[1.25rem] py-[0.25rem] rounded-[6.25rem]">
      <div className="text-Bold45 bg-busColor px-[1.125rem] py-[0.6875rem]  text-white rounded-[10rem]">
        {busNumber}
      </div>
      <div className="text-Regular45 bg-white px-[1.125rem] py-[0.6875rem] rounded-[6.25rem] border text-center">
        변경
      </div>
    </header>
  );
}
