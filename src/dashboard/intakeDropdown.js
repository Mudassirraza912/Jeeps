import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Accordion, Icon } from "native-base";
import CustomCheckBox from "./check-box";
import IntakeForm from "./intakeForm";

export default IntakeDropDown = (props) => {
    const _renderHeader = (item, expanded) => {
        return (
            <View
                style={{
                    flexDirection: "row", padding: 10,
                    justifyContent: "space-between", alignItems: "center", marginVertical: 5,
                    backgroundColor: "#000", borderColor: 'green', borderWidth: 2, borderTopLeftRadius: 6, borderTopRightRadius: 6, marginHorizontal: 8
                }}
            >
                <Text style={{ fontSize: 16, color: "grey" }}>
                    {" "}{item.title}
                </Text>

                {expanded
                    ? <Icon style={{ fontSize: 18 }} color="#fff" name="arrow-up" type="Feather" />
                    : <Icon style={{ fontSize: 18 }} name="arrow-down" color="#fff" type="Feather" />}
            </View>
        );
    }
    const _renderContent = (item) => {
        // console.log("Title props: ",item.title)
        return (
            item.title == 'Initial Vehicle Intake'
            ?
            <View>
            <IntakeForm />
            </View>
            :
            <CustomCheckBox data={props.checkValue} />
        );
    }
    return (
        <View style>
            <Accordion
                style={{ borderColor: null }}
                // contentStyle={{backgroundColor: 'black'}}
                dataArray={props.data}
                animation={true}
                // expanded={handleValue}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
            />
        </View>
    );

}