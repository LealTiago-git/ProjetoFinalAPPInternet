import "./Login.css";

function Login(props) {
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "1vw",
            }}
          >
            <label htmlFor="checkboxlogin">Continuar Conectado</label>
            <input
              name="checkboxlogin"
              id="checkboxlogin"
              type="checkbox"
              defaultChecked
              style={{
                margin: "0px",
                width: "1vw",
                height: "1vh",
                padding: "0px",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: " 5vw" }}>
            <button
              className="btn btn-primary"
              style={{ color: "black", minHeight: "7vh" }}
              onClick={() => {
                props.setMenu("cadastro");
              }}
            >
              Cadastrar
            </button>
            <button
              className="btn btn-primary"
              style={{ color: "black", minHeight: "7vh" }}
              onClick={() => {
                props.setMenu("pagprincipal");
              }}
            >
              Login
            </button>
            <button
              className="btn btn-primary"
              style={{ color: "black", minHeight: "7vh" }}
              onClick={() => {
                props.setMenu("esqueceu");
              }}
            >
              Esqueceu a Senha?
            </button>
          </div>
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
