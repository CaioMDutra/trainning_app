import React from 'react';
import { Image, SafeAreaView, Text, StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Treinos() {

const treinos = [
    {
    id: 1,
    name: "Treino de peitoral",    
    image: require('../../assets/peito.png'),
},
{
    id: 2,
    name: "Treino de dorsal",
    image: require('../../assets/treinos.png'),
},
{
    id: 3,
    name: "Treino de ombros",
    image: require('../../assets/treinos.png'),
},
{
    id: 4,
    name: "Treino de biceps",
    image: require('../../assets/treinos.png'),
},
{
    id: 5,
    name: "Treino de triceps",
    image: require('../../assets/treinos.png'),
},
{
    id: 6,
    name: "Treino de pernas",
    image: require('../../assets/treinos.png'),
},
{
    id: 7,
    name: "Abdominais",
    image: require('../../assets/treinos.png'),
},
{
    id: 8,
    name: "Cardio",
    image: require('../../assets/treinos.png'),
},
];
const oneTreino = ({item}) => (
    <TouchableOpacity style={styles.item}>
        <View style={styles.avatarCounteiner}>
            <Image source={item.image} style={styles.avatar}/>
        </View>
        <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
    
)

itemSeparator = () => {
    return <View style={styles.counteiner}/>
}

 return (
   <SafeAreaView>
    <FlatList
    data={treinos}
    renderItem={ oneTreino}
    ItemSeparatorComponent = {itemSeparator}
    />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    counteiner:{
        height:1,
        width: "100%",
        backgroundColor:"#000"

    },
    avatarCounteiner:{
        backgroundColor:"#d9d9d9",
        borderRadius: 100,
        height:89,
        width:89,
        justifyContent:"center",
        alignItems:"center",

    },
    avatar:{
        height:60,
        width:70,
    },

    name:{
        color:"#fff",
        fontWeight: '600',
        fontSize:16,
        marginLeft:13,
        marginTop: 33,

    }, item:{
        backgroundColor:"#4F4F4F",
        flex:1,
        flexDirection:"row",
        alignContent:"center",
        paddingVertical:13,
    }
})