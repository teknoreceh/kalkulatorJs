function tambah() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").value = result;
}

function kurang() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 - num2;
  document.getElementById("result").value = result;
}

function kali() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 * num2;
  document.getElementById("result").value = result;
}

function bagi() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 / num2;
  document.getElementById("result").value = result;
}

