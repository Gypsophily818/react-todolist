import CCYitem from "./CCYitem";
import { useRef, useState } from "react";

export default function InputTask(props) {
  const [value, setValue] = useState("");
  const [showCCY, setShowCCY] = useState(false);
  const task = useRef(null);
  const enterPrice = useRef(null);
  const currency = useRef(null);
  const [newPlan, setNewplan] = useState({});

  const clickCCY = (v) => {
    // 显示隐藏
    setShowCCY(false);
    // 选择货币类型
    setValue(v);
  };
  function formatMoney(price) {
    // formatMoney
    return price.toPrecision(6);
  }

  function addPlanHander() {
    let price = enterPrice.current.value * 1; //当前填入价格
    const rate = props.rate; //汇率
    let getval = {};
    console.log(price);
    // console.log(task.current.value, price, currency);
    if (
      typeof price !== "number" ||
      isNaN(price) ||
      price === 0 ||
      task.current.value === "" ||
      currency.current.value === ""
    ) {
      return alert("请确认输入格式~");
    }
    if (currency.current.value === "RUB") {
      //卢币单位为1时
      setNewplan({
        // { id: 5, finished: false, plan: "去学习" },
        id: Date.now(),
        finished: false,
        plan: task.current.value,
        RUB: price,
        CNY: formatMoney(price / rate.RUB.previous),
        USD: formatMoney((price / rate.RUB.previous) * rate.USD.previous),
      });
      getval = {
        // { id: 5, finished: false, plan: "去学习" },
        id: Date.now(),
        finished: false,
        plan: task.current.value,
        RUB: price,
        CNY: formatMoney(price / rate.RUB.previous),
        USD: formatMoney((price / rate.RUB.previous) * rate.USD.previous),
      };
    } else if (currency.current.value === "CNY") {
      //人民币单位为1时
      setNewplan({
        id: Date.now(),
        finished: false,
        plan: task.current.value,
        RUB: formatMoney(price * rate.RUB.previous),
        CNY: price,
        USD: formatMoney(price * rate.USD.previous),
      });
      getval = {
        id: Date.now(),
        finished: false,
        plan: task.current.value,
        RUB: formatMoney(price * rate.RUB.previous),
        CNY: price,
        USD: formatMoney(price * rate.USD.previous),
      };
    } else {
      //美元单位为1时
      setNewplan({
        id: Date.now(),
        finished: false,
        plan: task.current.value,
        RUB: formatMoney((price / rate.USD.previous) * rate.RUB.previous),
        CNY: formatMoney(price / rate.USD.previous),
        USD: price,
      });
      getval = {
        id: Date.now(),
        finished: false,
        plan: task.current.value,
        RUB: formatMoney((price / rate.USD.previous) * rate.RUB.previous),
        CNY: formatMoney(price / rate.USD.previous),
        USD: price,
      };
    }
    // 添加
    // newPlan && console.log("addPlan", newPlan);
    props.addPlan(getval);
    // 重置
    enterPrice.current.value = "";
    task.current.value = "";
    currency.current.value = "";
  }

  return (
    <div className="Task-header">
      <div className="left">
        <input className="task" type="text" placeholder="任务" ref={task} />
        <input
          className="price"
          type="text"
          placeholder="价格"
          ref={enterPrice}
        />
      </div>

      <div className="select-box">
        <input
          className="currency"
          value={value}
          onChange={(e) => {
            e.target.value = value;
          }}
          type="text"
          placeholder="货币类型"
          ref={currency}
        />

        <span
          className="icon"
          onClick={(e) => {
            e.preventDefault();
            // console.log(showCCY);
            showCCY ? setShowCCY(false) : setShowCCY(true);
          }}
        >
          ▽
        </span>
        {showCCY ? (
          <ul className="select-CCY">
            {props.CCY.map((item, index) => (
              <CCYitem
                key={index}
                ccy={item}
                showCCY={setShowCCY}
                clickCCY={(item) => {
                  clickCCY(item);
                }}
              ></CCYitem>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <button
        className="add"
        onClick={() => {
          addPlanHander();
        }}
      >
        添加
      </button>
    </div>
  );
}
