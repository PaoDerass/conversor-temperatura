import React, {useState} from 'react';
 
type Unidad_temperatura = 'Celsius' | 'Fahrenheit' | 'Kelvin';

interface Convertir {
  nombreUnidad: string;
  Valor: number;
}

const App: React.FC = () => {

const [ValorIngresado, serValorIngresado] = useState<number>(25);

const unidadInicial: Unidad_temperatura = 'Celsius';

const ConvertirTemp= (valor: number, unidad: Unidad_temperatura) : Convertir [] => {

let celsius = 0;
let fahrenheit = 0;
let kelvin = 0;

if (unidad === 'Celsius') { ... } )

}


}