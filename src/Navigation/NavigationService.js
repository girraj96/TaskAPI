import * as React from "react";
import {NavigationActions, StackActions} from '@react-navigation/native';

let _navigator;

export const navigationRef= React.createRef();

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

export const navigate=(routeName, params) =>{
	navigationRef.current?.navigate(routeName,params);
// alert(_navigator?.navigate)
	// _navigator.dispatch(
	// 	NavigationActions.navigate({
	// 		routeName,
	// 		params,
	// 	}),
	// );
}

function goBack() {
	_navigator.dispatch(NavigationActions.back());
}

function resetNavigation(routeName = 'loginScreen') {
	const resetAction = StackActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({routeName})],
	});
	_navigator.dispatch(resetAction);
}

export default {
	setTopLevelNavigator,
	resetNavigation,
	goBack,
};