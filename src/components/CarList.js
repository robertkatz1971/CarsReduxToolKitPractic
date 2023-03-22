import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    const {cars, name} = useSelector(({ cars: {data, searchTerm}, form: {name} }) => {
        const filteredCars = data.filter(car => 
            car.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        return {cars: filteredCars, name: name}
    });
  
    const renderCars = cars.map((car) => {

        const element = (name && car.name.toLowerCase().startsWith(name.toLowerCase())) 
            ? <><b>{car.name} - ${car.cost}</b></> 
            : <>{car.name} - ${car.cost}</>

        return (
            <div key={car.id} className="panel is-small">
                {element}
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>X</button>
            </div>
        );
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    return (
        <div className="car-list">
            {renderCars}
        </div>
    );
}

export default CarList;