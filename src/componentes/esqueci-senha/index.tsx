import React from "react";
import { Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

export default function EsqueciSenha(){
    return(
        <View>

            <Modal animationType="slide" style={estilos.modal}>
                <Text>Esqueci Senha</Text>
                <Text>CPF</Text>

                <TextInput style={estilos.input}/>

                <TouchableOpacity>
                    <Text>Nova Senha</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Cancelar</Text>
                </TouchableOpacity>

            </Modal>


        </View>
    )
}

const estilos = StyleSheet.create({
    modal:{
        backgroundColor: '#F3F3F3',
        flex:1,

    },
    input:{
        backgroundColor: "#FFFFFF",
        height: 50,
    },
    btnNovaSenha:{
        backgroundColor: ""
    }
});