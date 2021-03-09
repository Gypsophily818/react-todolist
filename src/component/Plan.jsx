import PlanList from "./PlanList";

export default function Plan({ job, CCY, rate, clickPlan }) {
  const [RUB, CNY, USD] = CCY;
  function finished() {
    // 完成的
    return job.filter((item) => {
      return item.finished;
    });
  }
  function unfinished() {
    //过滤未完成
    return job.filter((item) => {
      return !item.finished;
    });
  }
  function formatMoney(price) {
    // 格式化价格
    return price.toPrecision(6);
  }
  function getUnfinishedSum(CCYType) {
    // 计算总值
    let sum = 0;
    if (unfinished().length !== 0) {
      for (const price in unfinished()) {
        // console.log(unfinished()[price][CCYType]);
        sum += Number(unfinished()[price][CCYType]);
      }
      return formatMoney(sum);
    }
  }
  function getFinishedSum(CCYType) {
    // 计算总值
    let sum = 0;
    if (finished().length !== 0) {
      for (const price in finished()) {
        // console.log(finished()[price][CCYType]);
        sum += Number(finished()[price][CCYType]);
      }
      return formatMoney(sum);
    }
  }

  return (
    <div>
      <ul className="plan-box">
        <p className="title-plan">计划:</p>
        {unfinished().map((item) => {
          // return item.finished === true;
          return (
            <PlanList
              key={item.id}
              {...item}
              clickPlan={clickPlan}
              rate={rate}
            />
          );
        })}
        <p className="total">
          将要花费:
          <span className="plan-USD">
            ${getUnfinishedSum(USD) ? getUnfinishedSum(USD) : 0}
          </span>
          <span className="plan-CNY">
            ￥{getUnfinishedSum(CNY) ? getUnfinishedSum(CNY) : 0}
          </span>
          <span className="plan-RUB">
            ₽{getUnfinishedSum(RUB) ? getUnfinishedSum(RUB) : 0}
          </span>
        </p>
      </ul>

      <ul className="plan-box">
        <p className="title-plan">已完成:</p>
        {finished().map((item) => {
          return (
            <PlanList
              key={item.id}
              {...item}
              clickPlan={clickPlan}
              rate={rate}
            />
          );
        })}
        <p className="total">
          一共花了:
          <span className="plan-USD">
            ${getFinishedSum(USD) ? getFinishedSum(USD) : 0}
          </span>
          <span className="plan-CNY">
            ￥{getFinishedSum(CNY) ? getFinishedSum(CNY) : 0}
          </span>
          <span className="plan-RUB">
            ₽{getFinishedSum(RUB) ? getFinishedSum(RUB) : 0}
          </span>
        </p>
      </ul>
    </div>
  );
}
