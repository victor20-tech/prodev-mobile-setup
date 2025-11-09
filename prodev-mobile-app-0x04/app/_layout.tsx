import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="sign" />i
      <Stack.Screen name="join" />
    </Stack>
  );
}