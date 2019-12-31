import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import style from '../css/dinh_dang_chung';
import { format_number } from '../Xu_ly/Dung_chung';
import Button  from 'react-native-button';

class Flatlist_Item extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#e5f6ff" }}>
                <TouchableOpacity style={{ flex: 8, flexDirection: "row", backgroundColor: "#e5f6ff" }} activeOpacity={0.5}>
                    <Image style={{ height: 80, width: 120, margin: 5 }} source={{ uri: this.props.item.Hinh }}></Image>
                    <View style={{ flex: 1, flexDirection: "column", height: 30 }}>

                        <Text style={style.itemText}>{this.props.item.Ten}</Text>

                        <Text style={style.itemText}>Đơn giá: {format_number(this.props.item.Don_gia.toString()) + ' VNĐ'}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 2, flexDirection: 'column', alignItems: 'space-around', alignContent: 'center' }}>

                    <Button style={{ fontSize: 17, backgroundColor: "#5CB3FF", color: "white", margin: 5 }}>Đặt hàng</Button>


                    <Button style={{ fontSize: 17, backgroundColor: "#5CB3FF", color: "white", margin: 5 }}>Chi tiết</Button>

                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({

    text: {
        color: '#111825',
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        fontSize: 18
    }
});
export default Flatlist_Item;