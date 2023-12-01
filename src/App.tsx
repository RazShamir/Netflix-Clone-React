import { FormEvent, useEffect, useState } from 'react';
import './App.css';
import {MoviesAPI} from './service'
import { Result } from './types';
import TitleList from './components/TitleList';
import { useTitleSearch } from './context/SearchContext';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Welcome from './pages/Welcome';
import Home from './pages/Home';




function App() {

  const { results } = useTitleSearch()

 


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route index element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
