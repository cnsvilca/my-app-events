import react from "react";
import { Text, SafeAreaView, View, FlatList, Image, Pressable } from 'react-native'
import { styles } from "./EventListScreen.styles";
import { data } from "../../api/data";



export const EventListScreen = ({navigation}) => {

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
            <FlatList
                data={data}
                renderItem={evento}
                keyExtractor={item =>item.id}
                styles={styles.itemList}
            ></FlatList>
        </SafeAreaView>
    )
}