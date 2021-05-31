"use strict";

function modifyText() {
  const t2 = document.querySelector("#t2");

  t2.firstChild.nodeValue =
    t2.firstChild.nodeValue === "three" ? "two" : "three";
}

// Add event listener to table
const element = document.querySelector("#outside");

element.addEventListener("click", modifyText, false);
