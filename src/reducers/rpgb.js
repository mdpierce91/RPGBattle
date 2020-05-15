// import React, { useReducer } from 'react';

// const rpgbReducer = () => {
//     switch (action.type){
//         case 'POPULATE_UNITS':    
//             return action.units;
//         case 'ADD_UNIT':
//             return [
//                 ...state,
//                 state.units = [
//                     ...state.units,
//                     action.unit
//                 ]
//             ];
//         case 'REMOVE_UNIT':
//             return [
//                 ...state,
//                 state.units = state.units.filter((unit) => unit.id === action.id)
//             ];
//         default:
//             return state;
//     }
// }