import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from '../data.json';
import CardOdd from '../components/CardOdd';
import CardEven from '../components/CardEven';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';

export default function MainPage({navigation,route}) {
  console.disableYellowBox = true;

  const [state,setState] = useState([])
  //state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경 시킬 때 사용해야 하는 함수
  // 팁을 관리하는 상태 state.
  //기존 꿀팁을 저장하고 있을 상태
  const [cateState,setCateState] = useState([])
  //카테고리에 따라 다른 꿀팁을 그때그때 저장, 관리할 상태

  const [ready,setReady] = useState(true)
  // 팁이 준비 상태인지 준비가 끝난 상태인지 관리하기 위해 또 하나의 상태 ready를 추가.

  useEffect(()=>{
    setTimeout(()=>{
        //헤더의 타이틀 변경
        navigation.setOptions({
          title:'나만의 꿀팁'
        })
        //꿀팁 데이터로 모두 초기화 준비
        let tip = data.tip;
        setState(tip)  // 전체 데이터를 일단 넣고 (전체보기)
        setCateState(tip)  // 카테고리에 따라서 달라지는 팁 데이터를 보관
        setReady(false)
    },500)
  },[])

  const category = (cate) => {
    if(cate == "전체보기"){
        //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
        setCateState(state)
    } else {
        setCateState(state.filter((d)=>{    // .filter는 반복을 돌리되, return 뒤 조건에 따라 반환
            return d.category == cate    // 꿀팁 전체인 state가 반복 돌면서 category가 메뉴 cate랑 같다면 걔만 return
        }))
    }
  }

  let todayWeather = 10 + 17;
  let todayCondition = "흐림"

  return ready ? <Loading/> :  (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      {/* <Text style={styles.title}>나만의 꿀팁</Text> */}
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <TouchableOpacity style={styles.about} onPress={()=>{navigation.navigate('어바웃 페이지')}} >
          <Text style={styles.menuText}>소개 페이지</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'
        }} 
        style={styles.titleImage}
      />
      <ScrollView style={styles.menuScroll} horizontal={true}>
        <TouchableOpacity style={styles.middleButtonAll} onPress={()=>{category('전체보기')}}>
          <Text style={styles.menuText}>전체보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu1} onPress={()=>{category('생활')}}>
          <Text style={styles.menuText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu2} onPress={()=>{category('재테크')}}>
          <Text style={styles.menuText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu3} onPress={()=>{category('반려동물')}}>
          <Text style={styles.menuText}>반려동물</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu4} onPress={()=>{navigation.navigate('찜 페이지')}}>
          <Text style={styles.menuText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        { cateState.map((content,i)=>{
            return i % 2 == 0 ? (
              <CardOdd content={content} key={i} navigation={navigation}/>)
                : (<CardEven content={content} key={i} navigation={navigation}/>)
            })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginRight: 16,
    marginLeft: 16,    
  },
  weather: {
    alignSelf:"flex-end",
    marginTop: 10,
    paddingRight:16
  },
  about: {
    width: 105,
    height: 50, 
    backgroundColor: "#c2cdf0",
    borderRadius: 20, 
    marginTop: 14,
    marginLeft: 10,
    marginRight: 16,
    alignSelf:"flex-end",
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    width: "92%", 
    height: 200, 
    borderRadius: 10,
    marginTop: 24,  
    alignSelf:"center"
  },
  menuScroll: {
    height: 55, 
    marginTop:24,
    marginBottom:24,
  },
  middleButtonAll: {
    width: 110, 
    height: 55, 
    backgroundColor: "#5ab8b4",
    borderRadius: 20,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu1: {
    width: 110, 
    height: 55, 
    backgroundColor: "#f6cc71",
    borderRadius: 20,
    marginLeft: 10,
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
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
    textAlign:"center"
  },
  cardContainer: {
    marginRight: 16,
    marginLeft: 16,  
  },
});