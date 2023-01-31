import store from '../redux/store';


const State = () => {
    return (
        <div className='container border-bottom border-dark mt-5 p-1'>
            <h2>{store.getState()}</h2>
        </div>
    );
}

export default State;
