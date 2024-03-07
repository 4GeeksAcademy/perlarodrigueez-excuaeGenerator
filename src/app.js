/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function numeroAleatorio(numero) {
    return 1 * Math.floor(Math.random() * numero.length);
  }

  let whoR = who[numeroAleatorio(who)];
  let actionR = action[numeroAleatorio(action)];
  let whatR = what[numeroAleatorio(what)];
  let whenR = when[numeroAleatorio(when)];
  console.log(whoR + " " + actionR + " " + whatR + " " + whenR);
  let excuseGenerated = whoR + " " + actionR + " " + whatR + " " + whenR;
  const excuse = document.getElementById("excuse");
  console.log(excuse);
  return (excuse.innerHTML = excuseGenerated);
};
