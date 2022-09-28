import React, { useReducer } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Main(){
    const initialState = [];
    

    const reducer = (state:any, action:any) => {
        switch(action.type){
            case 'ADD':
                return [...state, action.item];
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    


    return (
        <View style={estilos.conteiner}>
            <View style={estilos.inputConteiner}>

                <TextInput style={estilos.input}
                placeholder="Adiconar um produto"/>
                <TouchableOpacity style={estilos.addButton} 
                onPress={() => {
                    dispatch({type: 'ADD', item: {
                        id: '1', title: 'Arroz', check: false
                    }})
                }}>
                    <Text style={estilos.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>

            <FlatList 
            data={state}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Text style={estilos.listaItem}>{item.title}</Text>
            )}/>

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#fff',        
    },
    inputConteiner:{
        flexDirection: "row",
        margin: 10,
    },
    input:{
        flex: 1,
        fontSize: 30,
        color: "#000",
    },
    addButton:{
        
        marginHorizontal: 5, 
        alignItems: "center",
        alignSelf: "center",
    },
    addButtonText:{
        fontSize: 60,
        color: 'red',
    },
    listaItem:{
        backgroundColor: 'gray',
        marginHorizontal:7,
        marginVertical: 3,
        fontSize: 22,
        padding: 10,
    }
})