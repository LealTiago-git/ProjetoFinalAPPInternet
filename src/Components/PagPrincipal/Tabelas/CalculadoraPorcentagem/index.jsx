import { useEffect, useState } from "react";

function CalculadoraPorcentagem({ total, tobtidosTotal }) {
  const [porcentagem, setPorcentagem] = useState(0);

  useEffect(() => {
    calcularPorcentagem();
  }, [total, tobtidosTotal]);

  const calcularPorcentagem = () => {
    if (total === 0) {
      setPorcentagem(0);
    } else {
      const percent = (tobtidosTotal / total) * 100;
      setPorcentagem(percent.toFixed(2));
    }
  };

  return <div>Porcentagem: {porcentagem}%</div>;
}

export default CalculadoraPorcentagem;
