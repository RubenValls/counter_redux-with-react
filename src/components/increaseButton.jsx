import React from 'react';
import store from "../redux/store.js";
import { add } from '../redux/actions.js';

function increaseState(){
    const value = document.querySelector('#inputNumber').value;
        if (value){
            store.dispatch(add(Number(value)));
        }else{
            window.alert('You should include a number!')
        }
}

const IncreaseButton = () => {
    return (
        <div>
            <button type="button" className="btn btn-lg btn-outline-dark" id='increase' onClick={increaseState}>INCREASE</button>
        </div>
    );
}

export default IncreaseButton;
