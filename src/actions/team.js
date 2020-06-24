import database from '../firebase/firebase';

export const addToTeam = (unit) => ({
    type: 'ADD_TO_TEAM',
    unit
});

export const startAddToTeam = (dispatch, uid, unit) => {
    console.log("gogo firebase ranger");
    return database.ref(`users/${uid}/team`).push(unit).then((ref) => {
        console.log("firebase done");
        dispatch(addToTeam({
            id: ref.key,
            ...unit
        }));
    });
};

export const startSetTeam = (dispatch, uid) => {
    console.log('get data from firebase');
    return database.ref(`users/${uid}/team`).once('value').then((data) => {    
        console.log('data fetched from firebase', data);
        dispatch({
            type: 'POPULATE_TEAM',
            team: data
        })
    })
}

export const removeFromTeam = (id) => ({
    type: "REMOVE_FROM_TEAM",
    id
});

export const startRemoveFromTeam = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/team/${id}`).remove().then(() => {
            dispatch(removeFromTeam({
                id
            }));
        });
    };
};