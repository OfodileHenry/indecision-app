import React from "react";

import AddOption from "./AddOption";
// import Option from "./Option";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };
  // handleDeleteOption(optionToRemove) {
  //   this.setState((prevState) => ({
  //     options: prevState.options.filter((option) => {
  //       return optionToRemove !== option;
  //     }),
  //   }));
  // }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Item Entered already exists in the data set/pool!";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat([option]),
    //   };
    // });
  };
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     options: [],
  //   };
  // }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
    } finally {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data!");
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: [],
  //     };
  //   });
  // }

  render() {
    const title = "Random thoughts Component based app";
    const sub_title = "Put your thoughts in the hands of a computer";
    // const options = ["thing one", "thing two", "thing three"];
    return (
      <div>
        <Header title={title} sub_title={sub_title} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
