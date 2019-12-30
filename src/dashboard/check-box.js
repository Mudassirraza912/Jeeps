import React, { Component } from 'react';
import { View, FlatList } from "react-native";
import { ListItem, CheckBox, Text, Body } from 'native-base';




export default CustomCheckBox = (prop) => {
    // console.log(prop, 'popo')
    return (
        <View>
            {
                prop.data.map((item, i) => {
                    return (
                        <ListItem>
                            <CheckBox color="green" checked={i == 0 ? true : false} />
                            <Body>
                                <Text>{item.title}</Text>
                            </Body>
                        </ListItem>
                    )
                })
            }
        </View>
    )
}