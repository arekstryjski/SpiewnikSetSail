'use strict';


var React = require('react-native');
var {       
    Text,
    View,
    DrawerLayoutAndroid,
    TextInput
    } = React;

var style = require('./../styles/main-style.js');

var spiewnik = React.createClass({
    render: function () {
        var navigationView = (
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left', backgroundColor: '#CCCCCC'}}>I'm in the Drawer!</Text>
        );
        return (
                <DrawerLayoutAndroid
                        drawerWidth={100}
                        drawerPosition={DrawerLayoutAndroid.positions.Left}
                        renderNavigationView={() => navigationView}>
                    <View style={style.container}>
                        <Text style={style.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={style.instructions}>
                            Shake or press menu button for dev menu
                        </Text>
                        <TextInput
                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                keyboardType="numeric"
                                value=""
                                placeholder="123"
                                />
                    </View>
                </DrawerLayoutAndroid>);
        
        
        
        //return (
        //        <View style={style.container}>
        //            <Text style={style.welcome}>
        //                Welcome to React Native!
        //            </Text>
        //            <Text style={style.instructions}>
        //                To get started, edit index.android.js
        //            </Text>
        //            <Text style={style.instructions}>
        //                Shake or press menu button for dev menu
        //            </Text>
        //            <Text style={style.instructions}>
        //                sam sie potrząśnij
        //            </Text>
        //        </View>
        //);
    }
});

module.exports = spiewnik;