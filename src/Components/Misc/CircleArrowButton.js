import "../Styling/HomepageStyle.css";

const CircleArrowButton = ({ direction, onClick }) => 
{
  const buttonStyle = direction === 'right' ? 'right-arrow-button' : 'left-arrow-button';
  const arrowStyle = direction === 'right' ? 'right-arrow' : 'left-arrow';

  return (
    <button className={buttonStyle} onClick={onClick}>
      <svg 
        className={arrowStyle}
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Arrow" transform={direction === 'right' ? 'rotate(0)' : 'rotate(180 12 12)'}>
          <path id="Line" d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </button>
  );
};

export default CircleArrowButton;
