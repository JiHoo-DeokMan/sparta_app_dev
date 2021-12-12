import React from "react"
import {View,Text,Image,StyleSheet} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function CardEven({content}) {
    return (<View style={styles.cardEven}>
        <Image style={styles.cardImage} source={{uri:content.image}}/>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
            <Text style={styles.cardDesc} numberOfLines={3} >{content.desc}</Text>
            <Text style={styles.cardDate}>{content.date}</Text>
          </View>
      </View>)
}

const styles = StyleSheet.create({
    cardEven:{ //카드 짝수 홀수에 따른 스타일 적용
      backgroundColor:"#FFFDF5",
      marginTop:30,
      flexDirection:"row",
    },
    cardImage: {
      flex: 1,
      width: "100%", 
      height: 120, 
      borderRadius: 10,
    },
    cardContent: {
      flex: 2,
      height: 120, 
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