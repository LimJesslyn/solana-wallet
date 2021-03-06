import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import Home from './views/home/home';
import SignIn from './views/sign-in/sign-in';
import NFT from './views/nft/nft';
import reportWebVitals from './reportWebVitals';
import SignOut from './views/sign-out/sign-out';
import RequireAuth from './components/auth/requireAuth';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={'/'}>
      <Provider store={store}>
        <App>
          <Routes>
            <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>} />
            <Route exact path="/nft" element={<RequireAuth><NFT /></RequireAuth>} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/sign-out" element={<SignOut />} />
            <Route path="*" element={<div>404 Not found</div>} />
          </Routes>
        </App>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
