import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
    <StatusBar style="light"/>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />
      <Stack.Screen name="+not-found" />
    </Stack>
    </GestureHandlerRootView>
  );
}
