import { useState } from 'react';

export const useTypewriter = () => {
  // set up text to print, each item in array is new line
  let [aText, setAtext] = useState(
    new Array('Lorem Ipsum has', "been the industry's.")
  );
  var iSpeed = 100; // time delay of print out
  let [iIndex, setIindex] = useState(0); // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row

  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById('typedtext');

    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = `
        ${sContents}  ${aText[iIndex].substring(
      0,
      iTextPos
    )}   <span class='lightSabre'> |</span>`;
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      setIindex((prev) => prev + 1);
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }
  return {
    typewriter,
  };
};