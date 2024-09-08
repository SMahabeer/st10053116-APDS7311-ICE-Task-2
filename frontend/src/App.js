import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { Routes , Route } from 'react-router-dom';
import PostList from './components/postList';
import EditPost from './components/postEdit';
import CreatePost from './components/postCreate';
import Register from './components/register';
import Login from './components/login';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<PostList/>}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
        <Route path="/create" element={<CreatePost/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
