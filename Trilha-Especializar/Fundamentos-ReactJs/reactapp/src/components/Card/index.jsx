import './styles.css';

//todo componente tem um retorno
//todo retorno é um bloco html

//props para receber as propriedades enviadas no componente
//pode ser usado (props) ou o nome dos componentes diretamente (nome, time).
export function Card(props) {
  return(
    <div className="card">
      <div className="dados">
        <strong>{props.name}</strong>
        <small>{props.time}</small>
      </div>
      <div className="opcoes">
        <button type="button" className="botoes" id="deletar">X</button>
        {/* <button type="button" className="botoes">X</button> */}
      </div>
    </div>
  )
}