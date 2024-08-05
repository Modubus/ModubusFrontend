type FilteredBusItemProps = {
  onClick: () => void;
};

export default function FilteredBusItem({ onClick }: FilteredBusItemProps) {
  return (
    <div
      className="flex gap-[1.38rem] w-full px-[2rem] py-[1.19rem]"
      onClick={onClick}
    >
      <img src="/icons/driver/busIcon.svg" />
      <div className="flex flex-col gap-[0.44rem]">
        <p className="flex gap-[0.62rem] items-center text-lightGreen">
          <span className="text-Bold18">저상</span>
          <span className="text-Regular18">3317</span>
          <img src="/icons/driver/greenCircle.svg" />
        </p>
        <p className="text-Regular16 text-mutegreen01">
          {"남한산성입구" + "< >" + "잠실새내역"}
        </p>
      </div>
    </div>
  );
}
