import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';
// import Carousel from 'react-native-snap-carousel';
// import Carousel from 'react-native-reanimated-carousel';


const Categories = [
  {
    id: 1,
    url: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    title: "Technology & Programming",
    routeName: "TechnologyAngProgramming"
  },
  {
    id: 2,
    url: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/12/23173546/Basic-General-Knowledge-for-Competitive-Exams-.jpg",
    title: "General Knowledge",
    routeName: "GeneralKnowledge"
  },
  {
    id: 3,
    url: "https://www.quantamagazine.org/wp-content/uploads/2016/10/Education_HineMizushima_1920.jpg",
    title: "Science & Mathematics",
    routeName: "ScienceAndMathematics"
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/1201098679/vector/art-culture-form.jpg?s=612x612&w=0&k=20&c=L2AWVBTS9FQ3agzzBSbD5u-QDfAjt29NdBDURB7Sh-A=",
    title: "Entertainment & Culture",
    routeName: "EntertainmentAndCulture"
  },
  {
    id: 5,
    url: "https://cdn.firstcry.com/education/2022/11/25154201/Learn-Sport-Names-List-of-Sports-in-English.jpg",
    title: "Sports",
    routeName: "Sports",
  },
  {
    id: 6,
    url: "https://as2.ftcdn.net/v2/jpg/01/19/85/55/1000_F_119855560_k7NLHO3huXykncDyhGuvjuJzTKF3Y9x9.jpg",
    title: "Miscellaneous",
    routeName: "Miscellaneous",
  },
]

const index = () => {
  const [fontsLoaded] = useFonts({
    'Custom-Font': require('../assets/fonts/ChakraPetch-Regular.ttf'),
    'My-Font-medium': require('../assets/fonts/Font/BarlowCondensed-Medium.ttf'),
    'My-Font-medium-italic': require('../assets/fonts/Font/BarlowCondensed-MediumItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View className="space-y-0 bg-black/[0.2] flex-1">
      <Image
        source={{ uri: "https://i.pinimg.com/564x/30/96/97/30969727247fd087ccfe82b72b700a80.jpg" }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />
      <SafeAreaView style={{
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 5
      }} className="px-3 flex-row justify-between items-center bg-black py-5 border-b-[1.5px] border-r-[1.5px] border-l-[1.5px] border-white/[0.1]">
        <View >
          <Text style={{ fontFamily: 'My-Font-medium' }} className="text-3xl text-white">HI, USER</Text>
          <Text style={{ fontFamily: 'My-Font-medium' }} className="text-xl text-white">Let's make you day awesome!</Text>
        </View>
        <View className="border-2 border-dashed border-white rounded-full p-2">
          <Ionicons name='person' color={'#FFF'} size={24} />
        </View>
      </SafeAreaView>

      <RankAndScore />


      <View className="w-full space-y-0 pt-2 flex-1">
        <Text style={{ fontFamily: 'My-Font-medium', fontSize: 20 }} className='rounded-xl ml-5  text-white pb-4'>Quiz Category</Text>
        <FlatList
          className="flex-1 pt-1"
          contentContainerStyle={{
            justifyContent: 'center',
            paddingBottom: 40
          }}
          columnWrapperStyle={{

            justifyContent: 'center', // Use justifyContent for spacing between columns
            marginBottom: 15, // Adjust bottom margin for spacing
            gap: 15
          }}
          bounces={false}
          numColumns={2}
          data={Categories}
          keyExtractor={(item) => item.id.toString()} // Ensure key is a string
          renderItem={({ item }) => <CategoryCard item={item} />}
        />
      </View>

    </View>
  )
}

export default index


const CategoryCard = ({ item }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(500).springify().delay(130 * item.id)}
      style={{ elevation: 5, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 2, shadowOffset: 5 }}
      className="w-[45%] bg-black p-2 justify-between space-y-3 rounded-xl border-[1.5px] border-white/[0.1]">
      <Image blurRadius={1} className="w-full aspect-square rounded-md object-cover" source={{ uri: item.url }} />
      <Text style={{ fontFamily: 'My-Font-medium' }} className="text-white text-xs  text-center">{item.title}</Text>
      <Pressable onPress={() => router.navigate(item.routeName)} className="rounded-md overflow-hidden">
        <Text style={{ fontFamily: 'My-Font-medium' }} className="text-black bg-white py-2 text-center">Let's Start</Text>
      </Pressable>
    </Animated.View>
  )
}

const RankAndScore = () => {
  return (
    <View className="flex-row p-2 justify-between w-full rounded-2xl space-x-2 mt-1">
      <Animated.View
        entering={FadeInLeft.duration(500).springify().delay(100)}
        style={{ elevation: 5 }}
        className=" flex-row items-center bg-black p-1 rounded-xl flex-1 border-[1.5px] border-white/[0.1]">
        <Image />
        <View className="bg-white p-3 rounded-xl">
          <Ionicons name='cellular' color={'#000'} size={20} />
        </View>
        <View className="justify-center items-center px-5 rounded-md">
          <Text style={{ fontFamily: 'My-Font-medium-italic' }} className=" text-white">YOUR RANK</Text>
          <Text style={{ fontFamily: 'My-Font-medium' }} className="text-xl text-white">-- 00 --</Text>
        </View>
      </Animated.View>
      <Animated.View
        entering={FadeInRight.duration(500).springify()}
        style={{ elevation: 5 }}
        className=" flex-row items-center bg-black p-1 rounded-xl flex-1 border-[1.5px] border-white/[0.1]">
        <View className="bg-white p-3 rounded-xl">
          <Ionicons name='trophy' color={'#000'} size={20} />
        </View>
        <View className="justify-center items-center px-5 rounded-md">
          <Text style={{ fontFamily: 'My-Font-medium-italic' }} className=" text-white">YOUR POINTS</Text>
          <Text style={{ fontFamily: 'My-Font-medium' }} className="text-xl text-white">-- 00 --</Text>
        </View>
      </Animated.View>
    </View>
  )
}