export const initialState = {
    email: { value: "", isValid: false, isUnique: false },
    verificationNumber: { value: "", isValid: true },
    password: { value: "", isValid: false },
    passwordCheck: { value: "", isValid: false },
    name: { value: "", isValid: true },
    address: { value: "", isValid: true },
    detailAddress: { value: "", isValid: true },
};

export const signupReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value,
                },
            };
        case "SET_IS_VALID":
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    isValid: action.isValid,
                },
            };
        case "SET_IS_UNIQUE": // only email
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    isUnique: action.isUnique,
                },
            };
        default:
            return state;
    }
};
