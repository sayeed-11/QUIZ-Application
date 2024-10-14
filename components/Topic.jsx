import { View, Text, ScrollView, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { router } from 'expo-router';

const Topic = ({ item, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(1000).springify().delay(100 * index).damping(50)}>
            <Pressable
                onPress={() => router.push({ pathname: '/QuizQuestions', params: { topic: JSON.stringify(item.topic) } })}
                style={{ elevation: 5, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: 5, backgroundColor: '#000' }}
                className="bg-black my-3 p-5 rounded-md flex-row items-center justify-end border-[1.5px] border-white/[0.1]">
                <Image className="w-20 h-20 object-cover absolute left-1 -top-5" source={item.icon} />
                <Text style={{ fontFamily: 'My-Font-medium', fontSize: 15 }} className="text-white">{item.name}</Text>
                <Ionicons name='chevron-forward' size={24} color={'white'} />
            </Pressable>
        </Animated.View>
    )
}

export default Topic