var classNames = require("classnames");

export default function PlanList({
  clickPlan,
  finished,
  id,
  plan,
  RUB,
  CNY,
  USD,
}) {
  // 组件状态
  function clickCheckbox() {
    //点击完成和未完成
    clickPlan(id);
  }
  let CheckClass = classNames({
    "Plan-text": true,
    "is-finished": finished,
  });

  return (
    <li className="plan-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={finished}
        onChange={clickCheckbox}
      />
      <span className={CheckClass}>{plan}</span>
      <div className="plan-money">
        <span className="plan-RUB">₽{RUB}</span>
        <span className="plan-CNY">￥{CNY}</span>
        <span className="plan-USD">${USD}</span>
      </div>
    </li>
  );
}
