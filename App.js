import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyADRO8_ByZQAi49gthB0YoEUd0tvksHOEg",
    authDomain: "ccptpm-d3f13.firebaseapp.com",
    databaseURL: "https://ccptpm-d3f13.firebaseio.com",
    projectId: "ccptpm-d3f13",
    storageBucket: "ccptpm-d3f13.appspot.com",
    messagingSenderId: "126626627526",
    appId: "1:126626627526:web:be945c8c8ecbf3d5987cc7"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
