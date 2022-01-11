<template>
  <div id="app">
    <table class="main-table">
      <tr>
        <td class="td-3span" v-bind:colspan="3">
          <div class="num-span">
            {{ firstNum }} {{ operator }} {{ secondNum }}
          </div>
        </td>
      </tr>
      <tr class="grid-row">
        <td class="grid-col">
          <button class="number-but" @click="clearCalc()">C</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="brackets">()</button>
        </td>
        <td class="grid-col">
          <button class="number-but" @click="percent">%</button>
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
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: function () {
    return {
      firstNum: "",
      secondNum: "",
      operator: null,
    };
  },

  methods: {

    brackets(){

    },
    percent(){},
    clearCalc(){

      this.firstNum = null;
      this.secondNum = null;
      this.operator = null;

    },
    setOperator(operation) {
      this.operator = operation;
    },
    appendNum(number) {
      // update page of items
      if (this.operator == null) {
        this.firstNum += +"" + number;
      } else {
        this.secondNum += "" + number;
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
}

.grid-row {
  min-height: 2rem;
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
}
.number-but {
  position: relative;
  width: 4rem;
  height: 4rem;
  padding-bottom: 20%;
  text-align: center;
}
</style>
