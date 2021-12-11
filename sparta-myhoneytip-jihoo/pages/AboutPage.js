import React from 'react';
import aboutImage from '../assets/aboutImage.png';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function AboutPage() {
  return (
      <View style={styles.container}>
        <Text style={styles.greet}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>

        <View style={styles.midContainer}>
            <Image 
                source={aboutImage}
                style={styles.image}
            />
            <Text style={styles.h1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.h2}>꼭 완주 하셔서 꼭 여러분 것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.instagram}><Text style={styles.instagramText}>여러분의 인스타계정</Text></TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkblue',
        padding: 30,
    },
    greet: {
        color: "white",
        fontSize: 28,
        fontWeight: "700",
        marginTop:40,
        marginBottom:70,
      },
    midContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150, 
        height: 150, 
    },
    h1: {
        color: "black",
        fontSize: 20,
        fontWeight: "700",
        marginTop: 10,
        textAlign: 'center',
    },
    h2: {
        color: "black",
        fontSize: 15,
        fontWeight: "700",
        marginTop: 25,
        textAlign: 'center',
    },    
    instagram: {
        width: 200, 
        height: 70, 
        backgroundColor: "#f6cc71",
        marginTop: 25,
        borderColor:"deeppink",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instagramText: {
        color:"#fff",
        fontWeight:"700",
        textAlign:"center"
    },

});