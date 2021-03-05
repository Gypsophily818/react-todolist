import PlanList from "./PlanList";

export default function Finished(props) {
  const [RUB, CNY, USD] = props.CCY;

  function finished(params) {
    return props.job.filter((item) => {
      return item.finished;
    });
  }
  function formatMoney(price) {
    // 格式化价格
    return price.toPrecision(6);
  }
  function getSum(CCYType) {
    // 计算总值
    if (finished().length !== 0) {
      let sum = 0;
      for (const price in finished()) {
        console.log(finished()[price][CCYType]);
        sum += Number(finished()[price][CCYType]);
      }
      return formatMoney(sum);
    }
  }
  return (
    <div>
      <ul className="plan-box">
        <p className="title-plan">已完成:</p>
        {finished().map((item) => {
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
          一共花了:
          {/* <span className="plan-USD">$0.01323</span>
          <span className="plan-CNY">￥0.08707</span>
          <span className="plan-RUB">₽1</span> */}
          <span className="plan-USD">${getSum(USD) ? getSum(USD) : 0}</span>
          <span className="plan-CNY">￥{getSum(CNY) ? getSum(CNY) : 0}</span>
          <span className="plan-RUB">₽{getSum(RUB) ? getSum(RUB) : 0}</span>
        </p>
      </ul>
    </div>
  );
}
