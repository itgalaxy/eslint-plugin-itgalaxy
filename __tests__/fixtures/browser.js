"use strict";

function modifyText() {
  const t2 = document.querySelector("#t2");

  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// Add event listener to table
const element = document.querySelector("#outside");

element.addEventListener("click", modifyText, false);
