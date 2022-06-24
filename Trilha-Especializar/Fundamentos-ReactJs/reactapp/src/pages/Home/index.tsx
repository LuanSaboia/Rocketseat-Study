import React, { useState, useEffect } from 'react';
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  //criando estado / dentro de useState pode definir valor inicial
  const [studentName, setStudentName] = useState();
  const [students, setStudent] = useState([]);
  const [user, setUser] = useState([{name: '', avatar: ''}]);

  function handleAddStudent(){
    if(studentName){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    console.log(newStudent)
    setStudent(prevState => [...prevState, newStudent]);}
  }
  
  useEffect(() => {
    //corpo do useEffect, renderiza sempre que iniciar codigo
    //em [] pode ser passado instâncias de quando será carregado dnv
    
    //Método 1 sem async
    // fetch('https://api.github.com/users/LuanSaboia')
    // .then(response => response.json())
    // .then(data => {
    //   setUser({
    //     name: data.name,
    //     avatar: data.avatar_url,
    //   })
    // })

    //Método 2 com async
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/LuanSaboia');
      const data = await response.json();
        setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    
    fetchData();
  }, [students]);
  
  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>

      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
        required
      />
      <button type="button" className="btn-container"onClick={handleAddStudent}>
        Salvar
      </button>

      {/* propriedades passando no componente */}
      {
        students.map(student => 
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />
        )
      }
      
    </div>
  )
}
