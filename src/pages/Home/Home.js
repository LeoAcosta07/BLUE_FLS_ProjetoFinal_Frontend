import React from 'react';
import './Home.css'
import List from '../../components/struture/List/List';

const Home = () => {
   return (
      <div className="form">
         <h1 className="text-center text-primary mt-3">Lista de Tarefas</h1>
         <List/>
      </div>
   )
}

export default Home