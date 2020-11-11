import React from 'react';
import { quiz } from '../quiz';

// Components
import Header from './Header';
import Footer from './Footer';
import Step from './Step';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuestions: quiz.length,
      selectedStep: 0,
      noOfCorrect: 0,
      noOfWrong: 0,
      headerProgress: 0,
      buttonClicked: false,

      correctAnswer: '',
    };
  }

  componentDidMount() {
    // console.log(quiz);
  }

  validate = (step) => {
    if (step >= this.state.totalQuestions) {
      alert("No More Questions. Thanks");
      return false;
    }

    return true;
  }

  goToNext = () => {
    const { totalQuestions } = this.state;
    let selectedStep = this.state.selectedStep + 1;
    let headerProgress = (selectedStep / totalQuestions) * 100;
    if (this.validate(selectedStep)) {
      this.setState({ selectedStep });
    }

    this.setState({ headerProgress, correctAnswer: '', buttonClicked: false });
  }

  selectedCorrectAnswer = (e) => {
    let noOfCorrect = this.state.noOfCorrect + 1;

    this.setState({
      correctAnswer: e.target.value,
      noOfCorrect,
      buttonClicked: true
    });
  }

  selectedWrongAnswer = () => {
    let noOfWrong = this.state.noOfWrong + 1;

    this.setState({
      noOfWrong,
      buttonClicked: true
    });
  }

  render() {
    const { selectedStep, totalQuestions, correctAnswer, buttonClicked, noOfCorrect, noOfWrong } = this.state;

    return (
      <div className="container-fluid">
        <Header headerProgress={this.state.headerProgress} />

        <div className="container">
          <div className="row">
            <Step
              data={quiz[selectedStep]}
              questionNumber={selectedStep + 1}
              totalQuestions={totalQuestions}
              selectedCorrectAnswer={this.selectedCorrectAnswer}
              selectedWrongAnswer={this.selectedWrongAnswer}
            />
          </div>

          {buttonClicked ? (
            <div className="row">
              <div className="col-12 mt-4 text-center">
                <h4>{correctAnswer ? "Correct" : "Sorry"}</h4>
                <button onClick={this.goToNext.bind(this)}>Next Question</button>
              </div>
            </div>
          ) : (null)
          }

        </div>

        <Footer
          attempetQuestions={selectedStep}
          totalQuestions={totalQuestions}
          noOfCorrect={noOfCorrect}
          noOfWrong={noOfWrong}
        />
      </div>
    );
  }
}

export default Layout;
