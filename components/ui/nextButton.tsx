const NextButton = (props: { trigger: boolean }) => {
    return (
      <button
        // ถ้า props ที่ได้มาเป็น false => disable
        disabled={!props.trigger}
        // ใส่ disabled:text-[#B8BFCB]
        className="relative flex h-8 w-[100px] items-center justify-center rounded-[100px] bg-[#F8F8F7] text-[#6C1F1F] disabled:text-[#B8BFCB]"
      >
        <p className="text-base font-semibold">ถัดไป</p>
      </button>
    );
  };
  
  export default NextButton;