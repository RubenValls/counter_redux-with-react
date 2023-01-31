import { useSelector } from 'react-redux';


const State = () => {
    return (
        <div className='container border-bottom border-dark mt-5 p-1'>
            <h2>{useSelector(state => state)}</h2>
        </div>
    );
}

export default State;
