import React from "react";
import { SafeAreaView } from 'react-native'
import { styles } from './EventDetailScreen.styles'
import { WebView } from 'react-native-webview'

export const EventDetailWebScreen = ({ route }) => {
    const { url } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                source={{ uri: url }}
            ></WebView>
        </SafeAreaView>
    )
}