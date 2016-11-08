import './app.scss';
import Profile from './Profile';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchProfile from './SearchProfile';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar: '',
            followers: '',
            following: '',
            homeUrl: '',
            location: '',
            name: '',
            notFound: '',
            repos: '',
            username: 'hesmaili'
        };
    }

    componentDidMount() {
        SearchProfile.fetchProfile(this.state.username);
    }

    render() {
        return (
            <div>
                <section id="card">
                    <SearchProfile data={this.state} />
                    <Profile data={this.state} />
                </section>
                <span className="hesmaili">
                    {'GitHub Card With ReactJs - Created By'}
                    <a
                        href="https://twitter.com/hesmaili95"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Hamed Esmaili"
                    >
                        {'Hamed Esmaili'}
                    </a>
                </span>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.body);
