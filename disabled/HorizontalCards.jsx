import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import DynamicComponent from '../src/app/components/CalendarScreen/DynamicComponent'
import { useTasksDatabase } from '../src/database/useTasksDatabase'

const {width} = Dimensions.get('window')


const HorizontalCards = ({data}) => {

    console.log(data)
  return (
    <FlatList
    data={data}
    keyExtractor={(data, index) => index.toString()}
    horizontal
    snapToOffsets={[...Array(data.length)].map(
        (x,i) => i * (width * 0.8) + (i-1) * 40,
    )}
    showsHorizontalScrollIndicator={false}
    snapToAlignment={'start'}
    scrollEventThrottle={16}
    decelerationRate={'fast'}
    renderItem={({item} )=> <DynamicComponent data={item}/>}
    style={{marginTop: 25}}
    />
  )
  
}

export default HorizontalCards