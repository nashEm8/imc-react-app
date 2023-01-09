import { useState } from 'react';
import styles from './App.module.css';
import logo from './assets/powered.png';
import { GridItem } from './components/GridItens';
import leftArrow from './assets/leftarrow.png';

import { levels, calculateImc, Level } from './imc/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
      console.log(toShow);
    } else {
      alert('Digite todos os campos!');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0)
    setWeightField(0)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}> 
          <h1>Calcule o seu IMC:</h1>
          <p>O Índice de Massa Corporal (IMC) é uma das principais ferramentas, 
            adotada inclusive pela Organização Mundial de Saúde (OMS), para 
            calcular o chamado “peso ideal”.</p>

            <input 
              type='number' 
              value={heightField > 0 ? heightField : ''} 
              placeholder='Digite sua altura. Ex: 1.70 (em metros)'
              onChange={e => setHeightField(parseFloat(e.target.value))}
              disabled = {toShow ? true : false}
            /> 
            <input 
              type='number' 
              value={weightField > 0 ? weightField : ''} 
              placeholder='Digite o seu peso. Ex: 80.5 (em kg)'
              onChange={e => setWeightField(parseFloat(e.target.value))}
              disabled = {toShow ? true : false}
            /> 

            <button onClick={handleCalculateButton} disabled = {toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.arrow} onClick={handleBackButton}>
              <img src={leftArrow} width={25}/>
            </div>
            <GridItem item={toShow}/>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;