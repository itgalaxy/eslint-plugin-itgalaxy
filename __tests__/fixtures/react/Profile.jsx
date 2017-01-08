import React from 'react';

class Profile extends React.Component {
    render() {
        const { data } = this.props;
        const followers = `${data.homeUrl}/followers`;
        const repositories = `${data.homeUrl}?tab=repositories`;
        const following = `${data.homeUrl}/following`;

        if (data.notFound === 'Not Found') {
            return (
                <div className="notfound">
                    <h2>{'Oops !!!'}</h2>
                    <p>{'The Component Couldn\'t Find The You Were Looking For. Try Again'}</p>
                </div>
            );
        }

        return (
            <section className="github--profile">
                <div className="github--profile__info">
                    <a
                        href={data.homeUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={data.name || data.username}
                    >
                        <img alt={data.username} src={data.avatar} />
                    </a>
                    <h2>
                        <a
                            href={data.homeUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                            title={data.username}
                        >
                            {data.name || data.username}
                        </a>
                    </h2>
                    <h3>{data.location || 'I Live In My Mind'}</h3>
                </div>
                <div className="github--profile__state">
                    <ul>
                        <li>
                            <a
                                href={followers}
                                rel="noopener noreferrer"
                                target="_blank"
                                title="Number Of Followers"
                            >
                                <i>{data.followers}</i>
                                <span>{'Followers'}</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={repositories}
                                rel="noopener noreferrer"
                                target="_blank"
                                title="Number Of Repositoriy"
                            >
                                <i>{data.repos}</i>
                                <span>{'Repositoriy'}</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={following}
                                rel="noopener noreferrer"
                                target="_blank"
                                title="Number Of Following"
                            >
                                <i>{data.following}</i>
                                <span>{'Following'}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

Profile.propTypes = {
    data: React.PropTypes.string.isRequired
};

export default Profile;
