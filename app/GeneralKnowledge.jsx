import { View} from 'react-native'
import React from 'react'
import QuizTopic from '../components/QuizTopic'

const QuizTopics = [
  {
    name: "World History Highlights",
    icon: require('../assets/icons/generalKnowledge/world-history.png')
  },
  {
    name: "Geography: Capitals and Countries",
    icon: require('../assets/icons/generalKnowledge/geography.png')
  },
  {
    name: "Modern Art Movements",
    icon: require('../assets/icons/generalKnowledge/art.png')
  },
  {
    name: "Famous Inventors and Their Inventions",
    icon: require('../assets/icons/generalKnowledge/invent.png')
  },
  {
    name: "Space Exploration Milestones",
    icon: require('../assets/icons/generalKnowledge/space.png')
  },
  {
    name: "Environmental Science Essentials",
    icon: require('../assets/icons/generalKnowledge/env-sc.png')
  },
  {
    name: "Political Leaders and Their Policies",
    icon: require('../assets/icons/generalKnowledge/politic.png')
  },


]

const Topics = () => {
  return (
    <View className="flex-1 bg-black/[0.1]">
      <QuizTopic QuizTopics={QuizTopics}/>
    </View>
  )
}

export default Topics
