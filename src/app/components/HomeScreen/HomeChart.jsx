import { useEffect, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { useTasksDatabase } from "../../../database/useTasksDatabase";


export default HomeChart = (props) => {

    const [data, setData] = useState([]);
    const db = useTasksDatabase();
    
    
    async function list(){
        try{
            const response = await db.findAllTasks(props.selectedFilter, props.taskMonth,props.taskDay)
            console.log(response)

            const formattedResponse = response.map( item=>({
                value: item.value,
                label: `${item.day}/${item.month}`
            }));
            setData(formattedResponse)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        list()
    },[props.selectedFilter,props.taskMonth,props.taskDay])
    

    return <LineChart data={data} color1={'#98c1d9'} dataPointsColor1="#3d5a80" color2={'green'} width={250} curved isAnimated />

};