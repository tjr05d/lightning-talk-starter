import React from 'react';
import ReactDOM from 'react-dom';
import MyFancyComponent from './components/my-fancy-component';

const App = () => <div><MyFancyComponent /></div>

ReactDOM.render(<App />, document.getElementById('app'));