import { StatusBar } from "expo-status-bar";
import React from "react";
import {ScrollView,StyleSheet,Text,TextInput,View,Button,Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import MyIcon from "./MyIcon";

export default function Section4 () {
    return (
        <View style={{ flex : 1 ,marginTop : 5 , margin : 20  , borderWidth : 1 , borderBottomColor : "#A9A9A9" , borderColor : "white" , paddingBottom : 10,}}>

        <View>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
            </View>
            <View>
                <Text style={{ fontSize : 13 , color: 'gray' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>  

       
    </View>
    );
  }