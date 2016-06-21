const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const AutoComplete = React.createClass({
  getInitialState() {
    return {string: ""}
  },

  handleChange(event) {
    this.setState({string: event.target.value})
  },

  handleClick(el) {
    this.setState({string: el.title})
  },

  render() {

    let library = this.props.names;
    let string = this.state.string.trim().toLowerCase();
    let that = this;

    if (string.length > 0){
      library = library.filter(function(el) {
        return el.title.toLowerCase().match(string);
      });
      library = library.map(function(el) {
        let title = el.title;
        return <li key={title} onClick={that.handleClick.bind(that, el)}>{title}</li>
      })

    } else {
      library = "";
    }


    return (
      <div>
        <input type="text"
          value={this.state.string}
          onChange={this.handleChange}
        />

        <ul>
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {library}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
})

module.exports = AutoComplete;
