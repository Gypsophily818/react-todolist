// import logo from './logo.svg';
import InputTask from "./component/InputTask";
import CurrencyRate from "./component/CurrencyRate";
import Plan from "./component/Plan";
import "./App.css";
import "./css/InputTask.css";
import "./css/CurrencyRate.css";

import getForex from "./api/getForex";
import { useEffect, useState } from "react";

function App() {
  const CCY = ["RUB", "CNY", "USD"];
  const [rate, setRate] = useState({});

  const [job, setJob] = useState([
    // {
    //   id: 1,
    //   finished: false,
    //   plan: "去吃麻辣烫",
    //   RUB: 1,
    //   CNY: 0.08707,
    //   USD: 0.01323,
    // },
    // {
    //   id: 2,
    //   finished: true,
    //   plan: "去吃海底捞",
    //   RUB: 12,
    //   CNY: 0.7,
    //   USD: 0.23,
    // },
    // {
    //   id: 5,
    //   finished: false,
    //   plan: "去学习",
    //   RUB: 1121,
    //   CNY: 707,
    //   USD: 1323,
    // },
  ]);
  useEffect(() => {
    getForex().then((resolve) => {
      console.log(resolve);
      setRate(resolve);
    });
  }, []);

  function addPlan(plan) {
    //添加新计划
    console.log(plan);
    if (plan) {
      return setJob([...job, plan]);
    } else {
      return;
    }
  }
  function clickPlan(id) {
    // 完成和未完成
    setJob(
      job.map((item) => {
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
      <InputTask
        CCY={CCY}
        addPlan={(item) => addPlan(item)}
        rate={rate}
      ></InputTask>
      {rate.USD && <CurrencyRate rate={rate}></CurrencyRate>}
      {job.length !== 0 && (
        <Plan job={job} clickPlan={clickPlan} rate={rate} CCY={CCY}></Plan>
      )}
    </div>
  );
}

export default App;
