import React from "react";
import { EventListScreen } from "./EventListScreen";
import { EventDetailScreen } from "../event-detail/EventDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const EventListStack = createNativeStackNavigator()

export const MainStackScreen = () =>{
    return(
        <EventListStack.Navigator screenOptions={{headerShown: false}}>
            <EventListStack.Screen name="ExplorarLista" component={EventListScreen}></EventListStack.Screen>
            <EventListStack.Screen name="Detalle" component={EventDetailScreen}></EventListStack.Screen>
        </EventListStack.Navigator>
    )
}