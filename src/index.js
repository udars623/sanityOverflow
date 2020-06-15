import "./styles.css";
import Sanity from "/src/sanity.js";

document.getElementById("app").innerHTML = `
<h1>Sanity Overflow</h1>
<h2 id="sanity1"></h2>
<div id="form1"></div>
<h2 id="sanity2"></h2>
<div id="form2"></div>
<h2 id="sanity3"></h2>
<div id="form3"></div>
`;

let sanity = [];
for (let i = 1; i <= 3; i++) {
    sanity[i] = new Sanity(
        "sanity" + i.toString(),
        "form" + i.toString(),
        "[Sanity " + i.toString() + "]"
    );
    sanity[i].init();
}
