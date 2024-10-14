import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const QuizQuestions = () => {
    const { topic } = useLocalSearchParams();
    let data = (JSON.parse(topic));

    const [qIndex, setQIndex] = useState([0]);

    const isInQIndex = (index) => {
        return qIndex.includes(index);
    }

    const [ans, setAns] = useState("");
    const [ansIndex, setAnsIndex] = useState(null);
    const [isTrue, setTrue] = useState(false);
    const [ansArr, setAnsArr] = useState([]);

    const setData = (index, option) => {
        setAnsIndex(index);
        setAns(option);
        setTrue(true);
    }

    useEffect(() => {
        setAnswerArray();
    }, [ans])
    const setAnswerArray = () => {
        const correct = (ans === data[qIndex.length - 1].answer);
        if(ans !== "") setAnsArr([...ansArr, correct ? 1 : 0]);
        console.log(ans);
        console.log(ansArr);
        
    }

    return (
        <View className="flex-1 items-center bg-black/[0.1] p-3 gap-y-10">
            <Image
                source={{ uri: "https://i.pinimg.com/564x/30/96/97/30969727247fd087ccfe82b72b700a80.jpg" }}
                style={StyleSheet.absoluteFillObject}
                blurRadius={10}
            />
            <View className="flex-row space-x-1 items-center w-full justify-center px-1">
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} className={`h-2 flex-1 ${isInQIndex(index) ? "bg-white/[1]" : "bg-white/[0.1]"} rounded-sm`}></View>
                        )
                    })
                }
            </View>

            <View className="bg-black p-5 space-y-5 rounded-xl w-full border-[1.5px] border-white/[0.1] overflow-hidden">
                <Text style={{ fontFamily: 'My-Font-medium' }} className="text-white text-xl">{data[qIndex.length - 1].id}. {data[qIndex.length - 1].question}</Text>
                <View className="space-y-3">
                    {
                        data[qIndex.length - 1].options.map((option, index) => {
                            return !isTrue ? (
                                <Pressable style={{}} onPress={() => {
                                    setData(index, option)
                                }} key={index} className="p-4 rounded-xl border-[1.5px] border-white/[0.7] flex-row items-start space-x-1">
                                    <Text style={{ fontFamily: 'My-Font-medium', fontSize: 16 }} className="text-white/[0.7] " >{index + 1}.</Text>
                                    <Text style={{ fontFamily: 'My-Font-medium', fontSize: 16 }} className="text-white/[0.7]">{option}</Text>
                                </Pressable>
                            ) : (
                                <Pressable key={index} className={`p-4 rounded-xl border-[1.5px] ${ans === data[qIndex.length - 1].answer ? index === ansIndex ? "border-green-500" : "border-white/[0.3]" : index === ansIndex ? "border-red-500" : "border-white/[0.3]"}  flex-row items-center space-x-1`}>
                                    <Text style={{ fontFamily: 'My-Font-medium', fontSize: 16 }} className={`${ans === data[qIndex.length - 1].answer ? index === ansIndex ? "text-green-500" : "text-white/[0.3]" : index === ansIndex ? "text-red-500" : "text-white/[0.3]"}`} >{index + 1}.</Text>
                                    <Text style={{ fontFamily: 'My-Font-medium', fontSize: 16 }} className={`${ans === data[qIndex.length - 1].answer ? index === ansIndex ? "text-green-500" : "text-white/[0.3]" : index === ansIndex ? "text-red-500" : "text-white/[0.3]"}`}>{option}</Text>
                                    <View className="absolute right-4">
                                        {
                                            ans === data[qIndex.length - 1].answer ? index === ansIndex ? <Ionicons name='checkmark' color={'#22c55e'} size={20} /> : "" : index === ansIndex ? <Ionicons name='close-circle' color={'#ef4444'} size={20} /> : ""
                                        }
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </View>

            <View className="w-full p-2">
                {
                    data.length > qIndex.length ?
                        <Pressable onPress={() => { setQIndex([...qIndex, qIndex.length]); setTrue(false) }} style={{ width: "100%" }} className="bg-white p-4 rounded-xl border-[1.5px] border-black/[0.7]">
                            <Text style={{ fontFamily: 'My-Font-medium' }} className="text-center">{"NEXT"}</Text>
                        </Pressable>
                        :
                        <Pressable onPress={() => router.push({pathname : '/Result', params : {resultArray : JSON.stringify(ansArr)}})} className="bg-white p-4 rounded-xl border-[1.5px] border-black/[0.7]">
                            <Text style={{ fontFamily: 'My-Font-medium' }} className="text-center">{"FINISH"}</Text>
                        </Pressable>
                }

            </View>
        </View>
    )
}

export default QuizQuestions