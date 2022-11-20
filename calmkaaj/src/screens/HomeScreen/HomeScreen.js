import React, { useEffect, useState } from 'react'
import { Button, FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import styles from './styles';

import { app } from '../../firebase/config'

export default function HomeScreen(props, navigation) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    // const entityRef = firebase.firestore().collection('entities')
    // const userID = props.extraData.uid

    const onLogoutPress = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("signed out")
            console.log(props)
            navigation.navigate("Login")
        }).catch((error) => {
            console.log(error)
        });
    }

    // useEffect(() => {
    //     entityRef
    //         .where("authorID", "==", userID)
    //         .orderBy('createdAt', 'desc')
    //         .onSnapshot(
    //             querySnapshot => {
    //                 const newEntities = []
    //                 querySnapshot.forEach(doc => {
    //                     const entity = doc.data()
    //                     entity.id = doc.id
    //                     newEntities.push(entity)
    //                 });
    //                 setEntities(newEntities)
    //             },
    //             error => {
    //                 console.log(error)
    //             }
    //         )
    // }, [])

    // const onAddButtonPress = () => {
    //     if (entityText && entityText.length > 0) {
    //         const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    //         const data = {
    //             text: entityText,
    //             authorID: userID,
    //             createdAt: timestamp,
    //         };
    //         entityRef
    //             .add(data)
    //             .then(_doc => {
    //                 setEntityText('')
    //                 Keyboard.dismiss()
    //             })
    //             .catch((error) => {
    //                 alert(error)
    //             });
    //     }
    // }

    // const renderEntity = ({item, index}) => {
    //     return (
    //         <View style={styles.entityContainer}>
    //             <Text style={styles.entityText}>
    //                 {index}. {item.text}
    //             </Text>
    //         </View>
    //     )
    // }

    return (
        <View>
            <Text>Home Screen {props.extraData.email}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onLogoutPress()}>
                <Text style={styles.buttonTitle}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )

    // return (
    //     <View style={styles.container}>
    //         <View style={styles.formContainer}>
    //             <TextInput
    //                 style={styles.input}
    //                 placeholder='Add new entity'
    //                 placeholderTextColor="#aaaaaa"
    //                 onChangeText={(text) => setEntityText(text)}
    //                 value={entityText}
    //                 underlineColorAndroid="transparent"
    //                 autoCapitalize="none"
    //             />
    //             <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
    //                 <Text style={styles.buttonText}>Add</Text>
    //             </TouchableOpacity>
    //         </View>
    //         { entities && (
    //             <View style={styles.listContainer}>
    //                 <FlatList
    //                     data={entities}
    //                     renderItem={renderEntity}
    //                     keyExtractor={(item) => item.id}
    //                     removeClippedSubviews={true}
    //                 />
    //             </View>
    //         )}
    //     </View>
    // )
}