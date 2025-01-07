
const initState = {
    users: [
        { id: 1, name: "ABC" },
        { id: 2, name: "DEF" },
    ]
}

//redux's state, action duoc truyen len tu react
const rootReducer = (state = initState, action) => {

    return state;
}

export default rootReducer;