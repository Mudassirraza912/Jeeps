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
  TouchableOpacity
} from 'react-native';
import { Spinner } from 'native-base';
import {connect} from 'react-redux'
import {getProducts} from '../redux/actions/userAction'
import VehicleIntake from './vehicle_intake'
// import { TouchableOpacity } from 'react-native-gesture-handler';
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [],
            loader: true
        }
    }

    componentDidMount () {
       this.props.getProducts()
    }


  render() {
         
        const { data, loader } = this.state
        return (
<View style={{flex: 1,height: "100%", width: "100%", backgroundColor: '#484648'}}>
<ScrollView contentContainerStyle={{}}>

<View >

    {!this.props.fetching ? 

            <View style={{ width: "95%", backgroundColor: '#413f40', alignItems: 'center', borderRadius: 10,alignSelf:'center', padding: 10,marginTop: 30}}>

                {this.props.products.length > 0  ? 
                
                    <View >

                        <View style={{alignItems:'center', justifyContent:'center', alignContent:'center'}} >
                            <View>

                            <View style={{flexDirection:"row",justifyContent:'center'}}>
                                <Text style={{fontWeight: "bold",fontSize:30,color:"#fff",textDecorationLine:'underline'}}>Select </Text>
                                <Text style={{fontWeight: "bold",fontSize:30,color:"#678a01",textDecorationLine:'underline'}}>Vehicles</Text>
                                </View>
                         </View>


                            {this.props.products.map((value, index) => {
                                console.log(value.images[0].src)
                                return(
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProductDetail')}} key={index} style={{marginTop: 25, borderColor:'black', borderWidth : 1, borderRadius: 10}}>
                                        
                                        <View  style={{ width: "100%", marginLeft: 0, marginRight: 0, borderRadius: 10 }}>
                                        <Image source={{uri:value.images[0].src}} style={{height:200, width:300, borderTopLeftRadius: 10, borderTopRightRadius: 10}} />
                                        </View>

                                        <Text style={{color:"#fff", paddingVertical: 15, paddingHorizontal: 10}}>
                                           <Text style={{fontWeight:"bold"}}> Name : </Text> {value.name}
                                        </Text>

                                        <Text style={{color:"#fff", paddingVertical: 15, paddingHorizontal: 10}}>
                                <Text style={{fontWeight:"bold"}}> Price : </Text> $ {value.price === "" ? <Text>0</Text> : <Text>{value.price}</Text>}
                                        </Text>

                                    </TouchableOpacity>
                                )
                            })}
                        </View>

                {/* <VehicleIntake /> */}

                    </View>
                    
                : 
                
                <View style={{flex: 1 ,alignItems:'center', justifyContent:'center'}}>
                    <Text>
                        Item Not Found
                    </Text>
                </View>
                }

            </View>

            : 
        
            <View style={{ justifyContent:'center', alignItems: 'center', marginTop: '60%' }}>
                <Spinner style={{alignSelf:"center"}} />
            </View>
    }

</View>
</ScrollView>
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
        
        
        export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);