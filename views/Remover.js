import React, { useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, Platform, TouchableOpacity, Alert } from 'react-native';
import { Text, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import api from "../services/Api"

import { css } from '../assets/css/Css'

export default function Remover() {

    const [id, setId] = useState(null);

    return (
        <KeyboardAvoidingView behaivor={Platform.Os == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkBg]}>

            <View style={css.login_form}>
                <TextInput
                    style={css.input}
                    type='numeric'
                    value={id}
                    placeholder='Identificação'
                    onChangeText={(id) => setId(id)}
                />
            </View>

            <TouchableOpacity>
                <View style={css.button}>
                    <Button
                        onPress={() => {
                            remove();
                        }}
                        title="Remover"
                        color="#B22222"
                    />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )

    // Remove aluno
    async function remove() {

        if (!id) {
            Alert.alert('Por favor, insira a identificação!');
            return;
        }

        let response = await api.
            post('remove', {
                id: id
            })

        if (response.data === 0) {
            Alert.alert('Erro ao remover');
            return;
        }
        Alert.alert(`Remoção com sucesso!!`);
        setId(null);
    }
}
