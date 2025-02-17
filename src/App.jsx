import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Admin from "./components/admin/index"
// import "./i18n"

const App = () => (
  <div className='m-auto'>

    <Navbar />
    <Home />
    <Admin />
  </div>
)

export default App;
