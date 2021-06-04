import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

  const [text, setText] = useState('');
  const [newText, setNewText] = useState('');
  
  const writeText=async()=>{
    await AsyncStorage.setItem("key1",JSON.stringify({'note':text}));
    readText();
  }
  const readText=async()=>{
    setNewText( await AsyncStorage.getItem("key1"));
    console.log(newText);

  }
  return (
    <View style={styles.container}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Today's Task</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputView1}>
          <TextInput style={styles.inputText} placeholder="Write a task..." onChangeText={text=>setText(text)}>
          </TextInput>
        </View>
        <View style={styles.inputView2}>
          <TouchableOpacity style={styles.addButton} onPress={()=>writeText()}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={{ flex: 9 }}>
        
      </View>
      
    </View>
  );
}
/*<SafeAreaView style={{ height: 570 }}>
<FlatList
data={DATA}
renderItem={({ item }) => (
  <View style={styles.noteView}>
    <View style={styles.noteView1}>
      <View style={styles.taskLeft}>

      </View>
    </View>
    <View style={styles.noteView2}>
      <Text>123</Text>
    </View>
    <View style={styles.noteView3}>
      <View style={styles.delete}>

      </View>
    </View>
  </View>
)}
/>
</SafeAreaView>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column'
  },
  headerTextView: {
    flex: 2,
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 30,
    color: '#000',
    marginTop: 'auto',
    marginBottom: 'auto',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  },
  inputContainer: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row'
  },
  inputView1: {
    flex: 4,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputView2: {
    flex: 1,
  },
  inputText: {
    marginBottom: 'auto',
    fontSize: 18,
    padding: 15,
    paddingLeft: 20,
    borderColor: '#D0D0D0',
    color: "#575757",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#F4F4F4'
  },
  addButton: {
    width: 55,
    height: 55,
    marginBottom: 'auto',
    borderRadius: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#D0D0D0',
    textAlign: 'center',
    backgroundColor: '#F4F4F4'
  },
  plusIcon: {
    fontSize: 40,
    color: '#555353',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'auto',
    marginBottom:'auto',
  },
  noteView: {
    flex: 1,
    margin: 20,
    marginTop: 5,
    marginBottom: 5,
    padding: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  noteView1: {
    flex: 2,
  },
  noteView2: {
    flex: 8,
  },
  noteView3: {
    flex: 1,
  },
  taskLeft: {
    width: 25,
    height: 25,
    backgroundColor: '#9BC8E1',
    borderRadius: 5,
    margin: 'auto'
  },
  taskCompleted: {
    width: 25,
    height: 25,
    backgroundColor: '#D17777',
    borderRadius: 5,
    margin: 'auto'
  },
  delete:{
    width: 20,
    height: 20,
    borderColor: '#D17777',
    borderWidth:3,
    borderRadius: 15,
    margin: 'auto'
  }
});
