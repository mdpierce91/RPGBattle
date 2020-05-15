const teamReducer = (state, action) => {
    switch (action.type){
        case 'POPULATE_TEAM':    
            return action.team;
        case 'ADD_TO_TEAM':
            return [
                ...state,
                action.unit
            ];
        case 'REMOVE_FROM_TEAM':
            return state.filter((unit) => unit.id !== action.id);
        default:
            return state;
    }
}
export { teamReducer as default };