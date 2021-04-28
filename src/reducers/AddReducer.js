const initialstate = false;

export default function (state = initialstate, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                isadded: action.payload,
                message: action.message
            };

        default:
            return state;
    }
}