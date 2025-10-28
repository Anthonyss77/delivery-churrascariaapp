import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import icon_espt from "@/assets/images/image.png"

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icon_espt}
      resizeMode='cover'
      style={styles.image}>
      <Text style={styles.title}>Espetinho do Ricardo</Text>
      <Link href="/menu" style={{ marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Nosso menu</Text>
          </Pressable>
        </Link>

      <Link href="/contate" style={{ marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Nosso endereço</Text>
          </Pressable>
        </Link>
      
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {    
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },

  link: {    
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4, 
  },

  button: {
      height: 60,
      width: 150,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding: 6,
      marginBottom: 50,
  },

  buttonText: {    
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4, 
  }})