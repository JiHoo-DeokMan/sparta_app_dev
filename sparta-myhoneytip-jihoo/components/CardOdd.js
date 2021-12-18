import React from "react"
import {View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function CardOdd({content,navigation}) {
  //MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
    return (
      <TouchableOpacity style={styles.cardOdd} onPress={()=>{navigation.navigate('디테일 페이지',content)}}>
        {/* 이동할 Stack.Screen의 name 값을 navigate에 넣어주기. 이동할 곳에 넘겨줄 데이터는 content */}
        <Image style={styles.cardImage} source={{uri:content.image}}/>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
            <Text style={styles.cardDesc} numberOfLines={3} >{content.desc}</Text>
            <Text style={styles.cardDate}>{content.date}</Text>
          </View>
      </TouchableOpacity>)
}

const styles = StyleSheet.create({
    cardOdd:{ //카드 짝수 홀수에 따른 스타일 적용
      backgroundColor:"#FDFBFA",
      marginBottom: 24,
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