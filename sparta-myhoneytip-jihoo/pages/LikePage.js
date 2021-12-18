import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import LikeCard from '../components/LikeCard';
import { StatusBar } from 'expo-status-bar';

export default function LikePage({navigation,route}) {
    console.disableYellowBox = true;

    const [tip, setTip] = useState([{
        "idx":0,
        "category":"카테고리",
        "title":"제목",
        "image": "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3",
        "desc":"설명",
        "date":"0000.00.00."
    }])
    
    useEffect(()=>{
        navigation.setOptions({
            title:'꿀팁 찜'
        })
    })

    return (
        <ScrollView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.cardContainer}>
                {/* 하나의 카드 영역을 나타내는 View */}
                { tip.map((content,i)=>{
                    return (<LikeCard content={content} key={i} navigation={navigation}/>)
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    cardContainer: {
        marginRight: 16,
        marginLeft: 16,  
    },
})