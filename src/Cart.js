import React from 'react';

import Summary from "./Summary.js";
import SummaryTotal from './SummaryTotal.js';

export default function Cart(props) {
  
  const total = Object.keys(props.selected).reduce(
      (acc, curr) => acc + props.selected[curr].cost,
      0
    );
  
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(props.selected).map((feature, idx) => 

      <Summary
        selectedOption = {props.selected[feature]}
        key={feature + idx}
        />
      )}
      <SummaryTotal 
        total={total}
      />
    </section>
  )
}