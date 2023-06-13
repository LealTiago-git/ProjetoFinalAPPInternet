import "./PagPrincipal.css";
import TabelaDinamica from "./Tabelas/PrimeiraTabela/index";

function PagPrincipal(props) {
  return (
    <>
      <div className="cabecalho1">
        <div className="perfil">
          <div>Coqueiroz</div>
          <button
            style={{ color: "black" }}
            onClick={() => {
              props.setMenu("logout");
            }}
          >
            Log out
          </button>
          <div className="trofeus1">
          <span>ttotais/tobtidos, % de completion </span>
          </div>
        </div>

        <div><TabelaDinamica/></div>
      </div>
    </>
  );
}

export default PagPrincipal;