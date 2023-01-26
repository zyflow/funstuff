import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Test} from './Components/Test';
import Canvas from './Pages/Canvas';

export default function App() {
  return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Canvas />}>
              <Route index element={<Test/>}/>
              <Route path="blogs" element={<Test/>}/>
              <Route path="*" element={<Test/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
