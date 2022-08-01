import React from "react";
class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response_code: 0,
            question: "",
            results: [{}],
            difficulty: "",
            correctAnswer: "",
            incorrectAnswers: "",   
            inputValue: "",
            message: ""         
        }   

    }
    getNewQuestion = () => {
        fetch("https://opentdb.com/api.php?amount=1")
        .then((res) => res.json())
        .then((json) => {
        this.setState({
            question: json.results.map(result=>result.question),
            correctAnswer: json.results.map(result=>result.correct_answer)
            });
        })
    }

    validateAnswer = () => {
       let inputAnswer = this.state.inputValue.trim().toLowerCase();
       if(inputAnswer === ""){
        this.setState( {message: "Please enter answer! " } )
        return;
       }
        
       if( inputAnswer === String(this.state.correctAnswer).trim().toLowerCase()) {
        this.setState( {message: "Correct Answer :)" } ) 

       }
       else {
        this.setState( {message: "Incorrect Answer :(" } )       

       }
       this.getNewQuestion();
    }
    componentDidMount() {
        this.getNewQuestion();                   
    }

    render() {
       
      return (
        <div>
            <h2>Question</h2>
            <h3>{this.state.question}</h3>
            <input type='text' data-testid="input" value={this.state.inputValue} onChange={this.updateInputValue}></input>
            <button onClick={this.validateAnswer}>Submit</button>
            <h3>{this.state.message}</h3>
        </div>
      )    
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }
 
}
export default Question;