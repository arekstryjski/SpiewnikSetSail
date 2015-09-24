'use strict';

var React = require('react-native');
var { StyleSheet } = React;

var mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#339999',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

module.exports = mainStyle;
