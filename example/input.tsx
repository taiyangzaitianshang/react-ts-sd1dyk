import React, { useEffect, useState, useRef } from 'react';

export function UseEffectInput(props) {
  console.log('UseEffectInput');
  const isControl = props.value !== undefined;
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    console.log('effect');
    if (isControl) {
      setValue(props.value);
    }
  });

  const finalValue = isControl ? props.value : value;

  return (
    <input
      value={finalValue}
      onChange={(e) => {
        setValue(e.target.value);
        props.onChange(e.target.value);
      }}
    />
  );
}

export function UseRefInput(props) {
  console.log('UseRefInput');
  const isControl = props.value !== undefined;
  const stateRef = useRef(props.value);

  if (isControl) {
    stateRef.current = props.value;
  }

  const [_, setFlag] = useState({});

  function forceUpdate() {
    setFlag({});
  }

  return (
    <input
      value={stateRef.current}
      onChange={(e) => {
        stateRef.current = e.target.value;
        forceUpdate();
        props.onChange(e.target.value);
      }}
    />
  );
}
