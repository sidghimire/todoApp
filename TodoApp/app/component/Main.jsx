import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,StatusBar } from 'react-native';
import Notes from './Notes';

const Main = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, addNewNote] = useState('');

    const addNote = useCallback(() => {
        if (newNote.length) {
            const date = new Date();
            const payload = {
                date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                note: newNote
            }
            setNotes([payload, ...notes]);
            addNewNote("");
        }
    }, [notes, newNote]);
    
    const onDelete= useCallback(
        (i)=>() => {
            notes.splice(i,1);
            setNotes([...notes]);
        },
        [notes],
    );

    return (
        <View style={styles.container}>
            <StatusBar/>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>
                    Todo List
                </Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {
                    notes.map((item,i)=>(
                        
                        <Notes key={i} data={item} onDelete={onDelete(i)}/>
                    ))
                }
            </ScrollView>
            
            <View style={styles.bottomTab}>
                <TextInput
                    value={newNote}
                    onChangeText={(userInput) => addNewNote(userInput)}
                    style={styles.textInput}
                    placeholder="Enter Your Note"
                >

                </TextInput>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={addNote}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    appHeader: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#000',
        borderBottomWidth: 2,
        borderBottomColor: "#ddd"

    },
    appHeaderText: {
        fontSize: 30,
        color: "#fff",
        fontFamily: 'arial',
        letterSpacing: 1,
        fontWeight: '600'
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
        paddingTop:20
    },
    bottomTab: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        zIndex: 999
    },
    textInput: {
        backgroundColor: "#fff",
        padding: 15,
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16
    },
    addButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 100,
        right: 20,
        zIndex: 999,
        backgroundColor: '#eb4034',
        color: '#fff',
        borderRadius: 40,
        elevation: 0,
        alignItems: 'center',
        textAlign: 'center'
    },
    addButtonText: {
        fontSize: 40,
        color: "#fff",
        fontWeight: '600',
        textAlign: 'center',
    }
});


export default Main;