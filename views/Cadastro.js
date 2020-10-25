import React, { useState } from 'react';
import { TextInput, View, KeyboardAvoidingView, Button, Platform, TouchableOpacity, Alert } from 'react-native';
import { Text, StyleSheet, Image } from "react-native";
import { FileSystem } from 'expo'

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import api from "../services/api"

import { css } from '../assets/css/Css'

export default function Cadastrado() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const [avatar, setAvatar] = useState();

    async function imagePickerCall() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== "granted") {
                alert("Nós precisamos dessa permissão.");
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
                        placeholder='Nome do aluno'
                        onChangeText={(name) => setName(name)}
                    />
                    <TextInput
                        style={css.input}
                        placeholder='Endereço'
                        type='text'
                        onChangeText={(address) => setAddress(address)}
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        source={{
                            uri: avatar
                                ? avatar.uri
                                : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png"
                        }}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
                        <Text style={styles.buttonText}>Escolher imagem</Text>
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
            const data = new FormData();

            data.append("avatar", {
                uri: avatar.uri
            });

            api.
                post('add', {
                    name: name,
                    address: address,
                    image: avatar.uri,
                }).then(response => {
                    Alert.alert('Cadastrado com sucesso!!');
                }).catch((error) => {
                    console.log(error);
                });
        }

        // Remove aluno
        async function remove() {
            await api.
                post('remove', {
                    name: name,
                    address: address,
                }).then(response => {
                    Alert.alert('Aluno removido com sucesso!!');
                }).catch((error) => {
                    console.log(error);
                });
        }


        // Alterar endereço
        async function update() {
            await api.
                post('update', {
                    name: name,
                    address: address,
                }).then(response => {
                    Alert.alert('Dados alterados com sucesso!!')
                }).catch((error) => {
                    console.log(error);
                });
        }

    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        button: {
            marginBottom: 10,
            marginRight: 20,
            padding: 10,
            borderRadius: 3,
            backgroundColor: "#7159c1",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
        },
        buttonText: {
            color: "#fff"
        },
        avatar: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
            marginRight: 20,
        }
    });


// import React, { useState } from 'react';
// import { TextInput, View, KeyboardAvoidingView, Button, Platform, TouchableOpacity, Alert } from 'react-native';

// import { css } from '../assets/css/Css'

// export default function Cadastrado() {

//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');

//     return (
//         <KeyboardAvoidingView behaivor={Platform.Os == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkBg]}>

//             <View style={css.login_form}>
//                 <TextInput
//                     style={css.input}
//                     type='text'
//                     placeholder='Nome do aluno'
//                     onChangeText={(name) => setName(name)}
//                 />
//                 <TextInput
//                     style={css.input}
//                     placeholder='Endereço'
//                     type='text'
//                     onChangeText={(address) => setAddress(address)}
//                 />
//             </View>

//             <TouchableOpacity>
//                 <View style={css.button}>
//                     <Button
//                         onPress={() => {
//                             add();
//                         }}
//                         title="Adicionar"
//                         color="#228B22"
//                     />
//                 </View>


//             <View style={css.button}>
//                 <Button
//                     onPress={() => {
//                         remove();
//                     }}
//                     title="Remover"
//                     color="#B22222"
//                 />
//             </View>

//             <View style={css.button}>
//                 <Button
//                     onPress={() => {
//                         update();
//                     }}
//                     title="Alterar"
//                     color="#00004d"
//                 />
//             </View>
//             </TouchableOpacity>
//         </KeyboardAvoidingView >
//     )

//     // Adiciona aluno
//     async function add() {
//         let response = await fetch('http://192.168.0.166:3000/add', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: name,
//                 address: address
//             })
//         })

//         if (response) Alert.alert('Cadastrado com sucesso!!');
//     }

//     // Remove aluno
//     async function remove() {
//         let response = await fetch('http://192.168.0.166:3000/remove', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: name,
//                 address: address
//             })
//         })

//         if (response) Alert.alert('Aluno removido com sucesso!!');
//     }

//     // Alterar endereço
//     async function update() {
//         let response = await fetch('http://192.168.0.166:3000/update', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: name,
//                 address: address
//             })
//         })

//         if (response != 'error') Alert.alert('Dados alterados com sucesso!!');
//     }

// }
