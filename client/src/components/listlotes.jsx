import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css"; 
import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Modal, Form } from "react-bootstrap";
import { toast } from 'react-toastify';

const ListLotes = () => {

    const [lotes, setLotes] = useState([]);

    const [editModalShow, setEditModalShow] = useState(false);
    const [currentLote, setCurrentLote] = useState({
        _id: '',
        area: '',
        quadra: '',
        numeroLote: '',
        endereco: '',
        disponibilidade: false,
        proprietario: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/lotes', {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    }
                });
                setLotes(res.data);
            } catch (error) {
                console.error('Erro ao buscar os lotes:', error);
            }
        };

        fetchData();
    }, []);

    const deleteLote = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/lotes/${id}`);
            console.log('Lote deletado com sucesso:', response.data);
            if(response.status == 200){
                setLotes(lotes.filter(lote => lote._id !== id));
                toast.success('Deletado com sucesso!');
            }else{
                toast.error(response.data.messsage)
            }
            
        } catch (error) {
            console.error('Erro ao deletar o lote:', error);
        }
    };

    const editLote = async (lote) => {
        try {
            const response = await axios.put(`http://localhost:3000/lotes/${lote._id}`, lote);
            if (response.status === 200) {
                console.log('Lote editado com sucesso:', response.data);
                setLotes(lotes.map(l => l._id === lote._id ? response.data : l));
                setEditModalShow(false);
                toast.success('Lote editado com sucesso!');
            } 
        } catch (error) {
            toast.error(error.response?.data?.message || 'Erro ao editar o lote');
            console.error('Erro ao editar o lote:', error);
        }
    };

    const handleEditClick = (lote) => {
        setCurrentLote(lote);
        setEditModalShow(true);
    };

    const handleEditChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCurrentLote(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        await editLote(currentLote);
    };

    return (
        <div className="">
            {lotes.map((lote) => (
                <div key={lote._id} className="cards">
                    <div>
                        <p>Id: <span>{lote._id}</span></p>
                        <p>Área Do Lote: <span>{lote.area}</span></p>
                        <p>Nome da Quadra: <span>{lote.quadra}</span> </p>
                        <p>Número do Lote: <span>{lote.numeroLote}</span> </p>
                        <p>Endereço: <span>{lote.endereco}</span> </p>
                        <p>Disponibilidade:  <span>{lote.disponibilidade ? 'Sim' : 'Não'}</span> </p>
                        <p>Nome do Proprietário: <span>{lote.proprietario}</span></p>
                    </div>
                    <div className="icons">
                        <Button className="btn" variant="warning" onClick={() => handleEditClick(lote)}>
                            <FontAwesomeIcon icon={faEdit} color="#FFF" />
                        </Button>
                        <Button className="btn"variant="danger" onClick={() => deleteLote(lote._id)}>
                            <FontAwesomeIcon icon={faTrash} color="#FFF" />
                        </Button>
                    </div>
                </div>
            ))}

            {currentLote && (
                <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Lote</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleEditSubmit}>
                            <Form.Group controlId="formareadolote">
                                <Form.Label>Área Do Lote</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="area"
                                    value={currentLote.area}
                                    onChange={handleEditChange}
                                    placeholder="Área do Lote"
                                />      
                            </Form.Group>

                            <Form.Group controlId="formquadra">
                                <Form.Label>Quadra do lote</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="quadra"
                                    value={currentLote.quadra}
                                    onChange={handleEditChange}
                                />      
                             </Form.Group>

                             <Form.Group controlId="formnumeroLote">
                                <Form.Label>Numero do Lote</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="numeroLote"
                                    value={currentLote.numeroLote}
                                    onChange={handleEditChange}
                                />      
                             </Form.Group>

                             <Form.Group controlId="formendereco">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="endereco"
                                    value={currentLote.endereco}
                                    onChange={handleEditChange}
                                />      
                             </Form.Group>

                             <Form.Group controlId="formBasicCheckbox">
                                <Form.Label>Disponível?</Form.Label>
                                <Form.Check
                                    type="checkbox"
                                    name="disponibilidade"
                                    checked={currentLote.disponibilidade}
                                    onChange={handleEditChange}
                                /> 
                             </Form.Group>

                             <Form.Group controlId="formproprietario">
                                <Form.Label>Nome do Proprietário</Form.Label>
                                <Form.Control
                                    type="text" 
                                    name="proprietario"
                                    value={currentLote.proprietario}
                                    onChange={handleEditChange}
                                />      
                             </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleEditSubmit}>
                                Salvar
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default ListLotes;
