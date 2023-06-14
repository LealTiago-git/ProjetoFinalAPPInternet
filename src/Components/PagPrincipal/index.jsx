import "./PagPrincipal.css";
import PrimeiraTabela from "./Tabelas//PrimeiraTabela/index";

function PagPrincipal(props) {
  return (
    <>
      <div
        style={{
          minWidth: "100vw",
          maxWidth: "100vw",
          minHeight: "100vh",
          maxHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="cabecalho1">
          <div className="perfil">
            <div>UserName</div>
            <button
              style={{ color: "black", maxWidth: "10vw" }}
              onClick={() => {
                props.setMenu("logout");
              }}
            >
              Log out
            </button>
          </div>
        </div>
        <div className="mainpage">
          <PrimeiraTabela />
        </div>
        <footer
          style={{
            minHeight: "21.4vh",
            backgroundColor: "rgb(000, 111, 205)",
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          &#169; 2023 | Lucas R. S. C. & Tiago L. L.{" "}
        </footer>
      </div>
    </>
  );
}

export default PagPrincipal;
