import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';

import { css } from '../assets/css/Css';
import api from '../services/Api'

export default function Alunos() {
    const [alunos, setAlunos] = useState(null);

    useEffect(() => {

        async function getAlunos() {
            await api.
                get('read').then(response => {
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


        <FlatList
            data={alunos}
            keyExtractor={(aluno, index) => index.toString()}
            renderItem={aluno => {
                return (
                    <SafeAreaView style={css.list}>
                        <View style={css.border_list}>
                            <View style={css.list}>
                                <Text style={css.text_list}>Identificação: </Text>
                                <Text>
                                    {aluno.item.id}
                                </Text>
                            </View>

                            <View style={css.list}>
                                <Text style={css.text_list}>Nome: </Text>
                                <Text>
                                    {aluno.item.name}
                                </Text>
                            </View>

                            <View style={css.list}>
                                <Text style={css.text_list}> Endereco: </Text>
                                <Text>
                                    {aluno.item.address}
                                </Text>
                            </View>
                        </View>
                    </SafeAreaView>
                )
            }}
        />
    );
}