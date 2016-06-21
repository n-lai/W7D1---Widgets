const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require("./tabs.jsx");
const Clock = require("./weather_clock.jsx");
const AutoComplete = require("./autocomplete.jsx")

const Widgets = React.createClass({


  render() {
    const tabs = [
      {title: "Weather", content: "Cloudy"},
      {title: "Clock", content: "11:15AM"}
    ];
    const names = [
      {title: "weather"},
      {title: "clock"},
      {title: "photos"},
      {title: "pocky"},
      {title: "chips"},
      {title: "water"},
      {title: "tea"},
      {title: "coffee"},
      {title: "bears"},
      {title: "latte"},
      {title: "coconut water"},
      {title: "chessmen"}

    ]
    return(

      <div>
        Hello Widgets
        <Tabs tabs={tabs}/>
        <Clock />
        <AutoComplete names={names}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
