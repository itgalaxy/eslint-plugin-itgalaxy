import { createRoot, Component } from "react-dom/client";
import SearchProfile from "./SearchProfile.jsx";
import Profile from "./Profile.jsx";
import "./app.scss";

class App extends Component {
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

const container = document.querySelector("#app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App />);
