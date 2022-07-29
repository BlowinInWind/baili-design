import React, { useState } from 'react';

export default () => {
  const [state, setState] = useState(1);

  return <input value={state} />;
};
