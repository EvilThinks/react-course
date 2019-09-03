import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class ShowPreview extends PureComponent {
  render() {
    const { name, image, id, summary } = this.props;
    return (
      <li className="t-preview">
        <h3>
          {
            <Link className="t-link" to={`/shows/${id}`}>
              {name}
            </Link>
          }
        </h3>
        {image && <img src={image.medium} alt={name} />}
        <div  dangerouslySetInnerHTML={{ __html: summary }}></div>
      </li>
    );
  }
}
