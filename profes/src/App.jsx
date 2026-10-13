import './App.css'
import Dropdown from './components/Dropdown/Dropdown';
import DropdownItem from './components/DropdownItem/DropdownItem';

function App() {
  const items=[1, 2, 3, 4, 5, 6, 7 , 8];
  return (
 <div id='uno'>
  <br />
<h1>Directorio de profesores</h1>
<br />
 <div id='dos' className='content'>
  <div id="menu">
    <br />
    <Dropdown buttonText="Dropdown button" 
content={<>
  {
    items.map(item => <DropdownItem key={item}>{`Item ${item}`}</DropdownItem>)
  }</>}>
  </Dropdown>
  </div>
 </div>
 </div>
  )
}

export default App
