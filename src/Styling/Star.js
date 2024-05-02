import "../Styling/StarStyle.css";

function Star({ fill }) {
  const fillColor = fill ? "#FFC000" : "white";

  return (
    <svg width={24} height={24} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.80527 0.713585C5.22678 -0.174384 6.44463 -0.174386 6.86614 0.713583L7.5946 2.24822C7.76198 2.60084 8.08552 2.84524 8.45979 2.90178L10.0887 3.14788C11.0312 3.29027 11.4075 4.49451 10.7255 5.1857L9.54685 6.38025C9.27603 6.65472 9.15244 7.05017 9.21638 7.43773L9.49463 9.12446C9.65563 10.1004 8.67036 10.8447 7.82735 10.3839L6.37042 9.58754C6.03567 9.40456 5.63574 9.40456 5.30099 9.58754L3.84406 10.3839C3.00105 10.8447 2.01578 10.1004 2.17678 9.12447L2.45503 7.43773C2.51897 7.05017 2.39538 6.65472 2.12456 6.38025L0.945878 5.1857C0.263874 4.49451 0.640211 3.29027 1.58272 3.14788L3.21162 2.90178C3.58589 2.84524 3.90943 2.60084 4.07681 2.24822L4.80527 0.713585Z"
        fill={fillColor}
        stroke="#FFC000"
        strokeWidth="1.04762"
        strokeLinejoin="round"
        className="rating-star"
      />
    </svg>
  );
}

export default Star;