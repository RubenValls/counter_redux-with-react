import React from 'react';
import DecreaseButton from './decreaseButton';
import IncreaseButton from './increaseButton';

const Buttons = () => {
    return (
        <div className='container mt-5 p-1' id='buttonsContainer'>
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

export function checkNull(){
    if(document.querySelector('#buttonsContainer') && !document.querySelector('#alertText')){
        const container = document.querySelector('#buttonsContainer');
        const alert = document.createElement('h4');
        alert.id = 'alertText';
        alert.className = 'text-danger mt-2';
        alert.innerText = 'You should include a number. Try again!'
        container.appendChild(alert);
    }
}

export function deleteAlertText(){
    if(document.querySelector('#alertText')){
        document.querySelector('#alertText').remove()
    }
    }
