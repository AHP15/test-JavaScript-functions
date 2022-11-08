
class Calculator {

    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    divide(x, y) {

        if(x === 0) {
            return 'Invalid first number';
        }

        if(y === 0) {
            return 'Invalid second number';
        }

        return x / y;
    }

    multiply(x, y) {
        return x * y;
    }

}

module.exports = Calculator;