
const changeTheNumber = (counter = 0, action) => {
    switch (action.type) {
        case "INCREMENT": return counter + action.payload;
        case "DECREMENT": return counter - 1;
        default: return counter;
    }
}

export default changeTheNumber;
