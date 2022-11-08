const Calculator = require('./task-3/calculator');

describe('Test the add method in the Calculator class', () => {

  test('1 + 2 should be equal to 3', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const add = calculator.add(1, 2);

    //Assert
    expect(add).toBe(3);
  });

  test('1 + (- 2) should be equal to -1', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const add = calculator.add(1, -2);

    //Assert
    expect(add).toBe(-1);
  });

  test('100 + 10 should be equal to 110', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const add = calculator.add(100, 10);

    //Assert
    expect(add).toBe(110);
  });
});

describe('Test the subtruct method in the Calculator class', () => {

  test('1 - 2 should be equal to -1', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const subtract = calculator.subtract(1, 2);

    //Assert
    expect(subtract).toBe(-1);
  });

  test('1 - (- 2) should be equal to 3', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const subtract = calculator.subtract(1, -2);

    //Assert
    expect(subtract).toBe(3);
  });

  test('100 - 10 should be equal to 90', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const subtract = calculator.subtract(100, 10);

    //Assert
    expect(subtract).toBe(90);
  });
});

describe('Test the divide method in the Calculator class', () => {

  test('1 / 2 should be equal to 0.5', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const divide = calculator.divide(1, 2);

    //Assert
    expect(divide).toBeCloseTo(0.5);
  });

  test('1 / (- 2) should be equal to -0.5', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const divide = calculator.divide(1, -2);

    //Assert
    expect(divide).toBeCloseTo(-0.5);
  });

  test('0 / 1 should return "Invalid first number"', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const divide = calculator.divide(0, 1);

    //Assert
    expect(divide).toBe('Invalid first number');
  });

  test('10 / 0 should return "Invalid second number"', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const divide = calculator.divide(10, 0);

    //Assert
    expect(divide).toBe('Invalid second number');
  });
});

describe('Test the multiply method in the Calculator class', () => {

  test('1 * 2 should be equal to 2', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const multiply = calculator.multiply(1, 2);

    //Assert
    expect(multiply).toBe(2);
  });

  test('1 * (- 2) should be equal to -2', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const multiply = calculator.multiply(1, -2);

    //Assert
    expect(multiply).toBe(-2);
  });

  test('100 * 10 should be equal to 1000', () => {
    //Arrange
    const calculator = new Calculator();

    //Act
    const multiply = calculator.multiply(100, 10);

    //Assert
    expect(multiply).toBe(1000);
  });
});