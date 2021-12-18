import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';

//페이지로 만든 컴포넌트들을 불러옵니다
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import AboutPage from '../pages/AboutPage';
import LikePage from '../pages/LikePage';

//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();

//리액트의 모~든 파일은 컴포넌트라 생각하고
//페이지 기능을 해주는 모든 기능이 담겨 있는 컴포넌트를 만든다 생각하세요!
const StackNavigator = () => {
    return (

        /// 페이지 기능이 들어갈 곳

        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언합니다.
        //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용합니다.
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.
        <Stack.Navigator screenOptions={{
                            headerStyle: {
                                backgroundColor: "#FFF",
                                // borderBottomColor: "#FFF",
                                // shadowColor: "#FFF",
                                height: 90,
                            },
                            //헤더의 텍스트를 왼쪽에 둘 지 가운데에 둘 지를 결정
                            headerTitleAlign:'left',
                            headerTintColor: "tomato",
                            headerBackTitleVisible: false
                        }}
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
            <Stack.Screen name="나만의 꿀팁 페이지" component={MainPage}/>
            <Stack.Screen name="디테일 페이지" component={DetailPage}/>
            <Stack.Screen name="어바웃 페이지" component={AboutPage}/>
            <Stack.Screen name="찜 페이지" component={LikePage}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;

// 최상단 컴포넌트 즉 App.js에 네비게이션 기능을 달면 됨.