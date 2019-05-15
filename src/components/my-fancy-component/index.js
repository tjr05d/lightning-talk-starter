import React from 'react';

const MyFancyComponent = () => {
  const fireAlert = () => window.alert('Food is on the way');

  return <button onClick={fireAlert}>Click Here to Order Food</button>
}

export default MyFancyComponent;
