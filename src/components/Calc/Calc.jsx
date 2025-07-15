import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Calc({startQty}) {
    const [value, setValue]=useState(0);
    useEffect (()=> {
        setValue(startQty)
    },[startQty])
  return (
    <div>
    {value}
      <button type='button' onClick={() => setValue(value + 1)}></button>
    </div>
  )
}
