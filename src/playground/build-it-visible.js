class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderFormTemplate();
// };
//
// const renderFormTemplate = () => {
//   var template = (
//     <div>
//       <h1>{app.title}</h1>
//       <p>{app.subTitle}</p>
//       <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//       <p>{app.options.length}</p>
//       <button onClick={onRemoveAll}>Remove All</button>
//       <button disabled={app.options.length === 0} onClick={onMakeDecision}>
//         What should I do?
//       </button>
//       <ol>
//         {app.options.map((option) => {
//           return <li key={option}>{option}</li>;
//         })}
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="options" />
//         <button>Add Option</button>
//       </form>
//       <button onClick={toggleVisibility}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Here are the details you seek!</p>
//         </div>
//       )}
//     </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
