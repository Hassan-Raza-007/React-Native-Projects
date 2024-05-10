import { useState } from "react"
import { Text, View } from "react-native"


function Card() {

    const [list, setList] = useState([
        '1',
        '2',
        '3',
        '4',
        '5'
    ])
  return <>
  <View>
    <Text>List</Text>
  </View>
  <View>
    {
        list.map((items)=>{
            return <Text>
              {items}
            </Text>
            
        })
    }
  </View>
  </>
}

export default Card