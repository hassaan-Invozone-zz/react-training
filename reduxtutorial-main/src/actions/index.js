export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num,
        name: 'hassaan'
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};
