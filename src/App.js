import React, { useState } from 'react';
import { Container, Content, Row } from './styles';
import { InputContainer } from './components/Input/styles';
import { ButtonContainer } from './components/Button/styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumberClick = (number) => {
    setCurrentNumber(prev => prev + number);
  };

  const handleOperationClick = (op) => {
    if (currentNumber === "") return;

    if (previousNumber !== "") {
      calculate();
    } else {
      setPreviousNumber(currentNumber);
    }

    setCurrentNumber("");
    setOperation(op);
  };

  const calculate = () => {
    if (operation && previousNumber && currentNumber) {
      const prev = parseFloat(previousNumber);
      const curr = parseFloat(currentNumber);
      let result;

      switch (operation) {
        case "+":
          result = prev + curr;
          break;
        case "-":
          result = prev - curr;
          break;
        case "x":
          result = prev * curr;
          break;
        case "/":
          result = prev / curr;
          break;
        default:
          return;
      }

      setCurrentNumber(result.toString());
      setPreviousNumber("");
      setOperation("");
    }
  };

  const handleClear = () => {
    setCurrentNumber("");
    setPreviousNumber("");
    setOperation("");
  };

  return (
    <Container>
      <Content>
        <InputContainer>
          <input value={
              currentNumber ||
              (previousNumber ? `${previousNumber} ${operation}` : "0")
            }
            readOnly />
        </InputContainer>
        <Row>
          <ButtonContainer isSpecial onClick={handleClear}>C</ButtonContainer>
          <ButtonContainer onClick={() => handleOperationClick("±")}>±</ButtonContainer>
          <ButtonContainer onClick={() => handleOperationClick("%")}>%</ButtonContainer>
          <ButtonContainer isOperator onClick={() => handleOperationClick("/")}>÷</ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer onClick={() => handleNumberClick("7")}>7</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick("8")}>8</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick("9")}>9</ButtonContainer>
          <ButtonContainer isOperator onClick={() => handleOperationClick("x")}>×</ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer onClick={() => handleNumberClick("4")}>4</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick("5")}>5</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick("6")}>6</ButtonContainer>
          <ButtonContainer isOperator onClick={() => handleOperationClick("-")}>-</ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer onClick={() => handleNumberClick("1")}>1</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick("2")}>2</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick("3")}>3</ButtonContainer>
          <ButtonContainer isOperator onClick={() => handleOperationClick("+")}>+</ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer isZero onClick={() => handleNumberClick("0")}>0</ButtonContainer>
          <ButtonContainer onClick={() => handleNumberClick(".")}>.</ButtonContainer>
          <ButtonContainer isOperator onClick={calculate}>=</ButtonContainer>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
