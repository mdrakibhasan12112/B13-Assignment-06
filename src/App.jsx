
import { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Details from './components/Details/Details';
import Models from './components/Models/Models';
import Navbar from './components/Navber/Navbar';

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelsPromise = getModels()


function App() {
const [activeTab, setActiveTab]= useState("Products")
console.log(activeTab);
  const [cards, setCards] = useState([])
  console.log(cards);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Details></Details>
      {/* name of each tab group should be unique */}
      <div className="space-y-5">
        <div className="text-center space-y-5">
          <h2 className="text-5xl font-bold mt-10">Premium Digital Tools</h2>
          <p>
            Choose from our curated collection of premium digital products
            designed <br></br> to boost your productivity and creativity.
          </p>
        </div>

        <div className="tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${activeTab === 'Products' ? 'bg-violet-600' : ''}`}
            aria-label="Products"
            onClick={() => setActiveTab('Products')}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 ${activeTab === 'Card' ? 'bg-violet-600' : ''}`}
            aria-label={`Card (${cards.length})`}
            onClick={() => setActiveTab('Card')}
          />
        </div>
      </div>
      {activeTab === 'Products' && (
        <Models
          modelsPromise={modelsPromise}
          cards={cards}
          setCards={setCards}
        ></Models>
      )}

      {activeTab === 'Card' && <Card cards={cards} setCards={setCards}></Card>}
    </>
  );
}

export default App
