import React from 'react';

class Step extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data, questionNumber, totalQuestions } = this.props;

        return (
            <>
                <div className="col-12 mt-5">
                    <h3>Question {questionNumber} of {totalQuestions}</h3>
                    <small>{unescape(data.category)}</small>
                    <div>
                        <span>{data.difficulty === "easy" ? "*" : data.difficulty === "medium" ? "**" : data.difficulty === "hard" ? "***" : "*****"}</span>
                    </div>
                </div>

                <div className="col-12">
                    <p>{unescape(data.question)}</p>

                    <div className="row">
                        <div className="col-6">
                            <button onClick={this.props.selectedCorrectAnswer} value={unescape(data.correct_answer)}>{unescape(data.correct_answer)}</button>
                        </div>

                        {data.incorrect_answers.map((data, idx) => (
                            <React.Fragment key={idx}>
                                <div className="col-6">
                                    <button onClick={this.props.selectedWrongAnswer} >{unescape(data)}</button>
                                </div>
                            </React.Fragment>
                        ))
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default Step;