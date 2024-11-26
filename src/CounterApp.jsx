import { useState } from "react";

function CounterApp() {
    const [initialValue, plusValue] = useState(0);
    function addOne() {
        plusValue(initialValue+1);
    }
    function subOne() {
        plusValue(initialValue-1);
    }
    function resetValues() {
        plusValue(0);
    }
    return (
        <div className="counterAppOutbound">
            <div className="counterApp">
                <div className="counterAppInbound">
                    <div className="heading">
                        <h1>Counter App with Functional Component</h1>
                    </div>
                    <div className="counterAppBody">
                        <div className="addValue">
                            <button onClick={addOne}>+</button>
                        </div>
                        <div className="numberValueContainer">
                            <h1 className="numberValue">{initialValue}</h1>
                        </div>
                        <div className="subtractValue">
                            <button onClick={subOne}>-</button>        
                        </div>
                    </div>
                    <div className="resetContainer">
                        <div className="resetNumber">
                            <button onClick={resetValues}>Reset</button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterApp;