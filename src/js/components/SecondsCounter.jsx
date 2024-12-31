import React from "react";


const SecondsCounter = ({ numOne, numTwo, numThree, numFour }) => {

    return (
        <>
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{numOne % 10}</div>
            <div className="three">{numTwo % 10}</div>
            <div className="two">{numThree % 10}</div>
            <div className="one">{numFour % 10}</div>
        </div>
            
        </>
    )
}
export default SecondsCounter