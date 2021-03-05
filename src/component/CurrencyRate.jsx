export default function CurrencyRate(props) {
  function RUB_CNY(rate) {
    // 人民币=>卢布
    return rate.rate.RUB.previous.toFixed(3);
  }
  function RUB_USD(rate) {
    // 美元=>卢布
    // (1 / USD.previous) * RUB.previous;
    return ((1 / rate.rate.USD.previous) * rate.rate.RUB.previous).toFixed(3);
  }
  function CNY_USD(rate) {
    // 美元=>人民币
    // 1/USD.previous
    return (1 / rate.rate.USD.previous).toFixed(3);
  }
  return (
    <div className="rate-box">
      <span className="currency-rate">{RUB_CNY(props)}₽/￥</span>
      <span className="currency-rate">{RUB_USD(props)}₽/$</span>
      <span className="currency-rate">{CNY_USD(props)}￥/$</span>
    </div>
  );
}
