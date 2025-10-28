import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Appearance } from 'react-native';
import { CartProvider } from '@/app/cartcontext'; 

import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    
    return null;
  }

  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.HeaderBackground },
          headerTintColor: theme.text,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: 'Início' }}
        />
        <Stack.Screen
          name="menu"
          options={{ headerShown: true, title: 'Cardápio' }}
        />
        <Stack.Screen
          name="contate"
          options={{ headerShown: true, title: 'Nosso endereço', headerTitle: 'Venha conhecer o local' }}
        />
        <Stack.Screen
          name="cart"
          options={{ headerShown: true, title: 'Carrinho' }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </CartProvider>
  );
}
