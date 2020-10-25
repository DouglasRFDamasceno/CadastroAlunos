import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Avatar, Alert } from 'react-native';
import { css } from '../assets/css/Css';
import * as FileSystem from 'expo-file-system'
import api from '../services/api'

export default function Alunos() {
    const [alunos, setAlunos] = useState(null);

    useEffect(() => {

        async function getAlunos() {
            await api.
                get('select').then(response => {
                    if (response) {
                        setAlunos(response.data);
                    }
                }).catch((error) => {
                    console.log(error);
                });
        }

        getAlunos();
    }, []);

    return (

        <SafeAreaView style={css.list}>
            <FlatList
                data={alunos}
                keyExtractor={(aluno, index) => index.toString()}
                renderItem={aluno => {
                    return (
                        <View style={css.border_list}>
                            <View style={css.list}>
                                <Text style={css.text_list}>Nome: </Text>
                                <Text>
                                    {aluno.item.name}
                                </Text>
                                <Text style={css.text_list}> Endereco: </Text>
                                <Text>
                                    {aluno.item.address}
                                </Text>
                                {/* <Avatar source={{ uri: aluno.item.image }}/> */}
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>

    );
}