import React, { useState } from 'react'
import styles from './App.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { sum, sub, mult, div } from './store/Calculator.action'

function App() {

  const resultado = useSelector(state => state.calculator)
  const dispatch = useDispatch()

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  return (
    <div className={styles.container}>

      <div className={styles.calculator}>

        <div className={styles.result}>

          <input
            type="number"
            placeholder='Num1'
            onChange={(e) => setA(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder='Num2'
            onChange={(e) => setB(Number(e.target.value))}
          />

          <div className={styles.resultado}>{resultado}</div>
        </div>

        <div className={styles.selects}>
          <button
            onClick={() => dispatch(sum(a, b))}
          >
            Somar
          </button>
          <button
            onClick={() => dispatch(sub(a, b))}
          >
            Subtrair
          </button>
          <button
            onClick={() => dispatch(mult(a, b))}
          >
            Multiplicar
          </button>
          <button
            onClick={() => dispatch(div(a, b))}
          >
            Dividir
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;