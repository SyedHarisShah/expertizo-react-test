import React from 'react';

function Footer(props) {
    console.log(props);
    let score = Math.round(((props.noOfCorrect / props.attempetQuestions) * 100) * 100) / 100 ;
    let maxScore = (props.noOfCorrect / props.totalQuestions) * 100;
    let wrongScore = (props.noOfWrong / props.totalQuestions) * 100;
    return (
        <div className="footer text-center mt-5">
            <div className="scoring">
                <div>
                    <p>Score <span>{score}%</span></p>
                </div>
                <div>
                    <p>Max Score <span>{maxScore}%</span></p>
                </div>
            </div>
            <div
                className="progressBarScore"
                style={{ background: "linear-gradient(to right, black "+wrongScore+"%, grey "+maxScore+"%)" }}
            />
        </div>
    );
}

export default Footer;
