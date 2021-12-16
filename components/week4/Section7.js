import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Image, } from 'react-native';

export default function Section7 () {
    return (
        <View style={{ flex : 1  , margin : 20 , marginTop : 5 , borderWidth : 1 , borderColor : "white" , paddingBottom : 10 , borderBottomColor: "#A9A9A9" }}>
             <View>
                <Text style={{fontSize : 15}}>Room Type</Text>
            </View>
            <View style={{ flexDirection : "row", padding : 10}}> 
                <Image style={{width :60 , height : 60 , borderRadius : 40/2 }} source={require('../../assets/week3/room-8.jpg')} />
                <View style={{ paddingLeft : 10}}>
                    <Text >Standard Twin Room</Text>
                    <Text style={{ color: "red" , marginTop :8}}>$399.99</Text>
                    <Text style={{ color : '#6495ED' ,fontSize: 10}}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
          
        </View>
    );
}