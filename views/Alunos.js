import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { css } from '../assets/css/Css';

export default function Alunos() {
    const [alunos, setAlunos] = useState(null);

    useEffect(() => {
        async function getAlunos() {
            let response = await fetch('http://192.168.0.166:3000/select', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let json = await response.json();
            setAlunos(json);
        }
        getAlunos();
    }, []);

    
    return (

        <SafeAreaView style={css.list}>
            <FlatList
                data={alunos}
                keyExtractor = { (item, index) => index.toString() }
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
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>

    );
}