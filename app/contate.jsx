import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Linking, ScrollView } from 'react-native';

export default function ContateScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      <Image
        source={require('@/assets/images/ricardo_espetinhos.png')}
        style={styles.logo}
        resizeMode="contain"
      />

     
      <Text style={styles.title}>Espetinho do Ricardo</Text>

      
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Venha nos visitar</Text>
      <Text style={styles.text}>R. Cel. José Freire</Text>
      <Text style={styles.text}>Pereiro - CE, 63460-000</Text>

    
      <Pressable
        onPress={() =>
          Linking.openURL(
            'https://www.google.com/maps/search/?api=1&query=Espetinho+do+Ricardo,+R.+Cel.+José+Freire,+Pereiro,+CE'
          )
        }
        style={styles.mapButton}
      >
        <Text style={styles.mapButtonText}>Ver no Google Maps</Text>
      </Pressable>


      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Telefone para contato:</Text>
      <Pressable onPress={() => Linking.openURL('tel:+558999999999')}>
        <Text style={styles.link}>+55 (88) 99999-9999</Text>
      </Pressable>

     
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Horário de funcionamento:</Text>
      <Text style={styles.text}>Aberto das 16h às 23:59h</Text>
      <Text style={styles.text}>Fechado apenas na Quarta-feira</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#ffb347',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 4,
  },
  link: {
    color: '#4da6ff',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 4,
  },
  mapButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 12,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
