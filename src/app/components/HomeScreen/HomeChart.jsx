import { useEffect, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { useTasksDatabase } from "../../../database/useTasksDatabase";


export default HomeChart = (props) => {

    const [data, setData] = useState([]);
    const db = useTasksDatabase();
    
    
    async function list(){
        try{

             let response;
            if(props.selectedFilter =='meals'){
                response = await db.findAllMeals( props.taskMonth,props.taskDay)
            }else{
                response = await db.findAllWorkouts( props.taskMonth,props.taskDay)
            }
            
            const  formattedResponse = response.map( item=>({
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