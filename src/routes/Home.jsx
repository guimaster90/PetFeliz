import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import "./Home.css"
import axios from 'axios';

axios.defaults.withCredentials = true;

const Home = () => {
const [offset, setOffset] = useState(0)
const [pets, setPets] = useState([])

const getPets =async()=>{
    try{
        const response = await axios.get("https://api-petfeliz-backend-com.onrender.com/pets")
        
        const data = response.data
        console.log(data)
        setPets(data)
    }catch(error){
        console.log(error)
    }
}

useEffect(() => {
    getPets(offset);
}, [offset])


const list = pets.map((pet) => (
    <div key={pet.id}>
      <h1>{pet.nome}</h1>
      <h2>{pet.descricao}</h2>
      <h3>Idade: {pet.idade}</h3>
      <h3>Raça: {pet.raca}</h3>
      <img src={pet.link_imagem} />
    </div>
  ));


  return (
    <div>
      <img src={"https://svgsilh.com/png-1024/1484728.png"} 
      
      style={{ alignSelf: 'center' }}s
      />

    </div>
  );
}

export default Home