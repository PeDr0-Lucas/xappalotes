import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListLotes from '../components/listlotes';
import ModalCriarLote from '../components/modalCriarLote';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App (){
 

  return(
    <Container>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Xappa Lotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ModalCriarLote/>
      </Container>
    </Navbar>
    <ListLotes />
    <ToastContainer/>
    </Container>
  )
}
export default App;