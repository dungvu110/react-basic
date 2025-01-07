
const initState = {
    users: [
        { id: 1, name: "ABC" },
        { id: 2, name: "DEF" },
        { id: 3, name: "GHI" },
    ],
    post: [],
}

//redux's state, action duoc truyen len tu react
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            console.log(">>> CASE: DELETE USER!", action);

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                ...state, users //chi cap nhat lai users
            };
        case "CREATE_USER":
            let id = Math.floor(Math.random() * 10000);
            let user = { id: id, name: `random${id}` };

            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }

    return state;
}

export default rootReducer;