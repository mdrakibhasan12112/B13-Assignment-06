
import './App.css'
import Banner from './components/Banner/Banner';
import Details from './components/Details/Details';
import Models from './components/Models/Models';
import Navbar from './components/Navber/Navbar';

const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}

const modelsPromise = getModels()


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Details></Details>
      <Models modelsPromise={modelsPromise}></Models>
    </>
  );
}

export default App
