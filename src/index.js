import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FireBaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <React.StrictMode>
    <FireBaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FireBaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// client side rendered app: react (cra)
// --> database which is firebase
// react-loading-skeleton
// tailwind

// architecture
//src
// components
// constants
// context
// helpers
// hooks
// lib (firebase is going to live in here )
// services (firebase functions in here)
// styles (tailwind's folder (app/taiwind))
