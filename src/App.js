import React, { Component } from 'react';
import Cart from "./Cart.js";
import FEATURES from './AvailableFeatures.js';
import Form from "./Form.js";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values


export default class App extends Component {

  
  constructor(props) {
    super(props);

    const selected = {};
    for (const featureName in FEATURES) {
      selected[featureName] = FEATURES[featureName][0]
    }

    this.state = { selected };
  }
  

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Form 
            features={FEATURES}
            selected={this.state.selected}
            onChangeOption={this.updateFeature}
          />
          <Cart 
          
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}