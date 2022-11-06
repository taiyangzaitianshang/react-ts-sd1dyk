import React, { useEffect, useState, useRef } from 'react';
import { UseEffectInput } from './example/input';
import './style.css';

export default function App() {
  console.log('App1');
  const [value, setValue] = useState('');
  return (
    <React.Fragment>
      <UseEffectInput
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </React.Fragment>
  );
}
