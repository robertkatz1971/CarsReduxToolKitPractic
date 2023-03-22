import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        data: [],
        searchTerm: '',
    },
    reducers: {
        addCar(state, action) {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action) { 
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;     
        },
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer