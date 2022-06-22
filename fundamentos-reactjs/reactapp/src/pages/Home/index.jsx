import React, { useState } from 'react';
import './style.css';
import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState(); // [estado que recebe o valor / funcao que atualiza o estado]

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        placeholder='Digite o nome:'
        onChange={e => setStudentName(e.target.value)} /* passando para a funcao o valor atual do input */
      />
      <button type='button'>Adicionar</button>

      <Card name="Victor" time="10:55:22" />
      <Card name="Wesley" time="11:00:45" />
      <Card name="Matheus" time="14:10:52" />
    </div>
  )
}
