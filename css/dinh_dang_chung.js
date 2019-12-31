import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#0082cB"
    },
    header:{
        flex:2,
        backgroundColor:"#0a7e0d",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    header_text:{
        color:"#ffffff",
        fontSize:20,
    },
    content:{
        flex:8,
        backgroundColor:"#acf0ae"
    },
    title:{
        fontWeight:"bold",
        fontSize:20
    },
    price:{
        color:"#e81515",
        
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
    button: {
        height: 46,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#036fa9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detail:{
        flex: 1, backgroundColor: "#ffff", marginTop: 2, flexDirection: "column", justifyContent: "center", alignItems: "center"
    }
})

module.exports =styles