import store from "../redux/store.js";
import { reduce } from '../redux/actions.js';

function reduceState(){
    const value = document.querySelector('#inputNumber').value;
        if (value){
            store.dispatch(reduce(value));
        }else{
            window.alert('You should include a number!')
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
