const NextButton = (props: { trigger: boolean }) => {
  return (
    <button
      disabled={!props.trigger}
      className="relative flex h-8 w-28 items-center justify-center rounded-[100px] bg-[#F8F8F7] text-[#6C1F1F] disabled:text-[#B8BFCB]"
    >
      <p className="text-base font-semibold">ถัดไป</p>
    </button>
  );
};

export default NextButton;
