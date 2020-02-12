import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "",
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: "Igpay Atinlay Anslatortray"
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.

  myPigLatinCodeHere = () => {
    const ay = ["a", "y"];
    const way = ["w","a", "y"];
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      let finalAnswer = []
      // ACTION ITEM: use 'currentWord' as a starting point for your code
      const lettersArray = currentWord.split("");

      // For all words that starts with a vowel
      if (lettersArray[0] === "a" || lettersArray[0] === "e" || lettersArray[0] === "i"|| lettersArray[0] === "o"|| lettersArray[0] === "u"){
        finalAnswer = lettersArray.concat(way).join("");
      } else if (lettersArray.indexOf("q") === 0 && lettersArray.indexOf("u") === 1) {
        // For all words that start with "qu"
        lettersArray.push("q");
        lettersArray.push("u");
        lettersArray.shift();
        lettersArray.shift();
        finalAnswer = lettersArray.concat(ay).join("");
      } else if (lettersArray.indexOf("s") === 0 && lettersArray.indexOf("q") === 1 && lettersArray.indexOf("u") === 2) {
        // For all words that start with "squ"
        lettersArray.push("s");
        lettersArray.push("q");
        lettersArray.push("u");
        lettersArray.shift();
        lettersArray.shift();
        lettersArray.shift();
        finalAnswer = lettersArray.concat(ay).join("");
      } else if (lettersArray.indexOf("y") === 0) {
        lettersArray.push("y");
        lettersArray.shift();
        finalAnswer = lettersArray.concat(ay).join("");
      } else {
        for (var i = 0; i < lettersArray.length; i++) {
          if (lettersArray[0] !== "a" && lettersArray[0] !== "e" && lettersArray[0] !== "i" && lettersArray[0] !== "o" && lettersArray[0] !== "u") {
            lettersArray.push(lettersArray[0]);
            lettersArray.shift();
          } else if (lettersArray[0] === "a" || lettersArray[0] === "e" || lettersArray[0] === "i"|| lettersArray[0] === "o"|| lettersArray[0] === "u") {
              finalAnswer = lettersArray.concat(ay).join("");
          }
        }
      }

      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      return translatedWordsArray.push(finalAnswer)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: '',
      phraseTranslated: ''
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin Translator</h1>

          <div id="pigImage">
            <img
              src="https://storage.needpix.com/rsynced_images/pigs-576512_1280.png"
              alt="pig"
              id="cutePig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by Julia, Meo, and Xena
        </footer>
      </div>
    );
  }
}

export default App;
