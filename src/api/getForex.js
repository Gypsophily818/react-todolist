export default function getForex() {
  // return fetch("https://api.globus.furniture/forex").then((response) => {
  return fetch("/forex").then((response) => {
    return response.json();
  });
}
