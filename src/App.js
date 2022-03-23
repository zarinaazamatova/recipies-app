import './App.css';
import Form from './components/Form';
import Recipies from './components/Recipies'
import { Routes,Route } from 'react-router-dom';
import Recipe from './components/Recipe';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Routes>
      <Route exact path ="/" element ={<Home/>}/>
      <Route exact path ="/Recipe/:recipe"  element = {<Recipe/>}/>
    </Routes>
    </>
  );
}

export default App;
