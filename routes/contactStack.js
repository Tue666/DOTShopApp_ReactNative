import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactScreen from '../screens/Contact/ContactScreen';
import { HeaderContact } from '../shared/header';
import HistoryScreen from '../screens/Contact/HistoryScreen';
import DetailScreen from '../screens/Contact/DetailScreen';
import { IMAGE_URL } from '../core/config';

const Stack = createStackNavigator();

export default function ContactStack({ isDarkTheme, navigation, token, countUnread, listFeedback, onLoadFeedback }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ContactScreen"
                children={(props) => <ContactScreen isDarkTheme={isDarkTheme} token={token} countUnread={countUnread} onLoadFeedback={onLoadFeedback} {...props}></ContactScreen>}
                options={{
                    title: '',
                    headerBackground: () =>
                        isDarkTheme ?
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: IMAGE_URL + 'headerBlack.png' }}></Image>
                            :
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: IMAGE_URL + 'headerWhite.png' }}></Image>,
                    headerTitle: () => <HeaderContact isDarkTheme={isDarkTheme} drawerNavigation={navigation}></HeaderContact>
                }} />
            <Stack.Screen
                name="HistoryScreen"
                children={(props) => <HistoryScreen isDarkTheme={isDarkTheme} listFeedback={listFeedback} {...props}></HistoryScreen>}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="DetailScreen"
                children={(props) => <DetailScreen isDarkTheme={isDarkTheme} listFeedback={listFeedback} onLoadFeedback={onLoadFeedback} {...props}></DetailScreen>}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    );
}
