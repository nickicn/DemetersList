import React from 'react'
import { 
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity } from 'react-native'
  import{ Ionicons } from "@expo/vector-icons";
  import { styles } from './style';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
      source={require('../../assets/background.jpg')}
      resizeMode='repeat'
      style={{ flex: 1, justifyContent: 'flex-start' }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <View>
            <Ionicons name="trash" size={32} color="#fff" />
            </View>
        </View>

        {/* Lista de Produtos */}

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
              <TextInput />
          </View>
          <TouchableOpacity style={styles.ionContainer}>
            <Ionicons names="add" size={36} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}