import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, Alert } from "react-native";
import { CartContext } from '@/app/cartcontext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleFinalizeOrder = () => {
    if (cartItems.length === 0) {
      Alert.alert("Carrinho vazio", "Adicione itens antes de finalizar o pedido.");
      return;
    }

    const message = cartItems
      .map(item => `${item.title} (x${item.quantity})`)
      .join(", ");
    const phoneNumber = "558999999999"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Olá! Gostaria de fazer o seguinte pedido: ${message}`
    )}`;

    Linking.openURL(url).catch(() => {
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp.");
    });
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "#121212" }}>
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Carrinho</Text>

      {cartItems.map((item) => (
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            backgroundColor: "#1E1E1E",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ color: "#ccc" }}>Quantidade: {item.quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => removeFromCart(item.id)}
            style={{ backgroundColor: "red", padding: 8, borderRadius: 5 }}
          >
            <Text style={{ color: "white" }}>Remover</Text>
          </TouchableOpacity>
        </View>
      ))}

      {cartItems.length > 0 && (
        <TouchableOpacity
          onPress={handleFinalizeOrder}
          style={{
            backgroundColor: "#ff6600",
            padding: 15,
            borderRadius: 8,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Finalizar Pedido</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={clearCart}
        style={{
          backgroundColor: "#ff3300",
          padding: 15,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Limpar Carrinho</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
