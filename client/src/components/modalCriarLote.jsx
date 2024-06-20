import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalCriarLote = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [area, setArea] = useState("");
    const [quadra, setQuadra] = useState("");
    const [numeroLote, setNumeroLote] = useState("");
    const [endereco, setEndereco] = useState("");
    const [disponibilidade, setDisponibilidade] = useState(false);
    const [proprietario, setProprietario] = useState("");

    const sendForm = async () => {
        try {
            const res = await axios.post('http://localhost:3000/lotes', {
                area,
                quadra,
                numeroLote,
                endereco,
                disponibilidade,
                proprietario
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res);
            if (res.status == 201) {
              console.log("entrou")
                toast.success(`Cadastro realizado com sucesso id:${res.data._id}`);
                setTimeout(() => {
                    location.reload();
                }, 5000);
            } else {
                toast.error('Erro ao processar a solicitação');
            }
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            toast.error(error.response?.data?.message || 'Erro desconhecido');
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Cadastrar Lote
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar Lote</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formAreaDoLote">
                            <Form.Label>Área do lote</Form.Label>
                            <Form.Control value={area} type="text" placeholder="Área do lote" onChange={(event) => {
                                setArea(event.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formQuadra">
                            <Form.Label>Número ou Nome da Quadra</Form.Label>
                            <Form.Control value={quadra} type="text" placeholder="Número ou Nome da Quadra" onChange={(event) => {
                                setQuadra(event.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formNumeroLote">
                            <Form.Label>Numero do Lote</Form.Label>
                            <Form.Control value={numeroLote} type="text" placeholder="Número do Lote" onChange={(event) => {
                                setNumeroLote(event.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEndereco">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control value={endereco} type="text" placeholder="Endereço" onChange={(event) => {
                                setEndereco(event.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDisponibilidade">
                            <Form.Check checked={disponibilidade} type="checkbox" label="Disponível?" onChange={(event) => {
                                setDisponibilidade(event.currentTarget.checked);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formProprietario">
                            <Form.Label>Nome do Proprietário</Form.Label>
                            <Form.Control value={proprietario} type="text" placeholder="Nome do Proprietário" onChange={(event) => {
                                setProprietario(event.target.value);
                            }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={sendForm}>
                        Cadastrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    );
}

export default ModalCriarLote;
