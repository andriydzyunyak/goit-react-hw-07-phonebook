import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={GlobalStyle} />
      <App />
    </Provider>
  </React.StrictMode>
);
