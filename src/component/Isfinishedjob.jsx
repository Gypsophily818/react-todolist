import styled from "styled-components";
import Planitem from "./Planitem";
export default function Isfinishedjob({ isfinished, job, clickPlan, rate }) {
  // 组件样式
  const Wrapper = styled.div`
    clear: both;
    margin-bottom: 30px;
  `;
  const Title = styled.p`
    text-align: left;
    padding: 8px 0;
  `;

  const Totalwrapper = styled.div`
    display: flex;
    padding: 8px 0;
  `;
  const TotalLeft = styled.div`
    text-align: left;
    flex: 1;
  `;
  const TotalRight = styled.div`
    text-align: center;
  `;
  const TotalItem = styled.span`
    margin: 0 30px;
    display: inline-block;
  `;

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
