import React, { useState, useEffect } from "react";
import "./PrimeiraTabela.css";
import CalculadoraPorcentagem from "../CalculadoraPorcentagem/index";

function PrimeiraTabela() {
  const [tableData, setTableData] = useState([
    {
      id: 0,
      name: "",
      ttotais: "0",
      tobtidos: "00",
    },
  ]);
  const [Total, setTotal] = useState(0);
  const [tobtidosTotal, setTobtidosTotal] = useState(0);
  const [linhasIguais, setLinhasIguais] = useState(0);

  useEffect(() => {
    calcularTotais();
    contarLinhasIguais();
  }, [tableData]);

  const calcularTotais = () => {
    let ttotaisSum = 0;
    let tobtidosSum = 0;

    tableData.forEach((row) => {
      ttotaisSum += parseFloat(row.ttotais);
      tobtidosSum += parseFloat(row.tobtidos);
    });

    setTotal(ttotaisSum);
    setTobtidosTotal(tobtidosSum);
  };

  const contarLinhasIguais = () => {
    let count = 0;

    tableData.forEach((row) => {
      const { ttotais, tobtidos } = row;

      if (ttotais === tobtidos) {
        count++;
      }
    });
    setLinhasIguais(count);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === "ttotais" || name === "tobtidos") {
      filteredValue = value.replace(/\D/g, "");
    }

    const newData = [...tableData];
    newData[index] = { ...newData[index], [name]: filteredValue };
    setTableData(newData);
    calcularTotais();
  };

  const handleAddRow = () => {
    const newRow = {
      id: tableData.length,
      name: "",
      ttotais: "0",
      tobtidos: "00",
    };
    setTableData([...tableData, newRow]);
  };

  const handleRemoveRow = (index) => {
    const newData = tableData.filter((row, idx) => idx !== index);
    setTableData(newData);
  };

  return (
    <div className="container2" style={{ color: "black" }}>
      <div
        className="row clearfix"
        style={{ overflowY: "auto", maxHeight: "70vh" }}
      >
        <div className="col-md-12 table-responsive">
          <table
            className="table table-bordered table-hover table-sortable"
            style={{ minWidth: "50vw" }}
          >
            <thead>
              <tr>
                <th className="text-center">Jogos</th>
                <th className="text-center">Troféus Totais</th>
                <th className="text-center">Troféus Atuais</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={row.name}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="Nome"
                      className="form-control"
                      style={{
                        boxShadow: "0px 0px 5px black",
                        minWidth: "15vw",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="ttotais"
                      value={row.ttotais}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="0"
                      className="form-control"
                      style={{
                        boxShadow: "0px 0px 5px black",
                        minWidth: "1vw",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="tobtidos"
                      value={row.tobtidos}
                      onChange={(e) => handleInputChange(e, index)}
                      placeholder="0"
                      className="form-control"
                      style={{
                        boxShadow: "0px 0px 5px black",
                        minWidth: "1vw",
                      }}
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button
                        className="btn btn-danger glyphicon glyphicon-remove row-remove"
                        onClick={() => handleRemoveRow(index)}
                      >
                        <span aria-hidden="true" style={{ color: "black" }}>
                          x
                        </span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="btn btn-primary float-right"
        style={{ color: "black", maxWidth: "50.5vw" }}
        onClick={handleAddRow}
      >
        Adicionar Um Jogo
      </button>
      <div style={{ display: "flex", gap: "10vw" }}>
        <div>Troféus Totais: {Total}</div>
        <div>Troféus Obtidos: {tobtidosTotal}</div>
      </div>
      <div
        style={{
          position: "absolute",
          marginRight: "70vw",
          marginBottom: "79vh",
          display: "flex",
          flexDirection: "row",
          gap: "1vw",
          textAlign: "center",
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        <div>
          <img
            src="thicon.png"
            style={{ objectFit: "contain", width: "1vw" }}
          />
          : {linhasIguais}
        </div>
        <CalculadoraPorcentagem total={Total} tobtidosTotal={tobtidosTotal} />
      </div>
    </div>
  );
}

export default PrimeiraTabela;
