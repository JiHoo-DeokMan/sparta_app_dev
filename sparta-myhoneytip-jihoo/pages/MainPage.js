import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import data from '../data.json';
import CardOdd from '../components/CardOdd';
import CardEven from '../components/CardEven';
import Loading from '../components/Loading';  // 로딩 화면 불러옴

export default function MainPage() {
  console.disableYellowBox = true;

	//useState 사용법

  //모두 다 useState가 선물해줌
  //useState()안에 전달되는 값은 state 초기값
  const [state,setState] = useState([])
      // state = []
	//state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
  //setState는 state를 변경시킬 때 사용해야하는 함수
  // 팁을 관리하는 상태 state.

  const [ready,setReady] = useState(true)
  // 팁이 준비 상태인지 준비가 끝난 상태인지 관리하기 위해 또 하나의 상태 ready를 추가.

  //컴포넌트에 상태를 여러개 만들어도 됨
  //관리할 상태이름과 함수는 자유자재로 정의할 수 있음
  //초기 상태값으로 리스트, 참거짓형, 딕셔너리, 숫자, 문자 등등 다양하게 들어갈 수 있음.

  
	//하단의 return 문이 실행되어 화면이 그려진 다음 실행되는 useEffect 함수
  //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
  useEffect(()=>{
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수 (지연함수)
    setTimeout(()=>{
        setState(data)    //setState에 데이터를 넣어주고 (변수 state)
        setReady(false)    //준비가 끝났다 = 'false'
    },1000) //뒤의 1000 숫자는 1초를 뜻함
  },[])

  let tip = state.tip;
//   let tip = data.tip;
	//data.json 데이터는 state에 담기므로 상태에서 꺼내옴
	let todayWeather = 10 + 17;
  let todayCondition = "흐림"

  //처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
  //useEffect로 인해 데이터가 준비되고, ready 값이 false가 되면 : 콜론 뒤의 값이 반환(그려짐)
  return ready ? <Loading/> :  (
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
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        { 
          tip.map((content,i)=>{
            return i % 2 == 0 ? (<CardEven content={content} key={i}/>) : (<CardOdd content={content} key={i}/>)
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
  cardContainer: {
  },
});