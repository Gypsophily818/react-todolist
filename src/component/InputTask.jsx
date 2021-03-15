import { useState } from "react";
import { Button } from "../css/style";

export default function InputTask({ addPlan }) {
  // 组件状态
  const currencies = ["RUB", "CNY", "USD"];
  const [task, setTask] = useState("");
  const [enterPrice, setVEnterPrice] = useState("");
  const [currency, setCurrency] = useState("");

  const [showCCY, setShowCCY] = useState(false);

  const clickCCY = (val) => {
    // 显示隐藏
    setShowCCY(false);
    // 选择货币类型
    setCurrency(val);
  };
  const clearState = () => {
    setTask("");
    setVEnterPrice("");
    setCurrency("");
  };
  function addPlanHandler() {
    let price = enterPrice * 1; //当前填入价格
    let getval = {};
    console.log(task, enterPrice, currency);
    if (
      typeof price !== "number" ||
      isNaN(price) ||
      task === "" ||
      price === 0 ||
      currency === ""
    ) {
      return alert("输入错误，请重新输入！");
    }
    getval = {
      id: Date.now(),
      finished: false,
      plan: task,
      price,
      currency,
    };
    // // 添加
    addPlan(getval);
    // 重置
    clearState();
  }

  return (
    <div className="Task-header">
      <div className="left">
        <input
          className="task"
          type="text"
          placeholder="任务"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          className="price"
          type="text"
          placeholder="价格"
          value={enterPrice}
          onChange={(e) => {
            setVEnterPrice(e.target.value);
          }}
        />
      </div>

      <div className="select-box">
        <input
          className="currency"
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
          type="text"
          placeholder="货币类型"
        />

        <span
          className="icon"
          onClick={(e) => {
            e.preventDefault();
            showCCY ? setShowCCY(false) : setShowCCY(true);
          }}
        >
          ▽
        </span>
        {showCCY ? (
          <ul className="select-CCY">
            {currencies.map((currency, index) => (
              <li
                className="ccy-item"
                key={index}
                onClick={() => {
                  clickCCY(currency);
                }}
              >
                {currency}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <Button
        className="add"
        onClick={() => {
          addPlanHandler();
        }}
      >
        添加
      </Button>
    </div>
  );
}
