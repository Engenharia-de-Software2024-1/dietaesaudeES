import React from 'react'
import { View, StyleSheet } from 'react-native'
import Dropdown from './Dropdown'
import { dayOptions, monthOptions, yearOptions } from '../../utils/filtersData'

function ChartFilters({dayValue,monthValue,yearValue,setDay,setMonth,setYear}) {
    
  return (
    <View style={styles.dropdownContainer}>
        <Dropdown placeholder='Dia' data={dayOptions} value={dayValue} setValue={setDay}/>
        <Dropdown placeholder='Mês' data={monthOptions} value={monthValue} setValue={setMonth}/>
        <Dropdown placeholder='Ano' data={yearOptions} value={yearValue} setValue={setYear}/>
    </View>
  )
}

export default ChartFilters

const styles = StyleSheet.create({
    dropdownContainer:{
        flexDirection: "row",
        justifyContent: "center"
    }
})