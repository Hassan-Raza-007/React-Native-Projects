import { StyleSheet, Text, View } from "react-native"


const Styled_Components = () => {
    return <View style={styles.container}>
        <View style={styles.top}>
            <Text>  Styled Component 01</Text>
        </View>
        <View style={styles.middle}>
            <Text>  Styled Component 02</Text>
        </View>
        <View style={styles.bottom}>
            <Text>  Styled Component 03</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding:20,
        margin:10
    },
    top:{
        flex:0.3,
        backgroundColor:'grey',
        borderWidth:5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
    },
    middle:{
        flex:0.3,
        backgroundColor:'beige',
        borderWidth:5
    },
    bottom:{
        flex:0.3,
        backgroundColor:'pink',
        borderWidth:5,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    }
})

export default Styled_Components