import React from "react";
import Features from "./Features.js"

export default function Form(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(props.features).map((feature, idx) =>
              <Features feature={feature} key={feature + idx} idx={idx}
                       options={props.features[feature]}
                       selectedOption={props.selected[feature].name}
                       onChangeOption={props.onChangeOption}
                       selectedName={props.selected[feature].name} />
            )}
        </form>
    )
} 

