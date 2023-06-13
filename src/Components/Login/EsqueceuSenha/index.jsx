import React from "react";

function EsqueceuSenha(props) {
  return (
    <>
      <form action="#">
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
          <a
            onClick={() => {
              props.setMenu("logout");
            }}
          >
            Enviar
          </a>
        </div>
      </form>
    </>
  );
}

export default EsqueceuSenha;
