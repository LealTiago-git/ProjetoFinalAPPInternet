import "./Login.css";
import Cadastrar from "./Cadastrar/index";
function Login(props) {
  return (
    <>
      <form action="">
        <div className="container">
          <span>
            <b> Usuário </b>
          </span>
          <input
            name="userlogin"
            id="userlogin"
            type="text"
            autoComplete="Username"
            placeholder="Enter Username"
          />
          <span>
            <b> Senha </b>
          </span>
          <input
            name="passwordlogin"
            id="passwordlogin"
            type="password"
            autoComplete="current-password"
            placeholder="Enter Password"
          />
          <input name="checkboxlogin" id="checkboxlogin" type="checkbox" defaultChecked />
          <label htmlFor="checkboxlogin">Continuar Conectado</label>
          <a
            onClick={() => {
              props.setMenu("pagprincipal");
            }}
          >
            LOGIN
          </a>
          <a
            onClick={() => {
              props.setMenu("cadastro");
            }}
          >
            Cadastrar
          </a>
          <a
            onClick={() => {
              props.setMenu("esqueceu");
            }}
          >
            esqueceu
          </a>
        </div>
      </form>

      {/* <div className="container">
          <span>
            <b>Usuário</b>
          </span>
          <input
            type="text"
            placeholder="Enter Username"
            required
          />

          <span>
            <b>Senha</b>
          </span>
          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <span>
            <input type="checkbox" defaultChecked="checked">
              Continuar conectado
            </input>
          </span>

          <a
            onClick={() => {
              props.setMenu("pagprincipal");
            }}
          >
            LOGIN
          </a>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <span className="ctt">
            Criar <a href="#">conta</a>
          </span>

          <span style={{ float: "right" }} className="ctt">
            Esqueci minha <a href="#">senha</a>
          </span>
        </div> */}
    </>
  );
}

export default Login;
