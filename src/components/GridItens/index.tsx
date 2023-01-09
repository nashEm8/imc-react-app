import { Level } from "../../imc/imc";
import styles from './GridItem.module.css';
import imgUp from '../../assets/up.png';
import imgDown from '../../assets/down.png';

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return(
        <>
            <div className={styles.main} style={{backgroundColor: item.color}}>
                <div className={styles.gridIcon}>
                    <img src={item.icon === 'up' ? imgUp : imgDown} alt='' width='30'/>
                </div>
                <div className={styles.gridTitle}>
                    {item.title}
                </div>

                {item.yourImc &&
                    <div className={styles.yourImc}>Seu IMC é: {item.yourImc.toFixed(2)} kg/m²</div>
                }

                <div className={styles.gridInfor}>
                    <>
                        IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                    </>
                </div>
            </div>
        </>
    );
}

