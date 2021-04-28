const initialstate = false;

export default function (state = initialstate, action) {
    switch (action.type) {
        case "EDIT_USER": 
            return {
                isEdited: action.payload,
                message: action.message
            };

        default:
            return state;
    }
}