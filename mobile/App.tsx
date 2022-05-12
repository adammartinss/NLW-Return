
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
} from '@expo-google-fonts/inter';

import { theme } from './src/theme';
import React from 'react';
import Widget  from './src/components/Widget';


export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
        >
            <Text>
                Hello world!
            </Text>
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />
            <Widget />
        </View>
    );
}
