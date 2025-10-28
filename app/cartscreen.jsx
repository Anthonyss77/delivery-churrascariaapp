import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '@/app/cartcontext';
import { Colors } from '@/constants/Colors';
import { Appearance } from 'react-native';

export default function CartScreen() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Carrinho</Text>

      {cartItems.length === 0 ? (
        <Text style={[styles.emptyText, { color: theme.text }]}>Seu carrinho está vazio</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={[styles.itemText, { color: theme.text }]}>{item.title}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearButtonText}>Limpar Carrinho</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  emptyText: { fontSize: 16, textAlign: 'center', marginTop: 50 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, marginBottom: 10, borderWidth: 1, borderRadius: 10 },
  itemText: { fontSize: 16 },
  removeButton: { backgroundColor: '#ff6600', padding: 6, borderRadius: 5 },
  removeButtonText: { color: '#fff', fontWeight: 'bold' },
  clearButton: { backgroundColor: '#ff6600', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  clearButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
