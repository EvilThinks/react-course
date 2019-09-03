import React, { PureComponent } from 'react';

class ShowPage extends PureComponent {
  componentWillMount = () => {
    console.log(this.props);
    const { showRequest, match } = this.props;
    showRequest(match.params.id);
  };
  render() {
    const { show, isFetching } = this.props;
    if (!show.name) {
      return null;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <p>{show.name}</p>
        {show.image && <img src={show.image.medium} alt={show.name} />}
        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
          {show._embedded.cast.map(({ person }) => (
            <div className="t-person" key={person.id}>
              <p>{person.name}</p>
              {person.image && (
                <img src={person.image.medium} alt={person.name} />
              )}
            </div>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      </div>
    );
  }
}

export default ShowPage;
