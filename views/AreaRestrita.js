import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { css } from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Cadastro, Home } from './Index';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AreaRestrita({ navigation }) {

    const Tab = createMaterialBottomTabNavigator();

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
                {
                    text: "Não",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {
                        navigation.navigate('Home');
                        BackHandler.exitApp();
                    }
                }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <Tab.Navigator
            activeColor='#999'
            inactiveColor='#fff'
            barStyle={css.area_tab}
        >
            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    tabBarIcon: () => (
                        <Icon name="archive" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Icon name="home" size={20} color="#999" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}