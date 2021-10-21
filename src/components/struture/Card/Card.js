import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
   const tarefa = props.data;
   let resumo = `${tarefa.descricao}.`;
   if (resumo.length >= 96){
      resumo = tarefa.descricao.substr(0, 96) + "..."
   }
   
   return (
      <Link to={`/tarefa/${tarefa._id}`} className="col">
    <div className="card">
    <h2 style={{color:"#FFFF"}}>{tarefa.titulo}</h2>
        <div className="content">
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.prioridade}</p>
            <p>{tarefa.status}</p>
            <p>{tarefa.prazo}</p>
        </div>
    </div>
      </Link>

   )
}

export default Card