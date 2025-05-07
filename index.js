function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      result = 'Введите оба числа!';
    } else {
      switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
          if (num2 === 0) {
            result = 'На ноль делить нельзя!';
          } else {
            result = num1 / num2;
          }
          break;
        default: result = 'Неизвестная операция';
      }
    }

    document.getElementById('result').textContent = 'Результат: ' + result;
  }