import InputTask from "./component/InputTask";
import CurrencyRate from "./component/CurrencyRate";
import Isfinishedjob from "./component/Isfinishedjob";
import "./App.css";
import "./css/InputTask.css";
import "./css/CurrencyRate.css";

import getForex from "./api/getForex";
import { useEffect, useState } from "react";

function App() {
  // 汇率
  const [rate, setRate] = useState({});
  // 任务
  const [list, setList] = useState([]);
  // 完成
  const finishedJob = list.filter((item) => item.finished);
  // 未完成
  const UnfinishedJob = list.filter((item) => !item.finished);

  useEffect(() => {
    getForex().then((resolve) => {
      console.log(resolve);
      setRate(resolve);
    });
  }, []);

  // 处理汇率
  let RUB, CNY, USD;
  function forexHandler(currency, price) {
    switch (currency) {
      case "RUB": //货币类型为卢币
        CNY = price / rate.RUB.value;
        USD = (price / rate.RUB.value) * rate.USD.value;
        RUB = price;
        break;
      case "USD": //美元
        RUB = (price / rate.USD.value) * rate.RUB.value;
        CNY = price / rate.USD.value;
        USD = price;
        break;
      case "CNY": //人民币
        RUB = price * rate.RUB.value;
        USD = price * rate.USD.value;
        CNY = price;
        break;

      default:
        break;
    }
    // 格式价格
    CNY = formatMoney(CNY);
    USD = formatMoney(USD);
    RUB = formatMoney(RUB);
  }
  // 格式价格
  function formatMoney(price) {
    return price.toPrecision(6);
  }
  //
  function addPlan(val) {
    //添加新计划
    console.log(val);
    if (val) {
      const { plan, price, currency, finished, id } = val;
      // 转换汇率
      forexHandler(currency, price);

      // 处理完添加任务
      setList([...list, { plan, currency, finished, id, RUB, CNY, USD }]);
      console.log("list", list);
    }
  }
  // 完成和未完成
  function clickPlan(id) {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, finished: !item.finished };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <div className="App">
      {/* 输入组件 */}
      <InputTask addPlan={addPlan}></InputTask>

      {/* 汇率转换组件 */}
      {rate.USD && <CurrencyRate rate={rate}></CurrencyRate>}

      {/* 计划组件 */}
      {UnfinishedJob.length !== 0 && (
        <Isfinishedjob
          job={UnfinishedJob}
          clickPlan={clickPlan}
          rate={rate}
          isfinished={false}
        ></Isfinishedjob>
      )}

      {/* 已完成组件(复用计划组件) */}
      {finishedJob.length !== 0 && (
        <Isfinishedjob
          job={finishedJob}
          clickPlan={clickPlan}
          rate={rate}
          isfinished={true}
        ></Isfinishedjob>
      )}
    </div>
  );
}

export default App;
