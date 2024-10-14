import { View } from 'react-native'
import React from 'react'
import QuizTopic from '../components/QuizTopic'

const QuizTopics = [
  {
    name: "Physics: Laws and Theories",
    icon: require('../assets/icons/mathandsc/atom.png')
  },
  {
    name: "Chemistry: Elements and Compounds",
    icon: require('../assets/icons/mathandsc/chemistry.png')
  },
  {
    name: "Biology: Human Anatomy",
    icon: require('../assets/icons/mathandsc/anatomy.png')
  },
  {
    name: "Mathematics: Calculus Challenges",
    icon: require('../assets/icons/mathandsc/math.png')
  },
  {
    name: "Astronomy: The Solar System",
    icon: require('../assets/icons/mathandsc/astro.png')
  },
  {
    name: "Genetics and Evolution",
    icon: require('../assets/icons/mathandsc/dna.png')
  },
  {
    name: "Quantum Mechanics Basics",
    icon: require('../assets/icons/mathandsc/quantum.png')
  },


]

const Topics = () => {
  return (
    <View className="flex-1 bg-black/[0.1]">
      <QuizTopic QuizTopics={QuizTopics} />
    </View>
  )
}

export default Topics
