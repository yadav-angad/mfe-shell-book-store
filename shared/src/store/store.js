import { createStore } from 'redux';

const initialState = {
    user: {},
    countryData: {},
    bookList: {},
    cart: []
};

const reducer = (state = initialState, action) => {
    console.log('Action dispatched:', action);
    console.log('Current state:', state);
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_BOOK':
            return { ...state, bookList: action.payload };
        case 'SET_CART':
            console.log("Setting cart with payload:", action.payload);
            return {
                ...state,
                cart: [
                    ...state.cart, // fallback to empty array if somehow null
                    action.payload
                ]
            };
        case 'SET_COUNTRY_DATA':
            return {
                ...state,
                countryData: {
                    ...state.countryData,
                    [action?.payload?.data?.country]: action?.payload?.data
                }
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);
