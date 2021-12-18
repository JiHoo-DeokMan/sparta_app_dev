import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Share } from 'react-native';
import * as Linking from 'expo-linking';
// expo-linking 안의 도구를 몽땅 * 가지고 올 건데 그 이름을 Linking 이라고 하겠다.

export default function DetailPage({navigation,route}) {
    console.disableYellowBox = true;

    //로딩페이지 대신에 초기 컴포넌트의 상태값을 임의로 설정
    //state, setState 뿐 아니라 이름을 마음대로 지정할 수 있음!
    const [tip, setTip] = useState({
        "idx":0,
        "category":"카테고리",
        "title":"타이틀",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
        "desc":"상세정보",
        "date":"0000.00.00."
    })
    
    //화면이 그려진 다음에 상태가 변경되면 다시 화면 그리기.
    useEffect(()=>{
//Card.js에서 navigation.navigate 함수를 쓸때 두번째 인자로 content를 넘겨줬죠?
//content는 딕셔너리 그 자체였으므로 route.params에 고대~로 남겨옵니다.
//즉, route.params 는 content죠!
        navigation.setOptions({
            //setOptions로 페이지 타이틀도 지정 가능하고
            title:route.params.title,
            //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다. 
            headerStyle: {
                backgroundColor: '#000',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
        setTip(route.params)
    },[])

    const popup = () => {
        Alert.alert("찜 완료!!")
    }
    const share = () => {
        Share.share({
            message:`${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }
    const link = () => {
        Linking.openURL("https://spartacodingclub.kr")
    }
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={{uri:tip.image}} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.btn} onPress={()=>popup()}><Text style={styles.btnTxt}>팁 찜하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>share()}><Text style={styles.btnTxt}>팁 공유하기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>link()}><Text style={styles.btnTxt}>외부 링크</Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 20,
        // alignItems: 'center',    ScrollView에서는 적용이 안 됨.
        // justifyContent: "center",    ScrollView에서는 적용이 안 됨.
    },
    imgContainer:{
        alignItems: 'center',
    },
    image: {
        width: "90%", 
        height: 450, 
        borderRadius: 25,
        margin: 10,
    },
    textContainer: {
        alignItems: 'center',    // 고유한 영역을 가지고 있으니까 적용이 됨.
        paddingTop: 20,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        marginRight: 6,
        marginLeft: 6,
    },
    desc: {
        color: "white",
        fontSize: 13,
        margin: 20,
    },
    btnGroup: {
        height: 120, 
        flexDirection:"row",
    },
    btn: {
        width: 100, 
        height: 44, 
        borderColor: 'deeppink',
        borderRadius: 7,
        borderStyle: "solid",
        borderWidth: 0.7,
        alignItems: 'center',    // 고유한 영역을 가지고 있으니까 적용이 됨.
        justifyContent: "center",    // 고유한 영역을 가지고 있으니까 적용이 됨.
        marginTop: 10,
        marginRight: 14,
        marginLeft: 14,
    },
    btnTxt: {
        color: "white",
        fontSize: 13,
    },
})