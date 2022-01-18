import React, {useState} from 'react';

import styles from './ProgressBar.module.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState()

    const cons = (event: any) => {
        setProgress(event.target.value)
    }

    return (
        <div className={styles.boxProgress}>
            <input type="number" value={progress} onChange={cons}/>
            <progress value={progress}  max={100}/>
        </div>
    );
};

export default ProgressBar;