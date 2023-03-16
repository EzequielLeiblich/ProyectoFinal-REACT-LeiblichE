import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


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
