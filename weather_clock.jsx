const React = require('react');

const Clock = React.createClass({
  getInitialState() {
    return { date: new Date(), weather: null, temp: null }
  },

  tick() {
      this.setState({ date: new Date() })
  },

  componentDidMount() {
    let that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      that.weather(position.coords.latitude, position.coords.longitude)
    });

    this.handle = setInterval(this.tick, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.handle);
    this.handle = 0;
  },

  weather(lat, long) {
    const request = new XMLHttpRequest();
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=645c5d39c7603f17e23fcaffcea1a3c1`, true);
    let that = this;
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {

        const resp = JSON.parse(request.responseText);
        that.setState({weather: JSON.stringify(resp.weather), temp: JSON.stringify(resp.main.temp)});
      } else {
        // We reached our target server, but it returned an error

      }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
  },

  render() {


    return (
    <div>
      {this.state.date.toString()} &nbsp;
      {this.state.weather} &nbsp;
      {this.state.temp}
    </div>
  );
  }


});

module.exports = Clock;
