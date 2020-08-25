import React from 'react';
import Option from './Options.js';

export default function Feature(props) {
  const featureHash = props.feature + '-' + props.idx;
  // console.log(props.options)
  

  return (
    
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {props.options.map((item, idx) => 
        <Option item={item} key={idx} feature={props.feature} 
                selectedOption={props.selectedOption}
                onChangeOption={props.onChangeOption}
                selectedName ={props.selectedName} />
      )}
    </fieldset>
    
  );
  
}