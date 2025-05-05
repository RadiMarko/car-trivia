import {useState} from 'react'
import './App.css'
import ScoreDisplay from "./Components/ScoreDisplay.jsx";
import LogoDisplay from "./Components/LogoDisplay.jsx";
import GameButtons from "./Components/GameButtons.jsx";
import Input from "./Components/Input.jsx";
import Footer from "./Components/Footer.jsx";
import Modal from "./Components/Modal.jsx";

function App() {
  
  const initialArray = [
      "/abarth.jpg",
      "/acura.jpg",
      "/alfa romeo.jpg",
      "/alpina.jpg",
      "/aston martin.jpg",
      "/audi.jpg",
      "/bentley.jpg",
      "/bmw.jpg",
      "/bugatti.jpg",
      "/cadillac.jpg",
      "/chevrolet.jpg",
      "/chevrolet corvette.jpg",
      "/chrysler.jpg",
      "/citroen.jpg",
      "/dacia.jpg",
      "/daewoo.jpg",
      "/ferrari.jpg",
      "/fiat.jpg",
      "/ford.jpg",
      "/ford mustang.jpg",
      "/honda.jpg",
      "/hyundai.jpg",
      "/infiniti.jpg",
      "/jaguar.jpg",
      "/koenigsegg.jpg",
      "/lada.jpg",
      "/lamborghini.jpg",
      "/lancia.jpg",
      "/land rover.jpg",
      "/lexus.jpg",
      "/lincoln.jpg",
      "/lotus.jpg",
      "/maserati.jpg",
      "/maybach.jpg",
      "/mazda.jpg",
      "/mercedes-benz.jpg",
      "/mini.jpg",
      "/mitsubishi.jpg",
      "/nissan.jpg",
      "/opel.jpg",
      "/pagani.jpg",
      "/peugeot.jpg",
      "/polestar.jpg",
      "/pontiac.jpg",
      "/porsche.jpg",
      "/renault.jpg",
      "/rolls-royce.jpg",
      "/rover.jpg",
      "/scania.jpg",
      "/seat.jpg",
      "/skoda.jpg",
      "/smart.jpg",
      "/ssangyong.jpg",
      "/subaru.jpg",
      "/suzuki.jpg",
      "/tesla.jpg",
      "/toyota.jpg",
      "/vauxhall.jpg",
      "/volkswagen.jpg",
      "/volvo.jpg"
  ]
    
  // VARIABLE OF GAME STATUS
  const [gameStarted, setGameStarted] = useState(false);  
  
  // VARIABLE OF CURRENTLY PICKED LOGO
  const [pickedLogo, setPickedLogo] = useState();
  
  // VARIABLE OF CORRECT ANSWER
  const [correctAnswer, setCorrectAnswer] = useState();
  
  // VARIABLE OF PREVIOUSLY CORRECT ANSWER
  const [lastCorrectAnswer, setLastCorrectAnswer] = useState();
  
  // VARIABLE OF SCORE
  const [scoreCounter, setScoreCounter] = useState(0);
  
  // VARIABLE FOR SCORE DISPLAY CLASS (AS FEEDBACK FOR CORRECT OR INCORRECT ANSWER)
  const [scoreClass, setScoreClass] = useState("score-counter-default");
  
  // VARIABLE FOR DISPLAYING MODAL
  const [modalDisplayed, setModalDisplayed] = useState(false);
  
  // ARRAY OF LOGO IMAGE PATHS
  const [logoArray, setLogoArray] = useState([...initialArray]);
  
  // FUNCTION FOR STARTING GAME
  function startGame() {
      setGameStarted(true);
  }  
    
  // FUNCTION FOR PICKING RANDOM LOGO AND REMOVING IT FROM THE ARRAY OF LOGOS, THEN SETTING LOGO STATE VARIABLE
  function pickRandomIndex() {
      
      // Check if logoArray is empty before picking a new logo, exiting function if it is
      if (logoArray.length === 0) {
          checkIfEmpty();
          return;
      }
      
      setLogoArray((prevLogoArray) => {
          
          // Random number generator to pick logo by index
          const randomIndex = Math.floor(Math.random() * prevLogoArray.length);
          const selectedLogo = prevLogoArray[randomIndex];
          
          // Removing selected logo from the array
          const newLogoArray = [...prevLogoArray];
          newLogoArray.splice(randomIndex, 1);
          
          // Setting state of currently selected logo
          setPickedLogo(selectedLogo);
          
          // Formating path strings, setting state of correct answer for upcoming comparison with user-typed answer
          const cleanBrandName = selectedLogo
              .replace("/", "")
              .replace(".jpg", "")
              .replace(/[-\s]/g, "");
              setCorrectAnswer(cleanBrandName);
          
          return newLogoArray;
      })
  }
  
  // FUNCTION FOR COMPARING USER INPUT TO CORRECT ANSWER AND INCREASING SCORE, COLOR FEEDBACK DEPENDING ON RESULT
  function compareUserInput(userInput) {
      if (userInput.trim().toLowerCase().replace(/[-\s]/g, "") === correctAnswer) {
          setScoreCounter((prevScoreCounter) => {
              setScoreClass("score-counter-correct")
              prevScoreCounter = prevScoreCounter + 1;
              return prevScoreCounter;
          })
      } else {
          setScoreClass("score-counter-wrong")
      }

      setLastCorrectAnswer(() => {
          // Name to be displayed in the footer as previous answer
          const displayName = pickedLogo
              .replace("/", "")
              .replace(".jpg", "")
              .split(/[-\s]/g)
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ");
          return displayName;
      })
      
      // Restoring original color after half a second
      setTimeout(() => {
          setScoreClass("score-counter-default");
      }, 500);
      
      // Delay picking the next logo a very little bit to ensure that the footer updates first
      setTimeout(() => {
          pickRandomIndex();
      }, 100)
      
      checkIfEmpty();
  }
  
  // FUNCTION FOR RESETTING GAME
  function reset() {
      setGameStarted(false);
      setLogoArray([...initialArray]);
      setScoreCounter(0)
  }
  
  // FUNCTION FOR TOGGLING MODAL
  function toggleModal() {
      setModalDisplayed(!modalDisplayed);
  }

  // FUNCTION FOR RESETTING GAME IF INPUT IS EMPTY
  function checkIfEmpty() {
      if (logoArray.length < 1) {
          toggleModal()
          reset();
      }
  }

  return (
    <div className="game-area">
      <ScoreDisplay scoreCounter={scoreCounter} array={logoArray} scoreClass={scoreClass}></ScoreDisplay>
      <LogoDisplay displayedLogo={logoArray.length === 60 ? "/default.jpg" : pickedLogo}></LogoDisplay>
      <GameButtons startGame={startGame} gameStarted={gameStarted} pickRandomIndex={pickRandomIndex} reset={reset}></GameButtons>
      <Input gameStarted={gameStarted} onSubmit={compareUserInput}></Input>
      <Footer test={pickRandomIndex} array={logoArray} lastCorrectAnswer={lastCorrectAnswer} gameStarted={gameStarted}></Footer>
      <Modal modalDisplayed={modalDisplayed} toggleModal={toggleModal}></Modal>
    </div>
  )
}

export default App