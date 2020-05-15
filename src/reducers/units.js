const unitsReducer = (state, action) => {
    switch (action.type){
        case 'POPULATE_UNITS':    
            return action.units;
        case 'ADD_UNIT':
            return [
                ...state,
                action.unit
            ];
        case 'ADD_UNITS':
            return [
                ...state,
                ...action.units
            ];
        case 'REMOVE_UNIT':
            return state.filter((unit) => unit.id === action.id);
        default:
            return state;
    }
}

export { unitsReducer as default };