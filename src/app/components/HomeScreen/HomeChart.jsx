import { useEffect, useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { useTasksDatabase } from "../../../database/useTasksDatabase";

export default HomeChart = ({dayStart,dayEnd,
                            monthStart,monthEnd, 
                            yearStart,yearEnd,
                            selectedFilter}) => {
    const [data, setData] = useState([]);
    const [goalsChartData, setGoalsChartData] = useState([])
    let goals = new Map();
    const db = useTasksDatabase();

    // saber o dia da semana baseado na data
    const getDayOfWeek = (dateString) => {
        const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
        // Ensure the dateString is in YYYY-MM-DD format for correct parsing
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    };

    const listActivities = async () => {
        try {
            let response;
            let goalsData = [];
            if (selectedFilter === 'meals') {
                response = await db.findAllMeals(dayStart,dayEnd,monthStart,monthEnd,yearStart,yearEnd);
            } else {
                response = await db.findAllWorkouts(dayStart,dayEnd,monthStart,monthEnd,yearStart,yearEnd);
            }
            const formattedResponse = response.map((item) => {
                let day = getDayOfWeek(`${item.year}-${item.month}-${item.day}`)
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
        } catch (error) {
            console.log(error);
        }
    };

    const listGoals = async () => {
        try {
            const response = await db.findGoals(selectedFilter)
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
    }, [dayStart,dayEnd,monthStart,monthEnd,yearStart,yearEnd, selectedFilter]);

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
