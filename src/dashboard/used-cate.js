import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import DropDown from "./dropdown";


const dataArray = [
    { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }

];


import Swiper from 'react-native-swiper'


export default class UserCate extends Component {
    static navigationOptions = {
        // headerTitle instead of title
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
                    <View style={{ height: 180, borderRadius: 20 }}>
                        <Swiper scrollEnabled={false} style={styles.wrapper}
                            autoplay={true}
                            showsButtons={true}
                        >
                            <Image
                                style={styles.image}
                                source={require('./jeeps.jpg')}
                            />
                            <Image
                                style={styles.image}
                                source={require('./jeeps.jpg')}
                            />
                            <Image style={styles.image} source={require('./jeeps.jpg')} />

                        </Swiper>
                    </View>
                    <View style={{
                        alignItems: "center",
                        backgroundColor: "#2f2929", paddingVertical: 20
                    }}>
                        <Text style={{
                            fontSize: 30, color: "#fff",
                            backgroundColor: "#2f2929",
                            textTransform: "uppercase"
                        }}> Used <Text style={{
                            fontSize: 30,
                            textTransform: "uppercase", color: "green",
                            backgroundColor: "#2f2929"
                        }}> Categories </Text> </Text>
                    </View>
                    <DropDown data={dataArray} />
                </ScrollView>
            </View>
        )
    }
}

/* <DropDown data={dataArray} /> */

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