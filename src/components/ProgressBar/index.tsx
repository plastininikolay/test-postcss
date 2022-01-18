import React, {useState} from 'react';

import './style.pcss'

const ProgressBar = () => {
    const [progress, setProgress] = useState()

    const cons = (event: any) => {
        setProgress(event.target.value)
    }

    return (
        <div className="box-progress">
            <input type="number" value={progress} onChange={cons}/>
            <progress value={progress}  max={100}/>
        </div>
    );
};

export default ProgressBar;