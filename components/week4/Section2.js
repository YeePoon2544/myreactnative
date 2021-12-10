import { StatusBar } from "expo-status-bar";
import React from "react";
import {ScrollView,StyleSheet,Text,TextInput,View,Button,Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// import MyIcon from "./MyIcon";

export default function Section2 () {
  return (
      <View style={{ flex : 1, margin : 50 , padding : 10 , borderWidth : 1 , borderColor : 'gray' , borderRadius : 20 , marginTop : -40 , alignItems : "center" , backgroundColor: '#FFFFFF', borderColor: '#F5F5F5' , marginBottom : 0 }}>
        <Text style={{ fontSize : 20}} >Hilton San Francisco</Text>

        <View style={{ flexDirection : "row"}}>
                <FontAwesome name="star" size={15} color="orange" />
                <FontAwesome name="star" size={15} color="orange" />
                <FontAwesome name="star" size={15} color="orange" />
                <FontAwesome name="star" size={15} color="orange" />
                <FontAwesome name="star-half" size={15} color="orange" />
                </View>


        <Text style={{ textAlign : "center" , fontSize : 10 ,  color : 'gray'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>

    
    </View> 
      

     
    
  );
}