import { useSelector } from "react-redux";

const CarValue = () => {
    
    const totalValue = useSelector(({ cars: { data, searchTerm }}) => {
        const filteredCars = data.filter(car => car.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
        return filteredCars.reduce((acc, car) => {
            return (acc + car.cost);
        }, 0);
    });
    
    return (
        <div className="car-value">
            Total Cost: ${totalValue}
        </div>
    );
}

export default CarValue;