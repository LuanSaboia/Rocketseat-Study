import './styles.css';

//todo componente tem um retorno
//todo retorno é um bloco html

//props para receber as propriedades enviadas no componente
//pode ser usado (props) ou o nome dos componentes diretamente (nome, time).
export function Card(props) {
  return(
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}