import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <br/>
      <ItemListContainer greeting={'Bienvenidos a mi E-commerce'}/>
      <Counter />  
    </div>
  );
}

export default App;
