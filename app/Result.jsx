import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Result = () => {
    const {resultArray} = useLocalSearchParams();
    const data = JSON.parse(resultArray);
    console.log(data);
    const TOTAL_ATTEMT = data.length;
    const UNATTEMPT =10 - data.length;
    let totalCorrect = 0;
    let totalInCorrect = 0;
    data.forEach(element => {
        if(element === 1) totalCorrect ++; 
        else totalInCorrect ++;
    });
  return (
    <View className = "px-10 py-10">
        <Text>{TOTAL_ATTEMT}</Text>
        <Text>{UNATTEMPT}</Text>
        <Text>{totalCorrect}</Text>
        <Text>{totalInCorrect}</Text>
    </View>
  )
}

export default Result