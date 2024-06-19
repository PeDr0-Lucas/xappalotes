import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css"; 
import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "react-bootstrap";



const ListLotes = () =>{

    const [lotes, setlotes] = useState([])

    useEffect(() =>{

        const fetchData = async () => {
            axios({
                method: 'get',
                url: 'http://localhost:3000/lotes',
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            }).then((res)=>{
                setlotes(res.data)
            })
        };

        fetchData();
        console.log("line 23")
    }, [])

    /*const deleteLote = async (id) => {

        axios({
            method: 'delete',
            params: id,
            url: 'http://localhost:3000/lotes/',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }).then((res)=>{ console.log(res.data)
        })  
    } */

    const deleteLote = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/lotes/${id}`);
            console.log('Lote deletado com sucesso:', response.data);
            // Adicione qualquer lógica adicional após a exclusão bem-sucedida, se necessário
        } catch (error) {
            console.error('Erro ao deletar o lote:', error);
        }
    };
    

    return (

      <div className="">
        {lotes.map((lote) => (
            <div key={lote._id} className="cards">
                <div>
                    <p>Id: <span>{lote._id}</span></p>
                    <p>Área Do Lote: <span>{lote.area}</span></p>
                    <p>Número ou Nome da Quadra: <span>{lote.quadra}</span> </p>
                    <p>Número do Lote: <span>{lote.numeroLote}</span> </p>
                    <p>Endereço: <span>{lote.endereco}</span> </p>
                    <p>Disponibilidade:  <span>{lote.disponibilidade ? 'Sim': 'Não'}</span> </p>
                    {!lote.proprietario ? (<p>Nome do Proprietário: <span>{lote.proprietario}</span></p>): ''}
                </div>
                <div className="icons">
                <Button variant="danger" onClick={() => deleteLote(lote._id)}> 
                    <FontAwesomeIcon icon={faTrash} color="#FFF" />
                </Button>
                </div>
            </div>
      ))}
    </div>
    )
} 

export default ListLotes