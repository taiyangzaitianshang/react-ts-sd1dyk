import React, { useState } from 'react';
import './style.css';

export default function App() {
  const { value, setValue } = useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
