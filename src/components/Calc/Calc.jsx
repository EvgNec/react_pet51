import React, { useState, useEffect } from 'react';
import css from './Calc.module.css';

export default function Calc({ startQty }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(startQty);
  }, [startQty]);
  return (
    <div>
     <p className={css.scr}>{value}</p> 
      <button 
      className={css.btn}
      type="button" 
      onClick={() => setValue(value + 1)}>
        Add
      </button>
    </div>
  );
}
