import { StatusBar } from "expo-status-bar";
import React from "react";
import {ScrollView,StyleSheet,Text,TextInput,View,Button,Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import MyIcon from "./MyIcon";

export default function Section3 () {
    return (
        <View style={{ flex : 1 }}>
            <View style={{ flexDirection : "row", padding : 10}}> 
                <View style={{ height : 50 , width : 50 , borderRadius : 50/2 , backgroundColor : "#CD5C5C" , alignItems: "center" , justifyContent : "center" }}>
        <Text style={{ fontSize : 20 , color : "white" }}>9.5</Text>
        </View>

        <View style={{ paddingLeft : 10}}>
            <Text style={{ fontSize : 20 , color : "#CD5C5C"}}>Excellent</Text>
            <Text style={{ color : "black" }}>See 801 reviews</Text>
        </View>

        </View> 
    </View>
    );
  }