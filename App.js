import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import { myColor } from "./Styles/Colors";
export default function App() {
  
  const [resultText, setResultText] = useState("");
  const [calcText, setCalcText] = useState("");
  const [theme, setTheme] = useState('light');

  const onButtonClick = (text) => {
    try {
      if (text == "=") {
        return calculateResult();
      }
      setResultText(resultText + text);
    }
    catch (error) {

    }
  }
  const calculateResult = () => {
    setCalcText(eval(resultText));
  };

  const onOperationClick = (operation) => {
    const operations = ["DEL", "+", "-", "*", "/"];

    if (operation == "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }
    if (operation == "AC") {
      setResultText("");
      setCalcText(0);
      return;
    }
    if (operations.includes(resultText.toString().split("").pop())) return;
    setResultText(resultText + operation);
  };

  return (
    <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: 'black' }]}>
      <Switch value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={{ top: 20, flex: 1, alignSelf: 'center' }} />

      <View style={theme === 'light' ? styles.result : [styles.result, { backgroundColor: 'black' }]}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={theme === "light" ? styles.calculation : [styles.calculation, { backgroundColor: myColor.black }]}>
        <Text style={styles.calculationText}>{resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={theme === 'light' ? styles.numbers : [styles.numbers, { backgroundColor: 'black' }]}>
          <View style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center", top: 30
          }}>
            <TouchableOpacity
              onPress={() => onOperationClick("DEL")}
              style={styles.btn}
            >
              <Text style={{
                fontSize: 25,
                color: "green",
                borderRadius: 50,
                backgroundColor: 'black',
                padding: 15,
                width: 85,
                height: 85,
                textAlign: 'center', color: "green",
                backgroundColor: myColor.light,

              }}>⌫</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick("AC")}
              style={styles.btn}
            >
              <Text style={{
                fontSize: 30,
                color: "red",
                borderRadius: 50,
                backgroundColor: myColor.light,
                padding: 15,
                width: 85,
                height: 85,
                textAlign: 'center',
              }}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onOperationClick("+")}
              style={styles.btn}
            >
              <Text style={styles.operationButton}>+</Text>
            </TouchableOpacity>

          </View>

          <View style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center", top: 20
          }}>

            <TouchableOpacity
              onPress={() => onButtonClick(7)}
              style={styles.btn}
            >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(8)}
              style={styles.btn}
            >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(9)}
              style={styles.btn}
            >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center", top: 10
          }}>
            <TouchableOpacity
              onPress={() => onButtonClick(4)}
              style={styles.btn}
            >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(5)}
              style={styles.btn}>

              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(6)}
              style={styles.btn}
            >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row", flex: 1,
            justifyContent: "space-around", alignItems: "center", top: 5
          }}>
            <TouchableOpacity
              onPress={() => onButtonClick(1)}
              style={styles.btn}
            >
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(2)}
              style={styles.btn}
            >
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(3)}
              style={styles.btn}
            >
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center"
          }}>
            <TouchableOpacity
              onPress={() => onButtonClick(".")}
              style={styles.btn}
            >
              <Text style={{
                fontSize: 30,

                borderRadius: 50,
                backgroundColor: 'black',
                padding: 15,
                width: 85,
                height: 85,
                textAlign: 'center',
                right: 25,
                color: myColor.btnDark,
                backgroundColor: myColor.light,
              }}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onButtonClick(0)}
              style={styles.btn}
            >
              <Text style={{
                fontSize: 30,
                color: myColor.btnDark,
                backgroundColor: myColor.light,
                borderRadius: 50,

                padding: 15,
                width: 85,
                height: 85,
                textAlign: 'center',
                right: 75
              }}>0</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={theme === 'light' ? styles.operations : [styles.operations, { backgroundColor: myColor.btnDark }]}>
          <TouchableOpacity
            onPress={() => onOperationClick("-")}
            style={styles.btn}
          >
            <Text style={{
              fontSize: 30,
              color: "green",
              borderRadius: 50,
              backgroundColor: myColor.light,
              padding: 15,
              width: 85,
              height: 85,
              textAlign: 'center',
              top: 20
            }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("/")}
            style={styles.btn}
          >
            <Text style={{
              fontSize: 30,
              color: "green",
              borderRadius: 50,
              backgroundColor: myColor.light,
              padding: 15,
              width: 85,
              height: 85,
              textAlign: 'center', bottom: 15
            }}>÷
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onOperationClick("*")}
            style={styles.btn}
          >
            <Text style={{
              fontSize: 30,
              color: "green",
              borderRadius: 50,
              backgroundColor: myColor.light,
              padding: 15,
              width: 85,
              height: 85,
              textAlign: 'center', bottom: 50
            }}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButtonClick("=")}
            style={styles.btn}
          >
            <Text style={{
              fontSize: 30,
              color: "white",
              borderRadius: 3,
              backgroundColor: 'green',
              padding: 14,
              width: 97,
              height: 84,
              textAlign: 'center',
              top: 23
            }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 30,
    color: "green",
  },
  calculationText: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
  number: {
    fontSize: 30,
    color: myColor.btnDark,
    backgroundColor: myColor.light,
    borderRadius: 50,
    padding: 15,
    width: 85,
    height: 85,
    textAlign: 'center',

  },
  calculation: {
    flex: 1,
    backgroundColor: myColor.light,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: "30",

  },
  buttons: {
    flex: 7,
    flexDirection: "row",

  },
  numbers: {
    flex: 3,
    // backgroundColor: "#434343",

  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",

  },
  operations: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",

  },
  operationButton: {
    fontSize: 30,
    color: "green",
    borderRadius: 50,
    backgroundColor: myColor.light,
    padding: 15,
    width: 85,
    height: 85,
    textAlign: 'center',


  },
});
