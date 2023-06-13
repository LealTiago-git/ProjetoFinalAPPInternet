import React from "react";

function Cadastrar(props) {
  return (
    <>
    <form action="">
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
        <span> <br />
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
        <a
          onClick={() => {
            props.setMenu("logout");
          }}
        >
          Finalizar Cadastro
        </a>
      </div>
      </form>
    </>
  );
}

export default Cadastrar;
