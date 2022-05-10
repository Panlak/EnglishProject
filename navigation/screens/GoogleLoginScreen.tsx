import React from "react";
import {View, Text, Image, StyleSheet, useWindowDimensions,Button} from 'react-native';
import axios from 'axios';
const baseUrl = 'https://4554-93-171-154-244.eu.ngrok.io';
import CustomButton from './CustomButton';
import { WebView } from 'react-native-webview';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  GoogleSignin.configure({
    scopes: ['613257605362-o3a3c2v8o9uq6m30krqunbk6fa0s7fuj.apps.googleusercontent.com'], // [Android] what API you want to access on behalf of the user, default is email and profile
    webClientId: '613257605362-o3a3c2v8o9uq6m30krqunbk6fa0s7fuj.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  interface IProps {
  }
  interface IState {
    isSignedInProgress: any
    userInfo: any,
    currentUser: any,
    isLoginScreenPresented: any,
    user: any
  }
  
export default class GoogleLoginScreen extends React.Component<IProps,IState>{
  

  constructor(props: IProps) {
    super(props);

    this.state = {
      isSignedInProgress: false,
      userInfo: {},
      currentUser:{},
      isLoginScreenPresented:false,
      user: {}
    };
  }



  signIn = async () => {
                   
    GoogleSignin.configure();
    GoogleSignin.hasPlayServices().then((hasPlayService) => 
    {
      if (hasPlayService)
      {
        GoogleSignin.signIn().then((userInfo) =>
        {           
            this.setState({ userInfo });
            this.setState({ isSignedInProgress: false });                     
        }).catch((e) => 
        {
          console.warn("ERROR IS: " + JSON.stringify(e));
        })
      } }).catch((e) => 
      {
          console.warn("ERROR IS: " + JSON.stringify(e));
      })   
  };
    getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          console.warn(userInfo)
          this.setState({ userInfo });
        } catch (error : any) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            console.warn(error)
          } else {
            // some other error
          }
        }
    };

    getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
       
        this.setState({ currentUser });
    };

    isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({ isLoginScreenPresented: !isSignedIn });
    };

    signOut = async () => {
        try { 
          await GoogleSignin.signOut();
          this.setState({ user: null }); // Remember to remove the user from your app's state as well
          this.setState({ isSignedInProgress: true });
        } catch (error) {
          console.warn(error);
        }
    };
    
   
    render(){
        return(
            <View>
            { this.state.isSignedInProgress && 
            <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signIn}
            />}
            </View>
        );
    }
}