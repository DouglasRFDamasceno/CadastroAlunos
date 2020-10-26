import React, { useState, useEffect } from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, Platform, Text, Alert, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { css } from '../assets/css/Css';
import api from "../services/api"

export default function Login({ navigation }) {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [display, setDisplay] = useState('none');

    let getDisplay = function (text) {
        if (text == 'flex') {
            return text
        } else {
            return 'none'
        }
    }

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
        <KeyboardAvoidingView behaivor={Platform.Os == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkBg]}>
            <View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color: 'red',
                        marginTop: 10,
                        marginBottom: 15,
                        display: getDisplay(display)
                    }}
                > Usuário ou senha inválidos </Text>
            </View>

            <View style={css.login_form}>
                <TextInput
                    style={css.input}
                    type='text'
                    placeholder='Login'
                    onChangeText={(login) => setLogin(login)}
                />
                <TextInput
                    style={css.input}
                    type='text'
                    placeholder='Senha'
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
            </View>

            <View style={css.button}>
                <Button
                    onPress={() => {
                        sendForm();
                    }}
                    title="Autenticar"
                    color="#BF5C00"
                />
            </View>

        </KeyboardAvoidingView >
    )

    // Obtém se o usuário é cadastrado
    async function sendForm() {
        let response = await api.post('/authenticate', {
            login: login,
            password: password
        })

        if (response.data === null) {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000)
            await AsyncStorage.clear();
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(response));
            navigation.navigate('AreaRestrita');
        }
    }
}