import React, {useState} from 'react'
import {KeyboardAvoidingView, Button, TextInput, StyleSheet, View} from 'react-native'
import Constants from 'expo-constants'
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactSlice';
import { useNavigation } from '@react-navigation/native';

const AddContactForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch();
    const navigation = useNavigation();

    handleNameChange = name => {
        setName(name)
    }

    handlePhoneChange = phone => {
        if(+phone >= 0 && phone.length <= 10) {
            setPhone(phone)
        }     
    }
    handleSubmit = () => {
        dispatch(addContact({name, phone}));
        navigation.navigate('Home');
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TextInput 
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
                placeholder="Name"/>
            <TextInput
                style={styles.input} value={phone}
                onChangeText={handlePhoneChange}
                keyboardType="numeric"
                placeholder="Phone number"/>
            <View style={{ margin: 6 }}>
                <Button
                title="Add contact"
                onPress={this.handleSubmit}
                />
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default AddContactForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 20
    }
})
