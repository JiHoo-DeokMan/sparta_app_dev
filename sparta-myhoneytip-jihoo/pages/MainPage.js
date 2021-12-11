import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from '../data.json';    // ./은 같은 폴더 ../은 상위 폴더

export default function Week2ndPage() {
  console.disableYellowBox = true;
  
  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'
        }} 
        style={styles.titleImage}
      />
      <ScrollView style={styles.menuScroll} horizontal={true}>
        <TouchableOpacity style={styles.menu1}>
          <Text style={styles.menuText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu2}>
          <Text style={styles.menuText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu3}>
          <Text style={styles.menuText}>반려동물</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu4}>
          <Text style={styles.menuText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.tipContainer}>
      { 
        tip.map((content,i)=>{
          return i % 2 == 0 ? (<View style={styles.tipCardEven} key={i}>
                    <Image source={{uri:content.image}} style={styles.tipImage} />
                    <View style={styles.tipContent}>
                      <Text style={styles.tipTitle} numberOfLines={1}>{content.title}</Text>
                      <Text style={styles.tipDesc} numberOfLines={3} >{content.desc}</Text>
                      <Text style={styles.tipDate}>{content.date}</Text>
                    </View>
                  </View>) : (<View style={styles.tipCardOdd} key={i}>
                    <Image source={{uri:content.image}} style={styles.tipImage} />
                    <View style={styles.tipContent}>
                      <Text style={styles.tipTitle} numberOfLines={1}>{content.title}</Text>
                      <Text style={styles.tipDesc} numberOfLines={3} >{content.desc}</Text>
                      <Text style={styles.tipDate}>{content.date}</Text>
                    </View>
                  </View>)
        })
      }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginTop:30,
  },
  weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  titleImage: {
    width: "100%", 
    height: 200, 
    borderRadius: 10,
    marginTop:30,
    alignSelf:"center"
  },
  menuScroll: {
    height: 55, 
    marginTop:30,
  },
  menu1: {
    width: 110, 
    height: 55, 
    backgroundColor: "#f6cc71",
    borderColor:"deeppink",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu2: {
    width: 110,
    height: 55, 
    backgroundColor: "#f19c83",
    borderRadius: 20, 
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu3: {
    width: 110,
    height: 55, 
    backgroundColor: "#b2dfd0",
    borderRadius: 20, 
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu4: {
    width: 110,
    height: 55, 
    backgroundColor: "#ed95b4",
    borderRadius: 20, 
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    textAlign:"center"
  },
  tipContainer: {
  },
  tipCardEven:{ //카드 짝수 홀수에 따른 스타일 적용
    backgroundColor:"#FFFCF4",
    marginTop:30,
    flexDirection:"row",
  },
  tipCardOdd:{ //카드 짝수 홀수에 따른 스타일 적용
    marginTop:30,
    flexDirection:"row",
  },
  tipImage: {
    flex: 1,
    width: "100%", 
    height: 120, 
    borderRadius: 10,
  },
  tipContent: {
    flex: 2,
    height: 120, 
    marginLeft: 12,
  },
  tipTitle: {
    color: "black",
    fontSize: 17,
    fontWeight: "700",
  },
  tipDesc: {
    color: "black",
    fontSize: 14,
    },
  tipDate: {
    color: "#bbb",
    fontSize: 10,
  },
});
