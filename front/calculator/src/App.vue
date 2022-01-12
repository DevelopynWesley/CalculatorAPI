<template>
  <div id="app">
    <table class="main-table">
      <tr>
        <td class="td-3span" v-bind:colspan="4">
          <div class="num-span">
            {{ firstNum }} {{ operator }} {{ secondNum }} {{ answer }}
          </div>
        </td>
      </tr>
      <tr class="grid-row">
        <td class="grid-col-hide">
          <button class="number-but" @click="clearCalc()">C</button>
        </td>
        <td class="grid-col-hide">
          <button class="number-but" @click="brackets">()</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="setOperator('%')">%</button>
        </td>
        <td>
          <button class="number-but" @click="setOperator('-')">-</button>
        </td>
      </tr>

      <tr class="grid-row">
        <td class="grid-col">
          <button class="number-but" @click="appendNum(1)">1</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(2)">2</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(3)">3</button>
        </td>
        <td>
          <button class="number-but" @click="setOperator('+')">+</button>
        </td>
      </tr>
      <tr class="grid-row">
        <td class="grid-col">
          <button class="number-but" @click="appendNum(4)">4</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(5)">5</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(6)">6</button>
        </td>
        <td>
          <button class="number-but" @click="setOperator('*')">*</button>
        </td>
      </tr>
      <tr class="grid-row">
        <td class="grid-col">
          <button class="number-but" @click="appendNum(7)">7</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(8)">8</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(9)">9</button>
        </td>
        <td>
          <button class="number-but" @click="setOperator('-')">-</button>
        </td>
      </tr>
      <tr class="grid-row-right">
        <td class="grid-col">
          <button class="number-but" @click="clearCalc()">C</button>
        </td>
        <td class="grid-col-hide">
          <button class="number-but" @click="appendNum(8)"></button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="appendNum(0)">0</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="equalClicked">=</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},

  data: function () {
    return {
      firstNum: "",
      secondNum: "",
      operator: null,
      answer: null,
    };
  },

  methods: {
    equalClicked() {
      switch (this.operator) {
        case null:
          console.log("Operator is null");
          break;

        case "+":
          axios
            .get(
              "http://localhost:3000/sum/" +
                this.firstNum.toString() +
                "/" +
                this.secondNum.toString()
            )
            .then((response) => (this.answer = "Answer: " + response.data))

            .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log(error.message);
              }
            });
          this.firstNum = null;
          this.secondNum = null;
          this.operator = null;
          break;

        case "-":
          axios
            .get(
              "http://localhost:3000/sub/" +
                this.firstNum.toString() +
                "/" +
                this.secondNum.toString()
            )
            .then((response) => (this.answer = "Answer: " + response.data))

            .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log(error.message);
              }
            });
          this.firstNum = null;
          this.secondNum = null;
          this.operator = null;
          break;

        case "*":
          axios
            .get(
              "http://localhost:3000/mul/" +
                this.firstNum.toString() +
                "/" +
                this.secondNum.toString()
            )
            .then((response) => (this.answer = "Answer: " + response.data))

            .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log(error.message);
              }
            });
          this.firstNum = null;
          this.secondNum = null;
          this.operator = null;
          break;

        case "/":
          axios
            .get(
              "http://localhost:3000/div/" +
                this.firstNum.toString() +
                "/" +
                this.secondNum.toString()
            )
            .then((response) => (this.answer = "Answer: " + response.data))

            .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log(error.message);
              }
            });
          this.firstNum = null;
          this.secondNum = null;
          this.operator = null;
          break;

        case "%":
          axios
            .get(
              "http://localhost:3000/per/" +
                this.firstNum.toString() +
                "/" +
                this.secondNum.toString()
            )
            .then((response) => (this.answer = "Answer: " + response.data))

            .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.status);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log(error.message);
              }
            });
          this.firstNum = null;
          this.secondNum = null;
          this.operator = null;
          break;

        default:
          break;
      }
    },

    brackets() {},
    percent() {},
    clearCalc() {
      this.firstNum = null;
      this.secondNum = null;
      this.operator = null;
      this.answer = null;
    },
    setOperator(operation) {
      this.operator = operation;
    },
    appendNum(number) {
      this.answer = null;
      if (this.operator == null) {
        if (this.firstNum == null) {
          this.firstNum = number;
        } else {
          this.firstNum += "" + number.toString();
        }
      } else {
        if (this.secondNum == null) {
          this.secondNum = number;
        } else {
          this.secondNum += "" + number.toString();
        }
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  justify-content: center;
}

.main-table {
  background-color: burlywood;
  text-align: right;
  padding: 1rem;
}

.grid-row {
  min-height: 2rem;
}

.grid-row-right {
  min-height: 2rem;
  text-align: right;
}

.grid-col-hide {
  width: 33%;
  min-height: 2rem;
  visibility: hidden;
}
.grid-col {
  width: 33%;
  min-height: 2rem;
}
.num-span {
  width: 100%;
  height: 2rem;
  background-color: white;
  border: 1px solid black;
  padding-top: 1rem;
}
.number-but {
  position: relative;
  width: 4rem;
  height: 4rem;
  padding-bottom: 20%;
  text-align: center;
}
</style>
