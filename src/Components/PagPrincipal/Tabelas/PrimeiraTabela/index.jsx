import React, { useState, useEffect } from "react";
import "./PrimeiraTabela.css";
import CalculadoraPorcentagem from "../CalculadoraPorcentagem/index";

function TabelaDinamica() {
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
    <div className="container" style={{ color: "black" }}>
      <div
        className="row clearfix"
        style={{ overflowY: "auto", maxHeight: "70vh" }}
      >
        <div className="col-md-12 table-responsive">
          <table className="table table-bordered table-hover table-sortable">
            <thead>
              <tr>
                <th className="text-center">Jogos</th>
                <th className="text-center">Troféus Totais</th>
                <th className="text-center">Troféus Atuais</th>
                <th className="text-center"></th>
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
        style={{ color: "black" }}
        onClick={handleAddRow}
      >
        Adicionar Um Jogo
      </button>
      <div>Total: {Total}</div>
      <div>Totais Obtidos: {tobtidosTotal}</div>
      <div>Platinas: {linhasIguais}</div>
      <CalculadoraPorcentagem total={Total} tobtidosTotal={tobtidosTotal} />
    </div>
  );
}

export default TabelaDinamica;
