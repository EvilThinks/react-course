import React, { PureComponent } from 'react';
import ShowPreview from '../ShowPreview';

class Search extends PureComponent {
  state = {
    input: ''
  };
  render() {
    const { isFetching, error, series } = this.props;

    if (isFetching) {
      return <p>Выполняется поиск</p>;
    }

    if (error) {
      return <p>Произошла ошибка: {error}</p>;
    }
    return (
      <div>
        <div className="wrapper-input" style={{ textAlign: 'center' }}>
          <input
            placeholder="Введите название сериала"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleClickOnSearch}>Найти</button>
        </div>
        <ul className="t-search-result">
          {series &&
            series.map(show => (
              <ShowPreview
                key={show.id}
                name={show.name}
                image={show.image}
                id={show.id}
                summary={show.summary}
              ></ShowPreview>
            ))}
        </ul>
      </div>
    );
  }
  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };
  handleClickOnSearch = () => {
    this.setState({ input: '' });
    this.props.searchRequest(this.state.input);
  };
}

export default Search;
