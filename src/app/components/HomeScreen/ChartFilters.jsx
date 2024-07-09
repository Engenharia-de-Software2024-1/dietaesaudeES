import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Dropdown from './Dropdown'
import { dayOptions, monthOptions, yearOptions } from '../../utils/filtersData'

function ChartFilters({dayStart,dayEnd,setDayStart,setDayEnd,
                       monthStart,monthEnd, setMonthStart,setMonthEnd, 
                       yearStart,yearEnd ,setYearStart,setYearEnd}) {
    
  return (
    <View style={styles.dropdownContainer}>
      <View style={styles.rangeContainer}>
        <Text>Dia</Text>
        <Dropdown placeholder='Inicio' data={dayOptions} value={dayStart} setValue={setDayStart}/>
        <Dropdown placeholder='Fim' data={dayOptions} value={dayEnd} setValue={setDayEnd}/>
      </View>
      <View style={styles.rangeContainer}>
        <Text>Mês</Text>
        <Dropdown placeholder='Inicio' data={monthOptions} value={monthStart} setValue={setMonthStart}/>
        <Dropdown placeholder='Fim' data={monthOptions} value={monthEnd} setValue={setMonthEnd}/>
      </View>
      <View style={styles.rangeContainer}>
        <Text>Ano</Text>
        <Dropdown placeholder='Inicio' data={yearOptions} value={yearStart} setValue={setYearStart}/>
        <Dropdown placeholder='Fim' data={yearOptions} value={yearEnd} setValue={setYearEnd}/>
      </View>
    </View>
  )
}

export default ChartFilters

const styles = StyleSheet.create({
    dropdownContainer:{
        flexDirection: "row",
        justifyContent: "center"
    },
    rangeContainer:{
      alignItems: "center"
    }
})