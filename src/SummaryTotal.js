import React from'react';
import USCurrencyFormat from './USCurrencyFormat.js';

export default function SummaryTotal(props) {
    return (
        <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(props.total)}
        </div>
      </div>
    )
}