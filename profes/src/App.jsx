import './App.css'
import Dropdown from './components/Dropdown/Dropdown';
import DropdownItem from './components/DropdownItem/DropdownItem';
import logofi from './assets/logo.png'

function App() {

  const matJL=['Pensamiento computacional','Estructura de datos algoritmicos', 'Bases de datos', 'Análisis de Sistemas y señales'];
  const matGA=['Igualdad de género en ingeniería','Tutoría', 'Sociedad, cultura e identidad'];
  const matAMM=['Álgebra y geometría analítica','Introducción al Modelado de Fenómenos Físicos', 'Cálculo diferencial e integral', 'Probabilidad y estadística', 'Electricidad y magnetismo', 'Análisis numérico'];
  const matJSST=['Álgebra y geometría analítica','Álgebra lineal', 'Ánalisis numericos'];
  const matBIVG=['Álgebra y geometría analítica','Cálculo diferencial e integral', 'Ecuaciones diferenciales', 'Cálculo vectorial'];

  return (
 <div id='uno'>
  <br />
<h1>Directorio de profesores</h1>
<br />
 <div id='dos' className='content'>
  <div id="menu">
  {/*   <br /> */}
    <table>
      <tr>
        <td>
    <Dropdown buttonText="Jorge Luis López" 
    activeColor="#0A2540"
content={<>
  {
    matJL.map((materia, index) => (<DropdownItem key={index}>{materia}</DropdownItem>))
  }</>}>
  </Dropdown>
  </td>
 <td>
     <Dropdown buttonText="Gabriela Alfaro" 
     activeColor="#B38E5D"
content={<>
  {
    matGA.map((materia, index) => (<DropdownItem key={index}>{materia}</DropdownItem>))
  }</>}>
  </Dropdown>
</td>
<td>
     <Dropdown buttonText="Alain Morales Martínez" 
     activeColor="#8B1E3F"
content={<>
  {
    matAMM.map((materia, index) => (<DropdownItem key={index}>{materia}</DropdownItem>))
  }</>}>
  </Dropdown>
  </td>
  <td>
     <Dropdown buttonText="José Salvador Salinas Telésforo" 
     activeColor="#2E5A44"
content={<>
  {
   matJSST.map((materia, index) => (<DropdownItem key={index}>{materia}</DropdownItem>))
  }</>}>
  </Dropdown>
  </td>
  <td>
     <Dropdown buttonText="Bertha Isabel Vega Galicia" 
     activeColor="#4A5568"
content={<>
  {
    matBIVG.map((materia, index) => (<DropdownItem key={index}>{materia}</DropdownItem>))
  }</>}>
  </Dropdown>
  </td> 
  </tr>
  </table>
  </div>
 </div>
 </div>
  )
}

export default App
