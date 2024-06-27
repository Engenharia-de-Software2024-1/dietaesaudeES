import { useEffect, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { useTasksDatabase } from "../../database/useTasksDatabase";


export default HomeChart = (props) => {

    const dados = [{label:'6/26/2024', value: 31,}, {value: 30}, {value: 26}, {value: 40}];
    const [data, setData] = useState([]);
    const db = useTasksDatabase();
    
    
    async function list(){
        try{
            const response = await db.findAllTasks(props.selectedFilter, props.taskMonth,props.taskDay)
            console.log(response)
            setData(response)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        list()
    },[props.selectedFilter,props.taskMonth,props.taskDay])
    

    return <LineChart data={data} width={250} />;

};