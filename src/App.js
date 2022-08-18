import { useState } from "react";
/* Import Components */
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
/* Import Style */
import "./App.css";
function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [instruction,setInstriction] = useState(
      'Press the "add card" button to add the new Card. Use the "sort cards" button to sort the Cards by the increase.Press an X icon on the top right to delete them.'
    )
  const createSorting = () => {
    const sum = Math.floor(Math.random() * 1000)+1;
    setRandomNumbers((prev) => {return [...prev, { id: sum }];});};
    const numbersSorting = () => {setRandomNumbers([...randomNumbers.sort((small, big) => {return small.id - big.id;}),]);};
    const deleteRandomNumbers = (id) => {
      setRandomNumbers([...randomNumbers.filter((elements) => elements.id !== id)]);
    };
  return (
    <div>
      <Nav createSorting={createSorting} numbersSorting={numbersSorting}/>
      <Main randomNumbers={randomNumbers} deleteRandomNumbers={deleteRandomNumbers} instruction={instruction}/>
      <Footer/>
    </div>
  );
}

export default App;

