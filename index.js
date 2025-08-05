import React, { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(null);

  // Adiciona caracteres (números ou operadores) ao display
  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Limpa o display e resultado
  const clear = () => {
    setDisplay("");
    setResult(null);
  };

  // Calcula o resultado da expressão no display
  const calculate = () => {
    try {
      // Avalia a expressão matemática segura
      // Pode usar eval, mas atenção com segurança (aqui ok para exercício)
      const res = Function(`return ${display}`)();
      setResult(res);
    } catch (error) {
      setResult("Erro");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "0 auto", textAlign: "center" }}>
      <h1>Calculadora React</h1>
      <div
        style={{
          border: "1px solid #000",
          padding: "10px",
          fontSize: "1.5rem",
          minHeight: "40px",
          marginBottom: "10px",
        }}
      >
        {result !== null ? result : display || "0"}
      </div>
      <div>
        {/* Números */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            style={{ width: 50, height: 50, margin: 5 }}
          >
            {num}
          </button>
        ))}
      </div>
      <div>
        {/* Operadores */}
        {["+","-","*","/"].map((op) => (
          <button
            key={op}
            onClick={() => handleClick(op)}
            style={{ width: 50, height: 50, margin: 5 }}
          >
            {op}
          </button>
        ))}
      </div>
      <div>
        <button onClick={calculate} style={{ width: 110, height: 50, margin: 5 }}>
          =
        </button>
        <button onClick={clear} style={{ width: 110, height: 50, margin: 5 }}>
          C
        </button>
      </div>
    </div>
  );
}

export default App;
