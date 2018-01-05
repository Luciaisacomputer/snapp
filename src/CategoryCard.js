import React, { Component } from 'react';


class CategoryCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {categoryName} = this.props;
    return (
      <div className="Card">
        <h2>{categoryName}</h2>
      </div>
    );
  }
}

export default CategoryCard;
