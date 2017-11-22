'use strict';

import {StackNavigator} from 'react-navigation';
import LoginScreens from './oeasy-login/javascript/LoginScreens';

const Navigator = StackNavigator(LoginScreens,{
    navigationOptions: {
        // titleStyle: {
        //     alignSelf: 'center'
        // },
    },

});

module.exports = Navigator;