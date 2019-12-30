/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux'
import { getProducts } from '../redux/actions/userAction'
import VehicleIntake from './vehicle_intake'
import UserCate from './used-cate'


class ProductDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        this.props.getProducts()
    }


    render() {


        const { data, loader } = this.state
        return (
            <View style={{ flex: 1, height: "100%", width: "100%", backgroundColor: '#484648' }}>
                <UserCate />
            </View>
        );
    }

};





const mapStateToProps = state => {
    return {
        products: state.user.products,
        fetching: state.user.fetching,
    };
};

const mapDispatchToProps = {
    getProducts
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);