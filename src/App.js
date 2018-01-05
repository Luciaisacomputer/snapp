import React, { Component } from 'react';
import './App.css';
import categories from './categories'
import CategoryCard from './CategoryCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.renderCategories = this.renderCategories.bind(this);
  }

  renderCategories(){
    var categoryCards = categories.data.map(function(card, index){
      const {id, categoryName} = card;
      return (
        <CategoryCard 
            cardId={id} 
            categoryName={categoryName} 
            key={index}/>
      );
    });

    return categoryCards;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Sprint Naming App</h2>
        </div>
        <div className="card-container">
            {this.renderCategories()}
        </div>
      </div>
    );
  }
}

export default App;
