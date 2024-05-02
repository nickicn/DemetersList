import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={ styles.containerImage}>
      <Image 
      source={require('../assets/avatar.jpg')} 
      style={styles.logo}/>
      </View>
      <View style={styles.content}>
      <Text style={styles.title}>Demeter's List
      </Text>
      <Text style={styles.text}>Monte sua lista de compras e não
       esqueça mais o que comprar na Demeter!</Text>
      <Link  style={styles.button} href={"/home"}>
        <Text style={styles.buttonText}>Acessar</Text>
      </Link>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  containerImage:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',

  },
  logo:{
    width:230,
    height:230,
    borderRadius:115,
    resizeMode: 'cover'
  },
  content: {
    flex: 1,
    backgroundColor: "#dadada",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize:16,
    color:'gray',
  },
  button:{
    position:'absolute',
    backgroundColor:'#000',
    bottom: '15%',
    alignSelf:'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',

  },
  buttonText:{
    fontSize:22,
    color:'#fff',
    fontWeight:'bold',
  },
});
