import React from "react";

function EsqueceuSenha(props) {
  return (
    <>
      <form
        action="#"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100vw",
          maxWidth: "100vw",
          backgroundImage:
            "linear-gradient(rgb(000, 111, 205), #B3DCFF, rgb(000, 111, 205))",
        }}
      >
        <div className="container">
          <span>
            <b> Nome do Usuário </b>
          </span>
          <input
            name="EsqueceuUsuario"
            id="EsqueceuUsuario"
            type="text"
            autoComplete="Username"
            placeholder="Insira o nome do Username"
          />
          <span>
            <b>Email</b>
          </span>
          <input
            name="EsqueceuEmail"
            id="EsqueceuEmail"
            type="email"
            placeholder="Insira o seu Email"
          />
          <button
            className="btn btn-primary"
            style={{ color: "black", minHeight: "7vh" }}
            onClick={() => {
              props.setMenu("logout");
            }}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default EsqueceuSenha;
