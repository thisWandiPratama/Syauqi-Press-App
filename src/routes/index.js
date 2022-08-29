import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Splashscreen from '../containers/splashscreen'
import Slide1 from '../containers/slide1'
import Slide2 from '../containers/slide2'
import Login from '../containers/login'
import Register from "../containers/register"
import Home from "../containers/home"
import Product1 from "../containers/product1"
import Product2 from "../containers/product2"
import Product3 from "../containers/product3"
import Product4 from "../containers/product4"
import Product5 from "../containers/product5"
import Product6 from "../containers/product6"
import Product7 from "../containers/product7"
import Checkout from "../containers/checkout"
import Payment from '../containers/payment'
import Orderan from '../containers/orderan';

function StackFunction() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Splashscreen" component={Splashscreen} />
                <Stack.Screen name="Slide1" component={Slide1} />
                <Stack.Screen name="Slide2" component={Slide2} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product1" component={Product1} />
                <Stack.Screen name="Product2" component={Product2} />
                <Stack.Screen name="Product3" component={Product3} />
                <Stack.Screen name="Product4" component={Product4} />
                <Stack.Screen name="Product5" component={Product5} />
                <Stack.Screen name="Product6" component={Product6} />
                <Stack.Screen name="Product7" component={Product7} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Orderan" component={Orderan} />
            </Stack.Navigator>
    );
}

export default StackFunction;