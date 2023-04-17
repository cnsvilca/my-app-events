import react, { useState } from "react";
import { Text, SafeAreaView, View, FlatList, Image, Pressable } from 'react-native'
import { styles } from "./EventListScreen.styles";
import { data } from "../../api/data";
import { SearchBar } from "../../components/search-bar/SearchBar";

export const EventListScreen = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query)
    }
    
    const filteredEvents = data.filter((evento) =>(evento.title.toLowerCase().includes(searchQuery.toLowerCase())))

    const evento = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('Detalle', {item})}>
            <View style={styles.itemContainer}>
                <Image source={{uri: 'http://www.turismo.jujuy.gob.ar/wp-content/uploads/341025322_953476599113762_1442272966734753403_n.jpg'}} style={styles.itemImage}></Image>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
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