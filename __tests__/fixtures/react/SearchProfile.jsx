import React from 'react';

const API = 'https://api.github.com/users';

class SearchProfile extends React.Component {
    constructor(props) {
        super(props);

        this.handleForm = this.handleForm.bind(this);
    }

    fetchProfile(username) {
        let data = this.props.data;
        const url = `${API}/${username}`;

        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                data = {
                    avatar: response.avatar_url,
                    followers: response.followers,
                    following: response.following,
                    homeUrl: response.html_url,
                    location: response.location,
                    name: response.name,
                    notFound: response.message,
                    repos: response.public_repos,
                    username: response.login
                };

                return data;
            })
            // eslint-disable-next-line no-console
            .catch((error) => console.log(error.stack || error));
    }

    handleForm(event) {
        event.preventDefault();

        const username = this.username.getDOMNode().value;

        this.fetchProfile(username);
        this.username.getDOMNode().value = '';
    }

    render() {
        return (
            <div className="search--box">
                <form onSubmit={this.handleForm}>
                    <label htmlFor="username">
                        <input name="username" placeholder="Type Username + Enter" type="search" />
                    </label>
                </form>
            </div>
        );
    }
}

SearchProfile.propTypes = {
    data: React.PropTypes.string.isRequired
};

export default SearchProfile;
