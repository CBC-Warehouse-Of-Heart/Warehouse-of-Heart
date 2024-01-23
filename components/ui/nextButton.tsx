import { Button } from "./button";

interface Props {
  label?: string;
  disabled?: boolean;
}

const NextButton = (props: Props) => {
  return (
    <div className="fixed left-1/2 top-3/4 -translate-x-1/2 transform">
      <Button className="relative" variant="next" size="xs">
        <p className="fixed left-1/2 w-24 -translate-x-1/2 transform text-base font-semibold text-[#6C1F1F]">
          {props.label ? props.label : "ถัดไป"}
        </p>
        <div className="absolute right-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.33337 5.83334L12.5 10L8.33337 14.1667"
              stroke="#6C1F1F"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Button>
    </div>
  );
};

export default NextButton;
