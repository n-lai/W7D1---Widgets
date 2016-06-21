"use strict";

const React = require('react');

const Tabs = React.createClass({
  getInitialState() {
    return {focus: 0};
  },

  clicked(index) {
    this.setState({focus: index})
  },

  header() {
    return this.props.tabs.map((tab, index) => {
      let klass = ""
      if (this.state.focus === index) {
        klass = "selected"
      }
      return (

      <div key={index}>
        <h1 onClick={this.clicked.bind(this, index)} className={klass}>{tab.title}</h1>
        <article>{tab.content}</article>
      </div>
    );
    })
  },

  render (){
    return (
      <div>
        {this.header()}
      </div>
  );
  }
});

module.exports = Tabs;
