import { StatusBar } from "expo-status-bar";
import React from "react";
import {ScrollView,StyleSheet,Text,TextInput,View,Button,Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import MyIcon from "./MyIcon";

export default function Section1 () {
  return (
      <View style={{ flex : 1 }}>
    <View style={{ flex : 1, flexDirection : "row" }}>
         <Image style={{ flex : 1, resizeMode : "cover", aspectRatio : 4/2}} source={require('../../assets/week3/room-6.jpg')}/>
    </View>
    </View> 
      

     
    
  );
}