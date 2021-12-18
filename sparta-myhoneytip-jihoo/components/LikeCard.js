import React from "react"
import {View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";

export default function LikeCard({content,navigation}) {
    return (
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('디테일 페이지',content)}}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3} >{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#FFF",
        borderBottomWidth:0.5,
        borderBottomColor:"#cdf",
        paddingBottom:12,
        marginBottom:12,
        flexDirection:"row",
    },
    cardImage: {
        flex: 1,
        width: "100%", 
        height: 114, 
        borderRadius: 10,
    },
    cardContent: {
        flex: 2,
        height: 114, 
        marginLeft: 12,
    },
    cardTitle: {
        color: "black",
        fontSize: 17,
        fontWeight: "700",
    },
    cardDesc: {
        color: "black",
        fontSize: 14,
    },
    cardDate: {
        color: "#bbb",
        fontSize: 10,
    },
})