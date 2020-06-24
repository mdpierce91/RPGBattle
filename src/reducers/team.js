const teamReducer = (state = [], action) => {
    switch (action.type){
        case 'POPULATE_TEAM':    
            return action.team;
        case 'ADD_TO_TEAM':
            // If a unit of the same id isn't in the team, add it.
            if (!state.some((unit) => unit.id === action.unit.id)){
                return [
                    ...state,
                    action.unit
                ];
            }
            else{
                return state;
            }
        case 'REMOVE_FROM_TEAM':
            console.log(`action id: ${action.id}`)
            return state.filter((unit) => unit.id !== action.id);
        default:
            return state;
    }
}
export { teamReducer as default };