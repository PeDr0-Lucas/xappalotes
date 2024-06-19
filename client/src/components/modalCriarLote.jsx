import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const ModalCriarLote = () =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [area, setarea] = useState("")
    const [quadra, setquadra] = useState("")
    const [numeroLote, setnumeroLote] = useState("")
    const [endereco, setendereco] = useState("")
    const [disponibilidade, setdisponibilidade] = useState()
    const [proprietario, setproprietario] = useState("")

    const sendForm = async () => {
        axios.post('http://localhost:3000/lotes', {
            area: area,
            quadra: quadra,
            numeroLote: numeroLote,
            endereco: endereco,
            disponibilidade: disponibilidade,
            proprietario: proprietario
        },
        {headers:{
             'Content-Type': 'application/json'
        }}
    ).then((res)=>{ console.log(res.data)
        })
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cadastrar Lote
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Lote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formareadolote">
                <Form.Label>Área do lote</Form.Label>
                <Form.Control value={area} type="text" placeholder="Área do lote" onChange={(event) => {
                   setarea(event.target.value)
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formquadra">
                <Form.Label>Número ou Nome da Quadra</Form.Label>
                <Form.Control value={quadra} type="text" placeholder="Número ou Nome da Quadra" onChange={(event) => {
                   setquadra(event.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formnumeroLote">
                <Form.Label>Numero do Lote</Form.Label>
                <Form.Control value={numeroLote} type="text" placeholder="Número do Lote" onChange={(event) => {
                   setnumeroLote(event.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formendereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control value={endereco} type="text" placeholder="Endereço" onChange={(event) => {
                   setendereco(event.target.value)
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check value={disponibilidade} type="checkbox" label="Disponível?" onChange={(event) => {
                   setdisponibilidade(event.currentTarget.checked)
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formproprietario">
                <Form.Label>Nome do Proprietario</Form.Label>
                <Form.Control value={proprietario} type="text" placeholder="Nome do Proprietário" onChange={(event) => {
                   setproprietario(event.target.value)
                }}/>
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
    </>
  );
}


export default ModalCriarLote