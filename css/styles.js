import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        justifyContent: 'center',
        flex:2,
        alignItems: 'center',
        backgroundColor: 'green',
        fontSize:25

    },
    content: {
        flex:7,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'white',
    },
    button: {
        flex:1,
        backgroundColor:'blue',
        borderRadius:10,
        margin: 5,
        justifyContent: 'center',
    },
    text: {
        fontSize:25,
        color:'white',
        textAlign:'center',
        
    },
    contentproducts: {
        fontSize:25,
        color:'black',
        textAlign:'center',
    },
    price: {
        fontSize:20,
        color:'red',
        textAlign:'center',
    }
})
module.exports = styles;