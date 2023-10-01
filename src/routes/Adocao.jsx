import { useState, useEffect } from 'react';
import axios from 'axios';

const Adocao = props => {
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
      {list}
    </div>
  );
}


export default Adocao
