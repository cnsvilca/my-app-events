import React, { useContext } from "react";
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from "./EventDetailScreen.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/theme";
import MapView, { Marker } from 'react-native-maps'
import { Link } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";

export const EventDetailScreen = ({ route }) => {
    // const { item } = route.params.item
    const { id, nombre, lugar, fecha, hora, descripcion, latitud, longitud, urlImagen, urlPagina} = route.params.item
    const { currentUser } = useContext(UserContext)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    <Image source={
                        { uri: `${urlImagen}` }}
                        style={styles.image}
                        resizeMode="cover"
                    ></Image>
                </ScrollView>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{nombre}</Text>
                <Text style={styles.location}>{lugar}</Text>
                <Text style={styles.price}>{fecha}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="time" size={24} color={COLORS.primary} />
                    <Text style={styles.rating}>{hora}</Text>
                </View>

                {currentUser && <Link style={styles.webButton} to={{ screen: 'EventDetailWeb', params: { url: urlPagina } }}>
                    Ir a la web
                </Link>}

                <Text style={styles.description}>{descripcion}</Text>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: latitud,
                    longitude: longitud,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002
                }}
            >
                <Marker coordinate={{
                    latitude: latitud,
                    longitude: longitud,
                }} title={nombre}></Marker>
            </MapView>
        </ScrollView>
    )
}