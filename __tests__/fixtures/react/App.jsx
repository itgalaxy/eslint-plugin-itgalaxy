import React from "react";
import ReactDOM from "react-dom";
import SearchProfile from "./SearchProfile.jsx";
import Profile from "./Profile.jsx";
import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "hesmaili",
    };
  }

  componentDidMount() {
    const { username } = this.state;

    SearchProfile.fetchProfile(username);
  }

  render() {
    return (
      <div>
        <section id="card">
          <SearchProfile data={this.state} />
          <Profile data={this.state} />
        </section>
        <span className="hesmaili">
          GitHub Card With ReactJs - Created By{" "}
          <a
            href="https://twitter.com/hesmaili95"
            rel="noopener noreferrer"
            target="_blank"
            title="Hamed Esmaili"
          >
            <SearchProfile data={this.state} />
            Hamed Esmaili
          </a>
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
