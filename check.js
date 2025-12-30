import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("./idiom4.csv");
console.log("wrong data: " + data.filter(i => i.四字熟語.indexOf(i.動物) == -1));
