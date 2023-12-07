import React from "react";

interface Props {
  // Define your component's props here
}

const Heart: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="489"
      height="460"
      viewBox="0 0 390 460"
      fill="none"
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    >
      <g filter="url(#filter0_f_648_159)">
        <path
          d="M346.299 92.4514C336.098 82.1779 323.967 74.0221 310.604 68.453C297.241 62.8838 282.908 60.0111 268.431 60C241.048 60.0045 214.664 70.2918 194.505 88.8252C174.347 70.2887 147.962 60.0009 120.578 60C106.084 60.0151 91.7356 62.8966 78.3593 68.4786C64.983 74.0606 52.8426 82.233 42.6366 92.5254C-0.894291 136.244 -0.875792 204.625 42.6736 248.159L194.505 400L346.336 248.159C389.885 204.625 389.904 136.244 346.299 92.4514Z"
          fill="#AA5656"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_648_159"
          x="-50"
          y="0"
          width="489"
          height="460"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="30"
            result="effect1_foregroundBlur_648_159"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Heart;
