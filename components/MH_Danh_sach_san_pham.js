import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList,TextInput,Alert} from 'react-native';
import styles from '../css/styles';
import style from '../css/dinh_dang_chung';
import Du_lieu from '../data/Du_lieu';
import Flatlist_Item from './Flatlist_Item';
import { format_number } from '../Xu_ly/Dung_chung';
export default class MH_Dang_nhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ma_so: "",
            Ten: "",
            Hinh: "",
            Don_gia: "",
            Gia_tri_loc:'',}

    }

    render() {
        return (
            <View style={styles.container}>
                <View  style={{flex: 1,flexDirection:'row'}}>
                    <Image style={{flex: 1,marginRight:10,marginLeft:10}} source={require('../images/back.png')}></Image>
                    <View style={{flex:7}} >
                        <TextInput  onChangeText={(Gia_tri_loc) => this.setState({ Gia_tri_loc })}
                        value={this.state.Gia_tri_loc} placeholder='Lọc sản phẩm' style={style.input} />
                    </View>
                    <TouchableOpacity style={{flex: 2}}  activeOpacity={0.5}>
                            <View style={style.button}>
                                <Text style={style.text}>Lọc</Text>
                            </View>
                    </TouchableOpacity>
                </View> 


                <View style={{flex:0.5,backgroundColor:'gray',alignContent:'center'}}>
                    <Text style={styles.text}> Danh sách Tivi</Text>
                </View>

                {/* danh sách hiển thị tại đây */}
                <View style={{flex:8.5}}>
                    <FlatList
                        data={Du_lieu.Danh_sach_Tivi}
                        keyExtractor={(item)=> item.Ma_so}
                        renderItem={({item,index}) => {
                            return(
                                <Flatlist_Item item={item} index={index}></Flatlist_Item>
                            );
                        }}>
                    </FlatList>
                </View>
            </View>
        );
    }
}




