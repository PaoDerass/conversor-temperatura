import React, { useState } from 'react';

type UnidadTemperatura = 'Celsius' | 'Fahrenheit' | 'Kelvin';

interface Convertir {
  nombreUnidad: string;
  valor: number;
}

const App: React.FC = () => {
  const [valorIngresado, setValorIngresado] = useState<number>(25);

  const unidadInicial: UnidadTemperatura = 'Celsius';

  const convertirTemp = (valor: number, unidad: UnidadTemperatura): Convertir[] => {
    let celsius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    if (unidad === 'Celsius') {
      celsius = valor;
      fahrenheit = (valor * 9) / 5 + 32;
      kelvin = valor + 273.15;
    } else if (unidad === 'Fahrenheit') {
      celsius = (valor - 32) * 5 / 9;
      fahrenheit = valor;
      kelvin = (valor - 32) * 5 / 9 + 273.15;
    } else if (unidad === 'Kelvin') {
      celsius = valor - 273.15;
      fahrenheit = (valor - 273.15) * 9 / 5 + 32;
      kelvin = valor;
    }

    return [
      { nombreUnidad: 'Celsius', valor: parseFloat(celsius.toFixed(2)) },
      { nombreUnidad: 'Fahrenheit', valor: parseFloat(fahrenheit.toFixed(2)) },
      { nombreUnidad: 'Kelvin', valor: parseFloat(kelvin.toFixed(2)) },
    ];
  };

  const resultados = convertirTemp(valorIngresado, unidadInicial);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Conversión de Temperaturas</h1>
      <p>Valor inicial: {valorIngresado}° {unidadInicial}</p>

      <ul>
        {resultados.map((resultado, index) => (
          <li key={index}>
            {resultado.nombreUnidad}: {resultado.valor}°
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
