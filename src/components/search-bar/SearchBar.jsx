import React from "react";
import { TextInput, View } from 'react-native'
import { styles } from './SearchBar.styles'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../utils/theme";


export const SearchBar = ({ handleSearch, searchQuery }) => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color={COLORS.primary} />
            <TextInput
                placeholder="buscar eventos"
                style={styles.searchInput}
                onChangeText={handleSearch}
                value={searchQuery}
            ></TextInput>
        </View>
    )
}