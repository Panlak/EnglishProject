import { StackActions } from "@react-navigation/native";
import React from "react";

export const navigationRef = React.createRef<any>();

export const navigate = (name: string, params?: object) =>{
 
    try{
    navigationRef.current?.navigate(name, params);
  

    }catch(err){
        console.warn(err);
    }
}

export const goBack = () =>
    navigationRef.current?.goBack();

export const replace = (name: string, params?: object) =>
    navigationRef.current?.dispatch(
        StackActions.replace(name,params)
    );
