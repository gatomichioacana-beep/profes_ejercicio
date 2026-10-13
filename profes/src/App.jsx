import './App.css'
import Dropdown from './components/Dropdown/Dropdown';
function App() {
  return (
 <div id='uno'>
  <br />
<h1>Directorio de profesores</h1>
<br />
 <div id='dos' className='content'>
<Dropdown buttonText="Dropdown button" content={<p>Hello world</p>}></Dropdown>
 </div>
 </div>
  )
}

export default App
