// App.js
import React from 'react';
import MyImageComponent from './MyImageComponent';

function App() {
  const imageUrl = 'logo.png';

  return (
    <div>
      <h1>Displaying an Image in React</h1>
      <MyImageComponent imageUrl={imageUrl} />
    </div>
  );
}

export default App;
