import * as ActionTypes from './actionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    },
});


export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2500);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (DISHES) => ({
    type: ActionTypes.ADD_DISHES,
    payload: DISHES
});