import React, { useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, Platform, TouchableOpacity, Alert } from 'react-native';

import { css } from '../assets/css/Css'

export default function Cadastrado() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    return (
        <KeyboardAvoidingView behaivor={Platform.Os == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkBg]}>

            <View style={css.login_form}>
                <TextInput
                    style={css.login_input}
                    type='text'
                    placeholder='Nome do aluno'
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    style={css.login_input}
                    placeholder='Endereço'
                    type='text'
                    onChangeText={(address) => setAddress(address)}
                />
            </View>

            <TouchableOpacity>
                <View style={css.button}>
                    <Button
                        onPress={() => {
                            add();
                        }}
                        title="Adicionar"
                        color="#228B22"
                    />
                </View>
            

            <View style={css.button}>
                <Button
                    onPress={() => {
                        remove();
                    }}
                    title="Remover"
                    color="#B22222"
                />
            </View>

            <View style={css.button}>
                <Button
                    onPress={() => {
                        update();
                    }}
                    title="Alterar"
                    color="#00004d"
                />
            </View>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )

    // Adiciona aluno
    async function add() {
        let response = await fetch('http://192.168.0.166:3000/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                address: address
            })
        })

        if (response) Alert.alert('Cadastrado com sucesso!!');
    }

    // Remove aluno
    async function remove() {
        let response = await fetch('http://192.168.0.166:3000/remove', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                address: address
            })
        })

        if (response) Alert.alert('Aluno removido com sucesso!!');
    }

    // Alterar endereço
    async function update() {
        let response = await fetch('http://192.168.0.166:3000/update', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                address: address
            })
        })

        if (response != 'error') Alert.alert('Dados alterados com sucesso!!');
    }

}

