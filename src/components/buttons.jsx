import React from 'react';
import DecreaseButton from './decreaseButton';
import IncreaseButton from './increaseButton';

const Buttons = () => {
    return (
        <div className='container mt-5 p-1'>
            <div className='row'>
                <div className='col'>
                    <IncreaseButton/>
                </div>
                <div className='col'>
                    <DecreaseButton/>
                </div>
            </div>
        </div>
    );
}

export default Buttons;
