import React, { useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, Platform, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { css } from '../assets/css/Css';

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
                    style={css.login_input}
                    type='text'
                    placeholder='Login'
                    onChangeText={(login) => setLogin(login)}
                />
                <TextInput
                    style={css.login_input}
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

    async function sendForm() {
        let response = await fetch('http://192.168.0.166:3000/authenticate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        })

        let json = await response.json();
        
        if (json === 'error') {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000)
            await AsyncStorage.clear();
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaRestrita');
        }
    }
}