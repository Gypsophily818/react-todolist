export default function CCYitem(props) {
  return (
    <li
      className="ccy-item"
      onClick={(e) => {
        props.clickCCY(props.ccy);
      }}
    >
      {props.ccy}
    </li>
  );
}
