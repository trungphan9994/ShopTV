import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, Alert } from 'react-native';
import Du_lieu from '../data/Du_lieu';
import { format_number } from '../Xu_ly/Dung_chung';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ma_so: '',
            Ten: '',
            Hinh: 'http://10.0.2.2:8081/images/Hinh.png',
            Don_gia: 0,
            So_luong: 1,
        }
    }
    ﻿Xoa_San_pham() {
        Alert.alert('Bạn xóa Tivi: ' + this.state.Ma_so);
        let Vi_tri= Du_lieu.Gio_hang.findIndex((item)=>{return item.Ma_so==this.state.Ma_so});
        Du_lieu.Gio_hang.splice(Vi_tri,1);
        this.props.handleForDelete(Du_lieu.Gio_hang);
    }

    Them_So_luong() {
        if (Number(this.state.So_luong) < 10) {
            this.setState({ So_luong: Number(this.state.So_luong) + 1 });
        }
    }
    Giam_So_luong() {
        if (Number(this.state.So_luong) > 1) {
            this.setState({ So_luong: Number(this.state.So_luong) - 1 });
        }
    }
    handleForDelete(Gio_hang) {
        this.setState({Danh_sach_Tivi: Gio_hang})
    }
    componentDidMount() {
        this.setState({
            Ma_so: this.props.item.Ma_so,
            Ten: this.props.item.Ten,
            Hinh: this.props.item.Hinh,
            Don_gia: this.props.item.Don_gia,
            So_luong: this.props.item.So_luong
        })
    }
    render() {
        return (
            <View style={styles.productItem}>
                <Image style={styles.productImage} source={{ uri: this.state.Hinh }}></Image>
                <View style={styles.containerInfo}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={styles.txtName}>{this.state.Ten}</Text>
                        <TouchableOpacity onPress={() => this.Xoa_San_pham()}>
                            <Text style={{ fontFamily: 'Avenir', color: '#969696', width: 10 }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.txtPrice}>
                            Đơn giá: {format_number(this.state.Don_gia.toString()) + ' VNĐ'}
                        </Text>
                    </View>
                    <View style={styles.productController}>
                        <View style={styles.number}>
                            <TouchableOpacity onPress={() => this.Them_So_luong()}>
                                <Text style={{ width: 30, textAlign: "center" }}>+</Text>
                            </TouchableOpacity>
                            <Text style={{ width: 30, textAlign: "center" }}>{this.state.So_luong}</Text>
                            <TouchableOpacity onPress={() => this.Giam_So_luong()}>
                                <Text style={{ width: 30, textAlign: "center" }}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default class Gio_hang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Danh_sach_Tivi: Du_lieu.Gio_hang
        };
    }

    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TouchableOpacity>
                        <Image style={styles.inputIcon} source={require('../images/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Giỏ hàng</Text>
                </View>
                <FlatList
                    contentContainerStyle={styles.containerList}
                    data={this.state.Danh_sach_Tivi}
                    keyExtractor={(item) => item.Ma_so}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} handleForDelete = {this.handleForDelete.bind(this)}></FlatListItem>
                        );
                    }}>
                </FlatList>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 34) / 55;
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#DFDFDF'
    },
    inputContainer: {
        borderColor: '#b9b7b7', backgroundColor: '#4387fd', borderBottomWidth: 1,
        height: 50, flexDirection: 'row', alignItems: 'center',
    },
    text: {
        marginRight: 5, borderBottomColor: '#FFFFFF', flex: 1,
        color: '#ffffff', fontSize: 18, textAlign: 'center', justifyContent: 'center'
    },
    inputIcon: {
        width: 26, height: 26, tintColor: '#ffffff',
        marginLeft: 5, justifyContent: 'center'
    },
    containerList: {
        width, backgroundColor: '#DFDFDF'
    },
    productItem: {
        flexDirection: 'row', margin: 10, padding: 10,
        backgroundColor: '#FFFFFF', borderRadius: 2, shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth, height: imageHeight,
        marginTop: 5, resizeMode: 'center'
    },
    containerInfo: {
        flex: 1, justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    number: {
        flex: 1, flexDirection: 'row'
    },
    txtName: {
        flex: 1, paddingLeft: 10, paddingRight: 10, color: '#A7A7A7',
        fontSize: 18, fontWeight: '400', fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 10, paddingRight: 10, color: '#C21C70',
        fontSize: 16, fontWeight: '400', fontFamily: 'Avenir'
    }
});