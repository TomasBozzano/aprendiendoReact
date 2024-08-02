import { useState } from "react"
import Boton from "./Boton"
import './PathNumber.css'

export default function PathNumber() {
    const [number, setNumber] = useState({ operation: '0', result:''})

    const handleWritten = (e) => {
        if (number.operation === '0') {
            setNumber({operation: e.target.textContent})
        } else {
            setNumber({operation: number.operation + e.target.textContent})
        }
    }
    const handleClear = () => {
        setNumber({operation: '0'})
    }
    const handleResult = () => {
        setNumber({operation: eval(number.operation)})
    }
    const handlePorcentage = () => {
        setNumber({operation: number.operation / 100})
    }
    const handleNegative = () => {
        setNumber({operation: number.operation * -1})
    }
    return (
        //
        <>
            {/* pantalla de visualización de los numeros al apretarlos, por ejemplo 1234 */}
            <span className="inputCalculator">{number.operation}</span>
            <div className="number">
                <Boton valueNumber="C" clase="calculatorButton" handleClick={handleClear} />
                <Boton valueNumber="+/-" clase="calculatorButton" handleClick={handleNegative}/>
                <Boton valueNumber="%" clase="calculatorButton" handleClick={handlePorcentage}/>
                <Boton valueNumber="/" clase="operator" handleClick={handleWritten}/>
                <Boton valueNumber="7" handleClick={handleWritten} />
                <Boton valueNumber="8" handleClick={handleWritten} />
                <Boton valueNumber="9" handleClick={handleWritten} />
                <Boton valueNumber="*" clase="operator" handleClick={handleWritten}/>
                <Boton valueNumber="4" handleClick={handleWritten} />
                <Boton valueNumber="5" handleClick={handleWritten} />
                <Boton valueNumber="6" handleClick={handleWritten} />
                <Boton valueNumber="-" clase="operator" handleClick={handleWritten} />
                <Boton valueNumber="1" handleClick={handleWritten} />
                <Boton valueNumber="2" handleClick={handleWritten} />
                <Boton valueNumber="3" handleClick={handleWritten} />
                <Boton valueNumber="+" clase="operator" handleClick={handleWritten} />
                <Boton valueNumber="0" clase="cero" handleClick={handleWritten} />
                <Boton valueNumber="." handleClick={handleWritten}/>
                <Boton valueNumber="=" clase="operator" handleClick={handleResult} />
            </div>
        </>
    )
}