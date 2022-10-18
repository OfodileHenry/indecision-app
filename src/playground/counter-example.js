// let count = 0;
// const minusOne = () => {
//   count--;
//   console.log("Minus one actually displays");
//   renderCounterApp();
// };
// const plusOne = () => {
//   count++;
//   console.log("Plus one actually displays");
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log("Reset Successful!");
//   renderCounterApp();
// };
// const renderCounterApp = () => {
//   const templateThree = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset Counter</button>
//       <button onClick={plusOne}>+1</button>
//     </div>
//   );
//   ReactDOM.render(templateThree, appRoot);
// };
//
// renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
      console.log("componentDidUpdate");
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log("handleAddOne");
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
    console.log("handleMinusOne");
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
    console.log("handleReset");
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 70,
};

ReactDOM.render(<Counter />, document.getElementById("app"));
