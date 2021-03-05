import PlanList from "./PlanList";

export default function Plan(props) {
  const [RUB, CNY, USD] = props.CCY;
  function unfinished() {
    //过滤未完成
    return props.job.filter((item) => {
      return !item.finished;
    });
  }
  console.log(props.job);

  function getSum(CCYType) {
    if (unfinished().length !== 0) {
      let sum = 0;
      for (const price in unfinished()) {
        console.log(unfinished()[price][CCYType]);
        sum += Number(unfinished()[price][CCYType]);
      }
      return sum;
    }
  }
  return (
    <ul className="plan-box">
      <p className="title-plan">计划:</p>
      {unfinished().map((item) => {
        // return item.finished === true;
        return (
          <PlanList
            key={item.id}
            {...item}
            clickPlan={props.clickPlan}
            rate={props.rate}
          />
        );
      })}
      <p className="total">
        将要花费:
        <span className="plan-USD">${getSum(USD) ? getSum(USD) : 0}</span>
        <span className="plan-CNY">￥{getSum(CNY) ? getSum(CNY) : 0}</span>
        <span className="plan-RUB">₽{getSum(RUB) ? getSum(RUB) : 0}</span>
      </p>
    </ul>
  );
}
