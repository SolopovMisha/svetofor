    const redDiv = document.getElementById('red');
    const greenDiv = document.getElementById('green');
    const resultDiv = document.getElementById('result');
    

    let isGreenActive = false;
    let isRedActive = false;

    function toggleGreen() {
      if (isGreenActive) {
        greenDiv.style.backgroundColor = '#7e7e7e';
        isGreenActive = false;
        resultDiv.textContent = '';
        console.log("светофор выключен");
      } else {

        greenDiv.style.backgroundColor = 'green';
        redDiv.style.backgroundColor = '#7e7e7e';
        resultDiv.textContent = 'Можно идти';
        isGreenActive = true;
        isRedActive = false;
        console.log("зеленый");
      }
    }

    function toggleRed() {
      if (isRedActive) {
        redDiv.style.backgroundColor = '#7e7e7e';
        isRedActive = false;
        resultDiv.textContent = '';
        console.log("светофор выключен");
      } else {

        redDiv.style.backgroundColor = 'red';
        greenDiv.style.backgroundColor = '#7e7e7e';
        resultDiv.textContent = 'Нельзя идти';
        isRedActive = true;
        isGreenActive = false;
        console.log("красный");
      }
    }

    greenDiv.onclick = toggleGreen;
    redDiv.onclick = toggleRed;