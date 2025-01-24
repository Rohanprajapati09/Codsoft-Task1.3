
const resultField = document.getElementById('result');


function append(value) {
  resultField.value += value;
}


function clearResult() {
  resultField.value = '';
}


function deleteLast() {
  resultField.value = resultField.value.slice(0, -1);
}


function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    alert('Invalid Expression');
    clearResult();
  }
}
