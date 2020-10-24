import React from 'react';
import { View, Button, TouchableOpacity, Image } from 'react-native';

import { css } from '../assets/css/Css'

export default function Home(props) {
    return (
        <View style={css.containerRow}>
            <TouchableOpacity>
                <Image style={css.photo} source={require('../assets/img/logoCadastro.png')}/>
                <View style={css.button}>
                    <Button
                        title='Login'
                        color='#000'
                        onPress={() => props.navigation.navigate('Login')}
                    />
                </View>

                <View style={css.button}>
                    <Button
                        title='Alunos'
                        color='#000'
                        onPress={() => props.navigation.navigate('Alunos')}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}