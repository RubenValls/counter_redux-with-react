import store from "../redux/store.js";
import { reduce } from '../redux/actions.js';
import {deleteAlertText, checkNull} from './buttons'; 

function reduceState(){
    const value = document.querySelector('#inputNumber').value;
        if (value){
            store.dispatch(reduce(value));
            deleteAlertText();
        }else{
            checkNull();
        }
}

const DecreaseButton = () => {
    return (
        <div>
            <button type="button" className="btn btn-lg btn-outline-dark" id='reduce' onClick={reduceState}>REDUCE</button>
        </div>
    );
}

export default DecreaseButton;
