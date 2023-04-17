import React from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from "./EventDetailScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";
import MapView, { Marker } from 'react-native-maps'
import { Link } from "@react-navigation/native";

export const EventDetailScreen = ({ route }) => {
    const { item } = route.params
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    {item.images.map((image, idx) => (
                        <Image key={idx} source={image} style={styles.image} resizeMode="cover"></Image>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={24} color={COLORS.primary} />
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>

                <Link style={styles.webButton} to={{ screen: 'EventDetailWeb', params: { url: item.url } }}>
                    Ir a la web
                </Link>

                <Text style={styles.description}>{item.description}</Text>
            </View>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit hic velit totam quas molestias fugiat amet repudiandae illo voluptatem, explicabo ab incidunt ipsum cumque, qui excepturi, recusandae doloribus dolorum at placeat optio. Explicabo optio modi pariatur quo dicta atque delectus reprehenderit aut quod sunt laudantium, quam molestias eaque voluptates veritatis adipisci maiores. Officiis qui eligendi incidunt illum beatae dolore inventore facilis? Natus exercitationem eaque nisi blanditiis amet? Nulla, vitae? Modi accusantium rem ex eos a possimus aperiam quaerat numquam, aut inventore voluptatum minus laborum cupiditate, quos ratione magnam quasi, aliquid nesciunt ea dolorem facilis veritatis officia. Autem, explicabo fugiat.</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: item.locationCoordinates.latitude,
                    longitude: item.locationCoordinates.longitude,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002
                }}
            >
                <Marker coordinate={{
                    latitude: item.locationCoordinates.latitude,
                    longitude: item.locationCoordinates.longitude,
                }} title={item.title}></Marker>
            </MapView>
        </ScrollView>
    )
}