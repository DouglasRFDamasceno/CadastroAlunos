import React, { useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, Platform, TouchableOpacity, Alert } from 'react-native';
import { Text, Image } from "react-native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import api from "../services/Api"

import { css } from '../assets/css/Css'

export default function Cadastrado() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const [avatar, setAvatar] = useState(null);

    async function imagePickerCall() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== "granted") {
                Alert.alert("Permissão necessária!");
                return;
            }
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (data.cancelled) {
            return;
        }

        if (!data.uri) {
            return;
        }

        setAvatar(data);
    }

    return (
        <KeyboardAvoidingView behaivor={Platform.Os == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkBg]}>

            <View style={css.login_form}>
                <TextInput
                    style={css.input}
                    type='text'
                    value={name}
                    placeholder='Nome do aluno'
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    style={css.input}
                    placeholder='Endereço'
                    type='text'
                    value={address}
                    onChangeText={(address) => setAddress(address)}
                />
            </View>

            <View style={css.container_image}>
                <Image
                    source={{
                        uri: avatar
                            ? avatar.uri
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtHWZH6i6_DO949Wn4fMNWzTo6qIVFEf4haw&usqp=CAU"
                    }}
                    style={css.avatar}
                />
                <TouchableOpacity style={css.button_image} onPress={imagePickerCall}>
                    <Text style={css.buttonText_image}>Escolher imagem</Text>
                </TouchableOpacity>
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
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )

    // Adiciona aluno
    async function add() {

        const data = new FormData();

        if (!name || !address || !avatar) {
            Alert.alert('Por favor, complete todos os campos!');
            return;
        }

        data.append("avatar", {
            uri: avatar.uri
        });

        let response = await api.
            post('add', {
                name: name,
                address: address,
                image: avatar.uri,
            })

        if (response.data === null) {
            Alert.alert('Erro ao cadastrar');
            return;
        }

        Alert.alert(`Cadastrado o aluno ${name} com sucesso!!`);
        setName('');
        setAddress('');
        setAvatar(null);
    }
}
