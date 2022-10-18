var app = {
  title: "My Indecision App",
  subTitle: "Put some info on display in a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("preventDefault : ", e.target.elements.options.value);
  const option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
    renderFormTemplate();
  }
};

const onRemoveAll = () => {
  app.options.length = 0;
  renderFormTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};

var appRoot = document.getElementById("app");

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderFormTemplate();
};

const renderFormTemplate = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subTitle}</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Here are the details you seek!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderFormTemplate();

var user = {
  name: "henry",
  age: 27,
  location: "New York",
};
var userName = "henry";
var userAge = 27;
var userLocation = "New York";
function getLocation(location) {
  if (location) {
    return <p>location:{user.location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age:{user.age}</p>}
    {getLocation(user.location)}
  </div>
);
