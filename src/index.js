import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Questions from './pages/Questions';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';


ReactDOM.render(
  <Router>
      <App>
        <Routes>
          <Route exact path='/' element={<Questions />} />
          <Route exact path='/test1' element={<Test1 />} />
          <Route exact path='/test2' element={<Test2 />} />
        </Routes>
      </App>
    </Router>,
  document.getElementById('root')
);
