import React from "react";

function Cadastrar(props) {
  return (
    <>
      <form
        action=""
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
            name="CadastroUsuario"
            id="CadastroUsuario"
            type="text"
            autoComplete="Username"
            placeholder="Insira o nome do Username"
          />
          <span>
            <b>Email</b>
          </span>
          <input
            name="CadastroEmail"
            id="CadastroEmail"
            type="email"
            autoComplete="username"
            placeholder="Insira o seu Email"
          />
          <span>
            {" "}
            <br />
            <b> Sua Senha </b>
          </span>
          <input
            name="CadastroSenha"
            id="CadastroSenha"
            type="password"
            autoComplete="current-password"
            placeholder="Insira sua Senha"
          />
          <span>
            <b>Confirme sua Senha </b>
          </span>
          <input
            name="ConfirmCadastroSenha"
            id="ConfirmCadastroSenha"
            type="password"
            autoComplete="current-password"
            placeholder="Confirme sua Senha"
          />
          <button
            className="btn btn-primary"
            style={{ color: "black", minHeight: "7vh" }}
            onClick={() => {
              props.setMenu("logout");
            }}
          >
            Finalizar Cadastro
          </button>
        </div>
      </form>
    </>
  );
}

export default Cadastrar;
