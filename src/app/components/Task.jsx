import { Pressable, Text, View } from 'react-native'

export function Task(props){
  return(
    <Pressable>
      <Text>
        {props.task_type}
      </Text>
    </Pressable>
  )
}

export default Task