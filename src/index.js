import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import database, { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

// Get the store
const store = configureStore();

// Configure the base of the app.
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
let hasRendered = false;
let unitSet = 'default';
/**
 * Start the app.
 */
const renderApp = () => {
	console.log('start render');
	if (!hasRendered) {
		console.log('Hasnt rendered before, start render');
		ReactDOM.render(jsx, document.getElementById('root'));
		hasRendered = true;
		console.log('has now rendered');
	}
};
// Display the loading page while everything is loading.
ReactDOM.render(<LoadingPage />, document.getElementById('root'));

// Once firebase has connected, begin the process of starting the app.
firebase.auth().onAuthStateChanged((user) => {
	console.log('Auth changed');
	if (user) {
		console.log('User exists');
		store.dispatch(login(user.uid));
		database.ref(`units/${unitSet}`).once('value').then((unitsSnapshot) => {
			console.log('units snapshot: ', unitsSnapshot);
			let units = [];
			unitsSnapshot.forEach((childSnapshot) => {
				console.log(childSnapshot.val());
				units.push(childSnapshot.val());
			})
			console.log('units before dispatch: ', units);
			store.dispatch({
				type: 'POPULATE_UNITS',
				units
			});
			console.log(store.getState());
			database.ref(`users/${user.uid}/team`).once('value').then((teamSnapshot) => {  
				let team = [];
				teamSnapshot.forEach((childSnapshot) => {
					console.log(childSnapshot.val());
					team.push(childSnapshot.val());
				})
				store.dispatch({
					type: 'POPULATE_TEAM',
					team
				});
				renderApp();
				if (history.location.pathname === '/'){
					history.push('/dashboard');
				}
			})
		})
	} else {
		console.log('No user');
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
