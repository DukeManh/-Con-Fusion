import * as ActionTypes from './actionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    },
});

