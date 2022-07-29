import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState(1);

  return (
    <button
      type="button"
      onClick={() => {
        setState(1);
      }}
    >
      jiangtong
      {state}
    </button>
  );
};
