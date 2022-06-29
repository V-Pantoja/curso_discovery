import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState(); /* [estado que recebe o valor / funcao que atualiza o estado] */
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,

      /* pegando o horario do sistema de forma automatica */
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    /* 
      prevState foi o nome dado para o estado(conteudo) anterior do array
      ...prevState é a maneira de tirar apenas o conteudo do array
      Dessa maneira adicionando e deixando os valores em apenas um array(vetor)
    */
    setStudents(prevState => [...prevState, newStudent]);
  }

  /* o useEffect entra em ação(AUTOMATICAMENTE) assim que os componentes são renderizados */
  useEffect(() => {
    fetch('https://api.github.com/users/V-Pantoja')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>

      <input 
        type="text" 
        placeholder="Digite o nome:"
        onChange={e => setStudentName(e.target.value)} /* passando para a funcao o valor atual do input */
      />
      <button type='button' onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card
            key={student.time} /* essa chave(key) serve para uma performance melhor do React quando se tem varios children, importante que ela seja única */
            name={student.name} 
            time={student.time} 
          />
        ))
      }
    </div>
  )
}
