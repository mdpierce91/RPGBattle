const teamReducer = (state, action) => {
    switch (action.type){
        case 'POPULATE_TEAM':    
            return action.team;
        case 'ADD_TO_TEAM':
            if (state.filter((unit) => unit.id !== action.id) === state){
                return [
                    ...state,
                    action.unit
                ];
            }
            else{
                return state;
            }
        case 'REMOVE_FROM_TEAM':
            return state.filter((unit) => unit.id !== action.id);
        default:
            return state;
    }
}
export { teamReducer as default };