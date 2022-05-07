import { configureStore } from '@reduxjs/toolkit';
import { Reducer, initialState } from './reducer';

export const ConfigStore = () => {
    const store = configureStore(
        {reducer: Reducer},
        initialState
        );
    return store;
}
