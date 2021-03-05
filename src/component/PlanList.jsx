export default function PlanList(props) {
  // const { finish, plan } = props.job;
  function clickCheckbox() {
    //点击完成和未完成
    props.clickPlan(props.id);
  }
  /* ₽/￥  ₽/$ ￥/$ 
		 RUB   CNY USD
	*/

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        // defaultChecked="checked"
        checked={props.finished}
        onChange={clickCheckbox}
      />
      <span
        className="Plan-text"
        className={props.finished ? "is-finished" : ""}
      >
        {props.plan}
      </span>
      <div className="plan-money">
        <span className="plan-RUB">₽{props.RUB}</span>
        <span className="plan-CNY">￥{props.CNY}</span>
        <span className="plan-USD">${props.USD}</span>
      </div>
    </li>
  );
}
