import { useSelector, useDispatch } from "react-redux"
import { changeName, changeCost, addCar } from "../store";
import { useRef } from 'react';


const CarForm = () => {

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        };
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const cost = parseInt(event.target.value) || '';
        dispatch(changeCost(cost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar(
            {
                name: name, 
                cost: cost
            })
        );
         inputRef.current.focus();  
    }

    return (
       <div className="car-form panel">
            <h3 className="title is-3">Add Car</h3>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label is-small">Name</label>
                        <input
                            ref={inputRef} 
                            type="text" 
                            onChange={handleNameChange} 
                            value={name} 
                        />  
                    </div>
                    <div className="field">
                        <label className="label is-small">Cost</label>
                        <input 
                            type="number" 
                            onChange={handleCostChange} 
                            value={cost || ""} 
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link" type="submit">Add Car</button>
                </div>
            </form>
       </div>
       
    );
}

export default CarForm;