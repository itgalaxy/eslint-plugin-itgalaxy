import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { count: props.count };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <h1>
        Hello, {name}, count ${count}!
      </h1>
    );
  }
}

export default Greeting;
