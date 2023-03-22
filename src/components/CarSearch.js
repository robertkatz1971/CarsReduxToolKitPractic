import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => state.cars.searchTerm);

    const handleChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="car-form panel">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="mr-2" >Search</label>
                <input 
                    className="input is-small" 
                    value={searchTerm} 
                    onChange={handleChange} 
                />
            </div>
        </div>
    );
}

export default CarSearch;