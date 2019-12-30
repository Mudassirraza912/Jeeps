import React, { Component } from 'react';
import { View, FlatList, ShadowPropTypesIOS } from "react-native";
import DropDown from "./intakeDropdown";
import { ListItem, CheckBox, Text, Body, Form, Item, Label, Input } from 'native-base';




export default CustomInput = (prop) => {
    console.log("CustomInputProps: ", prop)
    return (
        <Item placeholderLabel>
            <Label style={{color:'lightgrey'}}>{prop.label}</Label>
                <Input style={{color:'white'}}  onChangeText={prop.changeFunc} value={prop.value} />
            </Item>
    )
}
/* <DropDown /> */ 
