import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function App() {
  const lotes = [
    {
      id: "8989887989",
      areaDoLote: "45m",
      quadra: "15",
      numeroLote: 17,
      endereco: "rua dezenove 20",
      disponibilidade: true,
      nomeProprietario: "",
    },

    {
      id: "898985656687989",
      areaDoLote: "75m",
      quadra: "5",
      numeroLote: 7,
      endereco: "rua vinte 20",
      disponibilidade: false,
      nomeProprietario: "Pedro Lucas",
    },
  ];

  return (
    <div className="container">
      <form>
        <h2>Cadastro De Lotes</h2>
        <input name="area" type="text" placeholder="Área Do Lote" />
        <input
          name="quadra"
          type="text"
          placeholder="Número ou Nome da Quadra"
        />
        <input name="numeroLote" type="number" placeholder="Número do Lote" />
        <input name="endereco" type="text" placeholder="Endereço" />
        <label>Está disponível?</label>
        <input name="disponibilidade" type="checkbox" />
        <input
          name="proprietario"
          type="text"
          placeholder="Nome do Proprietário"
        />
        <button type="button">Cadastrar</button>
      </form>

      {lotes.map((lote) => (
        <div key={lote.id} className="cards">
          <div>
            <p>Área Do Lote: <span>{lote.areaDoLote}</span></p>
            <p>Número ou Nome da Quadra: <span>{lote.quadra}</span> </p>
            <p>Número do Lote: <span>{lote.numeroLote}</span> </p>
            <p>Endereço: <span>{lote.endereco}</span> </p>
            <p>Disponibilidade:  <span>{lote.disponibilidade}</span> </p>
            <p>Nome do Proprietário: <span>{lote.nomeProprietario}</span></p>
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faTrash} color="#FFF" />
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
