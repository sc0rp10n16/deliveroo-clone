import { View, Text, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Image } from 'react-native';
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline';
import { ScrollView } from 'react-native';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "",
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-7">
            <View>
                {/* Header */}
                <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4'>
                    <Image
                    source={{uri: 'https://links.papareact.com/wru'
                        
                        }}
                        className='h-7 w-7 bg-gray-300 rounded-full'
                    />

                    <View className='flex-1'>
                        <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                        <Text className='font-bold text-xl'>Current Location
                            <ChevronDownIcon size={20} color="#00ccbb" />                        
                        </Text>
                    </View>
                    <UserIcon size={35} color='#00ccbb'/>
                </View>
                {/* Search */}
                <View className='flex-row items-center space-x-2 pb-2 mx-4 px-4'>
                    <View className="flex-row space-x-2 flex-1">
                        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                        <SearchIcon color='gray' size={20}/>
                        <TextInput 
                        placeholder='Restaurants and Cuisines'
                        keyboardType='default' 
                        />
                        </View>
                    </View>
                    <AdjustmentsIcon color='#00ccbb'/>
                </View>
                {/* Body */}
                <ScrollView>
                    {/* Categories */}

                    {/* Featured Rows */}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen