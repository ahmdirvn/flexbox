import React from "react";
import { StyleSheet, Text, View } from "react-native";



const Flex = () => {
  
  return (
    <View style={{flex:1,flexDirection: "coloumn",alignItems:"flex-end",backgroundColor:"#EAEAEA"}}>

<Text style={{flex:50,alignSelf:"center",marginTop:200}}>Kosong belum ada Item</Text>

      <View style={{width:335,flex:16, backgroundColor: "#B9B1B9",flexDirection: "row",alignItems:"center",justifyContent:"space-around" }} >

        <View style={{ width:35,height:35,margin:10, backgroundColor: "#FCE700" }} />
        <View style={{ width:35,height:35,margin:10, backgroundColor: "white" }} />
        <View style={{  width:35,height:35,margin:10, backgroundColor: "white" }} />
      </View>
    </View>
  );
};


export default Flex;