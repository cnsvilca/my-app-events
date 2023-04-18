import react, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, FlatList, Image, Pressable } from 'react-native'
import { styles } from "./EventListScreen.styles";
import { SearchBar } from "../../components/search-bar/SearchBar";
import { getEventList } from "../../api/event.service";

export const EventListScreen = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [eventList, setEventList] = useState([])

    const handleSearch = (query) => {
        setSearchQuery(query)
    }
    
    const filteredEvents = eventList.filter((evento) =>(evento.nombre.toLowerCase().includes(searchQuery.toLowerCase())))

    useEffect(() =>{
        getEventList()
        .then((data) => {
            setEventList(data)
        })
        .catch((err) =>console.log(err))
    },[])



    const evento = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('EventDetail', {item})}>
            <View style={styles.itemContainer}>
                <Image source={{uri: `${item.urlImagen}`}} style={styles.itemImage}></Image>
                <Text style={styles.itemTitle}>{item.nombre}</Text>
                <Text style={styles.itemPrice}>{item.fecha}</Text>
            </View>
        </Pressable>
    )

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar handleSearch={handleSearch} searchQuery={searchQuery}></SearchBar>
            <FlatList
                data={filteredEvents}
                renderItem={evento}
                keyExtractor={item =>item.id}
                styles={styles.itemList}
            ></FlatList>
        </SafeAreaView>
    )
}