import { useState } from "react";
import Login from "../Components/Login";
import PagPrincipal from "../Components/PagPrincipal";
import Cadastrar from "../Components/Login/Cadastrar";
import EsqueceuSenha from "../Components/Login/EsqueceuSenha";
import "./App.css";

function App() {
  const [optMenu, setOptMenu] = useState("home");

  const ShowContent = ({ content, setMenu }) => {
    switch (content) {
      case "pagprincipal":
        return <PagPrincipal setMenu={setOptMenu} />;
        break;

      case "logout":
        return <Login setMenu={setOptMenu} />;
        break;

      case "cadastro":
        return <Cadastrar setMenu={setOptMenu} />;
        break;

      case "esqueceu":
        return <EsqueceuSenha setMenu={setOptMenu} />;
        break;

      default:
        return <Login setMenu={setOptMenu} />;
        break;
    }
  };

  return (
    <>
      <ShowContent content={optMenu} setMenu={setOptMenu} />
    </>
  );
}

export default App;
