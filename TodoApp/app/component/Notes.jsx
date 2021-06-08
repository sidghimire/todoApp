import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Notes = ({ data,onDelete }) => {
    const {note,date}=data;
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.noteText}>{note}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={onDelete} style={styles.removeButton}>
                    <Text style={{
                        color: '#fff',
                        fontSize:10,
                        fontWeight:'600'
                    }}>
                        X
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        backgroundColor: '#f2f2f2',
        margin: 20,
        marginTop:5,
        marginBottom:5,
        display: 'flex',
        flexDirection: 'row'

    }, noteText: {
        fontSize: 18,
    },
    dateText: {
        fontSize: 13,
        color: "#8f8f8f"
    },
    removeButton: {
        width:40,
        height:40,
        padding: 15,
        backgroundColor: '#c90606',
        borderRadius: 40,
        alignItems:'center'
    }
});


export default Notes;