import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  const [fontsLoaded] = useFonts({
    'Custom-Font': require('../assets/fonts/ChakraPetch-Regular.ttf'),
    'My-Font-medium': require('../assets/fonts/Font/BarlowCondensed-Medium.ttf'),
    'My-Font-medium-italic': require('../assets/fonts/Font/BarlowCondensed-MediumItalic.ttf'),
  });
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false,
      }} />
      <Stack.Screen name='TechnologyAngProgramming' 
       options={options} 
       />
      <Stack.Screen name='GeneralKnowledge' options={options} />
      <Stack.Screen name='Sports' options={options} />
      <Stack.Screen name='ScienceAndMathematics' options={options} />
      <Stack.Screen name='EntertainmentAndCulture' options={options} />
      <Stack.Screen name='Miscellaneous' options={options} />
      <Stack.Screen name='QuizQuestions' options={options} />
    </Stack>
  )
}

export default _layout


const options = {
  headerStyle: {
    backgroundColor: '#000',
    color: 'white',
  },
  headerTitleStyle: {
    color: 'white',
    paddingVertical:10
  },
  headerLeft: () => {
    return (
      <Pressable onPress={() => router.back()} className="p-1 bg-white mr-5 rounded-xl ">
        <Ionicons name='chevron-back' size={30} color={'#000'} />
      </Pressable>
    )
  }
}