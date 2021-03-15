// import styled from "styled-components";
import {
  Wrapper,
  Title,
  Totalwrapper,
  TotalLeft,
  TotalRight,
  TotalItem,
} from "../css/style";
import Planitem from "./Planitem";
export default function Isfinishedjob({ isfinished, job, clickPlan, rate }) {
  // 格式价格
  function formatMoney(price) {
    return price.toPrecision(6);
  }
  // 计算总和
  let sum_CNY = 0;
  let sum_RUB = 0;
  let sum_USD = 0;
  // 人民币
  sum_CNY = job
    .map((item) => {
      return item.CNY * 1;
    })
    .reduce((pre, next) => pre + next);

  // 卢币
  sum_RUB = job
    .map((item) => {
      return item.RUB * 1;
    })
    .reduce((pre, next) => pre + next);

  // 美元
  sum_USD = job
    .map((item) => {
      return item.USD * 1;
    })
    .reduce((pre, next) => pre + next);

  //格式总数
  sum_CNY = formatMoney(sum_CNY);
  sum_RUB = formatMoney(sum_RUB);
  sum_USD = formatMoney(sum_USD);

  return (
    <Wrapper>
      <Title>{isfinished ? "已完成:" : "计划:"}</Title>
      <ul>
        {rate.USD &&
          job.map((item) => {
            return (
              <Planitem
                key={item.id}
                {...item}
                clickPlan={clickPlan}
                rate={rate}
              />
            );
          })}
      </ul>
      <Totalwrapper>
        <TotalLeft>{isfinished ? "一共花了:" : "将要花费:"}</TotalLeft>

        <TotalRight>
          <TotalItem>₽{sum_RUB}</TotalItem>
          <TotalItem>￥{sum_CNY}</TotalItem>
          <TotalItem>${sum_USD} </TotalItem>
        </TotalRight>
      </Totalwrapper>
    </Wrapper>
  );
}
