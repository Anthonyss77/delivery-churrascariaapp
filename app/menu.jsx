import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image, Pressable } from "react-native";
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';
import { useContext } from 'react';
import { CartContext } from '@/app/cartcontext';
import { useRouter } from 'expo-router';

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
  const { addToCart, cartItems } = useContext(CartContext);
  const router = useRouter();

  const separatorComp = () => <View style={styles.separator} />;
  const footerComp = <Text style={{ color: theme.text, textAlign: 'center', marginTop: 10 }}>Fim da lista</Text>;

 
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <Container style={{ flex: 1 }}>
      
      <Pressable
        onPress={() => router.push('/cart')}
        style={{
          backgroundColor: colorScheme === 'dark' ? '#ffb347' : '#ff6600',
          padding: 12,
          borderRadius: 8,
          margin: 16,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
          Ver Carrinho ({cartItems.length})
        </Text>
      </Pressable>

      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentcontainer}
        ItemSeparatorComponent={separatorComp}
        ListFooterComponent={footerComp}
        ListEmptyComponent={<Text style={{ color: theme.text, textAlign: 'center', marginTop: 20 }}>Sem itens</Text>}
        renderItem={({ item }) => {
          const quantity = getItemQuantity(item.id);

          return (
            <View style={styles.row}>
              <View style={styles.menuTextRow}>
                <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                  {item.title}
                </Text>
                <Text style={styles.menuItemText}>{item.description}</Text>
                <Pressable
                  onPress={() => addToCart({ ...item, image: MENU_IMAGES[item.id - 1] })}

                  style={{
                    backgroundColor: colorScheme === 'dark' ? '#ffb347' : '#ff6600',
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 5
                  }}
                >
                  <Text style={{ color: '#fff', textAlign: 'center' }}>
                    {quantity > 0 ? `Adicionar (${quantity})` : 'Adicionar'}
                  </Text>
                </Pressable>
              </View>

              <Image
                source={MENU_IMAGES[item.id - 1]}
                style={styles.menuImage}
              />
            </View>
          );
        }}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentcontainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      width: '50%',
      maxWidth: 300,
      marginHorizontal: 'auto',
      marginBottom: 10,
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: 600,
      height: 130,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      borderWidth: 1,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 'auto',
      alignItems: 'center',
    },
    menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: 'underline',
    },
    menuItemText: {
      color: theme.text,
      marginBottom: 5,
    },
    menuImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
  });
}
