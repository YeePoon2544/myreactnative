import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View ,Button, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
export default function Hotel() {
    return (
       
            <View style={{ flex : 1 , padding : 10 }}>
                {/* วิวก้อนที่ 1 */}
                <View style={{flexDirection : "row"}}>
                    <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2, borderRadius : 20}} source={(require('../../assets/week3/room-1.jpg'))}/>
                </View>

                {/* วิวก้อนที่ 2 */}
                <View style={{ flexDirection : "row", marginTop : 10 }}>
                <FontAwesome name="map-marker"  size={32} color="orange" />
                <Text style={{ fontSize : 20 , color : 'gray'}}> 553 Cislason Radial</Text>
                </View>

                {/* วิวก้อนที่ 3  */}
                <View style={{  marginTop : 10 }}>
                    <Text style={{ fontSize : 30}}> Boston Hotel</Text>
                </View>

                {/* วิวก้อนที่ 4  */}
                <View style={{ flexDirection : "row" , justifyContent : "space-between" ,  marginTop : 10}}>
                    <View style={{ flexDirection : "row"}}>
                     <FontAwesome name="star" size={32} color="orange" />
                     <FontAwesome name="star" size={32} color="orange" />
                     <FontAwesome name="star" size={32} color="orange" />
                     <FontAwesome name="star" size={32} color="orange" />
                     <FontAwesome name="star-half" size={32} color="orange" />
                    </View>
                    <View>
                        <Text style={{ fontSize : 20 , color : 'gray'}}>100 Reviews</Text>
                    </View>
                </View>

                {/* วิวก้อนที่ 5  */}
                <View style={{  marginTop : 10 }}>
                <Text style={{ fontSize : 30 , color : 'red'}}>$125</Text>
                </View>
            </View> 
               
       
        
    );
}
