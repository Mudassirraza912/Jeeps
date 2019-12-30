import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Accordion, Icon } from "native-base";
import CustomCheckBox from "./check-box";


const dataArray = [
  { title: "High Demand Used (705)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "New (4)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Remanufactured (3)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Used (34)", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
];
var firstWord
var restOf
export default DropDown = (props) => {
  function getFirstWord(str) {
    let spacePosition = str.indexOf(' ');
    if (spacePosition === -1)
      return str;
    else {
      console.log(str, str.substr(0, spacePosition), str.substr(spacePosition), 'str')
      firstWord = str.substr(0, spacePosition)
      restOf = str.substr(spacePosition)
    }
  };
  const _renderHeader = (item, expanded) => {
    getFirstWord(item.title)
    return (
      <View
        style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#2f2929" }}
      >
        <Text style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: 18, paddingVertical: 10, color: "green" }}>
          {" "}{firstWord} 
          <Text style={{ fontWeight: "bold", textTransform: "uppercase", fontSize: 18, color: "#fff" }}>
            {restOf}
          </Text>
        </Text>

        {expanded
          ? <Icon style={{ fontSize: 18 }} color="#fff" name="arrow-up" type="Feather" />
          : <Icon style={{ fontSize: 18 }} name="arrow-down" color="#fff" type="Feather" />}
      </View>
    );
  }
  const _renderContent = (item) => {
    console.log(props, 'iop')
    return (
      <CustomCheckBox data={dataArray} />
    );
  }
  return (
    <View padder style={{ backgroundColor: "#2f2929" }}>
      <Accordion
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