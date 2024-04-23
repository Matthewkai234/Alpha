import "./Styling/SectionHeaderTextStyle.css";
function SectionHeaderText(props) {
  return (
    <>
      <h2 className="SectionHeaderText">{props.text}</h2>
    </>
  );
}

export default SectionHeaderText;
