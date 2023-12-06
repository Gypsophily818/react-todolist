export default function CurrencyRate({ rate }) {
    // 人民币=>卢布
  let RUB_CNY = rate.RUB.value.toFixed(3)
  // // 美元=>卢布
  let RUB_USD = ((1 / rate.USD.value) * rate.RUB.value).toFixed(3);
   // // 美元=>人民币
  let CNY_USD = (1 / rate.USD.value).toFixed(3);
  return (
    <div className="rate-box">
      <span className="currency-rate">{RUB_CNY} ₽/￥</span>
      <span className="currency-rate">{RUB_USD} ₽/$</span>
      <span className="currency-rate">{CNY_USD} ￥/$</span>
    </div>
  );
}
