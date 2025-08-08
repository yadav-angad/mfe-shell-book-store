import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { SharedContextProvider } from 'sharedContext/SharedContextProvider';
import { store } from 'sharedContext/store';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><SharedContextProvider><App /></SharedContextProvider></Provider>, document.getElementById('root'));
