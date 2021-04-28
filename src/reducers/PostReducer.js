const initialstate = {};

export default function (state = initialstate, action) {
    switch (action.type) {
        case "POST_LIST":
            return action.payload;

        default:
            return state;
    }
}