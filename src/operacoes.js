function sum(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 + num2;
}

function sub(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 - num2;
}

function mul(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 * num2;
}

function div(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 / num2;
}

function raiz(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw "Não é um número";
  }
  return num1 ** num2;
}

module.exports = {
  sum,
  sub,
  mul,
  div,
  raiz,
};

// Math.sqrt raiz
// Math.pow potencia
