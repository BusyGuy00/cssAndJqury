import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myLogger from './middlewares/myLogger';
import { composeWithDevTools } from '@redux-devtools/extension';
import ReduxThunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
//리덕스데브툴즈 적용 conposeWithDevTools()
//미들웨어 적용 applymiddelware(미들웨어1, 미들웨어2)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk,myLogger))) //스토어를 통해서 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 라우터 적용 */}
    <BrowserRouter>
    {/* 스토어를 프로바이더를 통해서 App에서 사용 한다.  */}
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
