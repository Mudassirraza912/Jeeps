import React, { Component } from 'react';
import {
    View,
    Image,
    StatusBar,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';
import IntakeDropDown from "./intakeDropdown";


const dataArray = [
    { title: "Part Conditions" },
    { title: "Shop Category" },
    { title: "Company" },
    { title: "Jeeps Model" },
    { title: "Making Year" },
    { title: "Initial Vehicle Intake" }

];
const checkBox = [
    { title: "Daily Stand Up", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "New (4)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Remanufactured (3)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Used (34)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
];
const intitialIntakeInput = ['Name', 'Description', 'Short Description', 'Price', 'Regular Price', 'Sale Price', 'SKU', 'Date on Sale From', 'Date on Sale To', 'Weight']

import Swiper from 'react-native-swiper'
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')

export default class VehicleIntake extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static navigationOptions = {
        headerTitle: 'FAQ',
        title: 'FAQ'
    };
    render() {
        return (
            <View style={{
                backgroundColor: "#5d5b5b", height: "100%",
                flexDirection: "row", alignItems: "center"
            }}>
                <ScrollView style={{ width: "90%", backgroundColor: "#2f2929", borderRadius: 20, height: "90%", alignSelf: "center", marginHorizontal: 10 }}>
                    <View style={{
                        alignItems: "center",
                        backgroundColor: "#2f2929", paddingVertical: 20
                    }}>
                        <Text style={{
                            fontSize: 30, color: "#fff",
                            backgroundColor: "#2f2929",
                        }}> Initial Vehicle Intake </Text>
                    </View>
                    <IntakeDropDown changeFunc={this.onChangeinputText} checkValue={checkBox} initialIntakeData={this.state.intakeData} data={dataArray} />
                </ScrollView>
            </View>
        )
    }
}

{/* <DropDown data={dataArray} /> */ }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 5
    },
    wrapper: {
        height: 220,
        borderRadius: 20
    },
})