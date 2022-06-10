export const incNumber = (num,name) => {
    return {
        type: 'INCREMENT',
        payload: num,
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};
