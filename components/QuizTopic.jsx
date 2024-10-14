import { View, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Topic from './Topic'


const QuizTopic = ({ QuizTopics }) => {
  const [fontsLoaded] = useFonts({
    'Custom-Font': require('../assets/fonts/ChakraPetch-Regular.ttf'),
    'My-Font-medium': require('../assets/fonts/Font/BarlowCondensed-Medium.ttf'),
    'My-Font-medium-italic': require('../assets/fonts/Font/BarlowCondensed-MediumItalic.ttf'),
  });
  return (
    <View className="flex-1 bg-black/[0.1] px-0">
      <Image
        source={{ uri: "https://i.pinimg.com/564x/30/96/97/30969727247fd087ccfe82b72b700a80.jpg" }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />
      <ScrollView
        bounces={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-black/[0.2] px-5 pt-5 pb-52">
        {
          QuizTopics.map((item, index) => <Topic key={index} item={item} index={index} />)
        }
      </ScrollView>
    </View>
  )
}

export default QuizTopic