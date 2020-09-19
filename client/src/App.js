import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div>TEST</div>;
};

export default App;
