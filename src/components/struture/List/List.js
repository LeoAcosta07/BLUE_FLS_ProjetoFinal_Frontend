import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Api from '../../../api/api'

const List = () => {
   const [tarefas, setTarefas] = useState([]);

   useEffect(() => {
      getTarefas();
   }, []);

   const getTarefas = async () => {
      const response = await Api.fetchGetAll();
      const data = await response.json();
      setTarefas(data);
   }

   return (
      <div className="container col">
         {
            tarefas.map((tarefa, index) => (
               <Card data={tarefa} key={index} />
            ))
         }
      </div>
   )
}

export default List