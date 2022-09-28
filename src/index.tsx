import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Filmes from "./Filmes";
import api from "./service/api";


export default function Index(){

    const [filmes,setFilmes] = useState();

    useEffect( () => {

        async function montar(){
            const response = await api.get('r-api/?api=filmes');
            setFilmes(response.data);
        }

        montar();

    }, []);

    return (
        <View style={estilos.conteiner}>
            <FlatList 
            data={filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Filmes data={item}/>}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        flex:1
    }
})