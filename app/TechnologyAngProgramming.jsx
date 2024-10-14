import { View} from 'react-native'
import React from 'react'
import QuizTopic from '../components/QuizTopic'


const JavaScriptFundamentals = [
  {
    id:1,
    question : "Which of the following is a correct way to declare a JavaScript variable?",
    options : ["var myVariable;", "let myVariable;", "const myVariable;", "All of the above"],
    answer : "All of the above",
  },
  {
    id:2,
    question : "How do you write a comment in JavaScript?",
    options : ["# This is a comment", "<!-- This is a comment -->", "// This is a comment", "/* This is a comment */"],
    answer : "// This is a comment",
  },
  {
    id:3,
    question : "What will console.log(typeof []) output in JavaScript?",
    options : [`"array"`, `"object"`, `"null"`, `"undefined"`],
    answer : `"object"`,
  },
  {
    id:4,
    question : "What is the result of the following expression: 5 + '5' in JavaScript?",
    options : [`10`, `"55"`, `NaN`, `SyntaxError`],
    answer : `"55"`,
  },
  {
    id : 5,
    question : ` Which method is used to convert a JSON string into a JavaScript object?`,
    options : ["JSON.stringify()", "JSON.parse()", "Object.create()", "eval()"],
    answer : `JSON.parse()`
  },
  {
    id : 6,
    question : `What is the purpose of the isNaN() function in JavaScript?`,
    options : ["To check if a value is a string", "To check if a value is undefined", "To check if a value is an integer", ` To check if a value is "Not-a-Number"`],
    answer : ` To check if a value is "Not-a-Number"`
  },
  {
    id : 7,
    question : ` Which of the following is a JavaScript framework?`,
    options : ["Django", "React", "Laravel", "Ruby on Rails"],
    answer : `React`
  },
  {
    id : 8,
    question : `What does the === operator do in JavaScript?`,
    options : ["Compares values and types", "Compares values only", "Assigns a value to a variable", "Converts values to a common type before comparison"],
    answer : `Compares values and types`
  },
  {
    id : 9,
    question : ` How can you define a function in JavaScript?`,
    options : ["function myFunction() { }", "function = myFunction() { }", "def myFunction() { }", "var myFunction = new Function()"],
    answer : `function myFunction() { }`
  },
  {
    id : 10,
    question : `What is the default value of variables that are declared but not initialized?`,
    options : ["null", "undefined", "0", "false"],
    answer : `undefined`
  },
]


const QuizTopics = [
  {
    name: "JavaScript Fundamentals",
    icon: require('../assets/icons/js.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Web Development Best Practices",
    icon: require('../assets/icons/webDev.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Database Management Systems",
    icon: require('../assets/icons/dbms.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Python for Data Science",
    icon: require('../assets/icons/python.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Cybersecurity Basics",
    icon: require('../assets/icons/cyber.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Cloud Computing Concepts",
    icon: require('../assets/icons/cloud.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Mobile App Development with React Native",
    icon: require('../assets/icons/app.png'),
    topic : JavaScriptFundamentals
  },
  {
    name: "Machine Learning Algorithms",
    icon: require('../assets/icons/ml.png'),
    topic : JavaScriptFundamentals
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
