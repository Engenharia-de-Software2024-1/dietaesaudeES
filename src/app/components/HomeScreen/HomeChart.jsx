import { useEffect, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { useTasksDatabase } from "../../../database/useTasksDatabase";

export default HomeChart = (props) => {
    const [data, setData] = useState([]);
    const [goalsChartData, setGoalsChartData] = useState([])
    let goals = new Map();
    const db = useTasksDatabase();

    // saber o dia da semana baseado na data
    const getDayOfWeek = (dateString) => {
        console.log(dateString);
        const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
        // Ensure the dateString is in YYYY-MM-DD format for correct parsing
        const date = new Date(dateString);
        console.log(date)
        const dayIndex = date.getDay();
        console.log(dayIndex)
        return daysOfWeek[dayIndex];
    };

    const listActivities = async () => {
        try {
            let response;
            let goalsData = [];
            if (props.selectedFilter === 'meals') {
                response = await db.findAllMeals(props.taskMonth, props.taskDay);
            } else {
                response = await db.findAllWorkouts(props.taskMonth, props.taskDay);
            }
            const formattedResponse = response.map((item) => {
                let day = getDayOfWeek(`${item.year}-${item.month}-${item.day}`)
                console.log(day)
                if(goals.has(day)){
                    goalsData.push({value: goals.get(day)})
                }else{
                    goalsData.push({value: 0})
                }
                return{value: item.value,
                       label: `${item.day}/${item.month}`}
            });
            setGoalsChartData(goalsData)
            setData(formattedResponse);
            console.log(goalsChartData)
        } catch (error) {
            console.log(error);
        }
    };

    const listGoals = async () => {
        try {
            const response = await db.findGoals(props.selectedFilter)
            console.log(response)
            response.forEach(data => {
                goals.set(data.day,Number(data.value))
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await listGoals();
            await listActivities();
        };
        fetchData();
    }, [props.selectedFilter, props.taskMonth, props.taskDay]);

    return (
        <LineChart
            data={data}
            data2={goalsChartData}
            color1={'#ff5252'}
            dataPointsColor1="#ff5252"
            dataPointsColor2="#5252ff"
            color2={'#5252ff'}
            width={250}
            isAnimated
        />
    );
};
