import { useState } from 'react';

// Custom hook to toggle state
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState(prevState => !prevState);

  return [state, toggle];
}

export default useToggle;