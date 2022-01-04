import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView } from 'react-native'; 

//Components
import MyButtonComponent from '../components/MyButtonComponent';
import MyInputComponent from '../components/MyInputComponent';

import * as API from "../services/api"


const EditScreen = (props) =>{
    //const [user, setUser] = useState(null); 
     //Form states
     const [firstName, setFirstName] = useState(""); 
     const [lastName, setLastName] = useState(""); 
     const [email, setEmail] = useState(""); 
     const [phone, setPhone] = useState(""); 
     const [company, setCompany] = useState(""); 

    useEffect( () => {
       console.log("EditScreen: ", props); 
       
       
       const user = props.route.params?.user 

        if (user) {
            setFirstName(user?.firstName);
            setLastName(user?.lastName);
            setEmail(user?.email);
            setPhone(user?.phone);
            setCompany(user?.company)
        }

    }, [])

    //dumbfunction = ( ) => console.log("hello")

   

    return (
        <View style={{flex: 1, padding: 16 }}>
            
            <Text style={{color: "#000", fontSize: 20, fontWeight: "bold"}}>
                  Welcome to Edit Screen
            </Text>

            <ScrollView>
            <View style={{flex: 1 }}>

                <View style={{flex: 1 }}>

                    <Text>First name</Text>
                        <MyInputComponent
                            onFocus={() => console.log("focused firstName")}
                            onChangeText={ text => setFirstName(text)}
                            value={firstName}
                        />

                    <Text>Last name</Text>
                        <MyInputComponent
                            onFocus={() => console.log("focused lastName")}
                            onChangeText={ text => setLastName(text)}
                            value={lastName}
                        />

                    <Text>Email</Text>
                        <MyInputComponent
                            onFocus={() => console.log("focused Email")}
                            onChangeText={ text => setEmail(text)}
                            keyboardType="email-address"
                            value={email}
                        />

                    <Text>Phone</Text>
                        <MyInputComponent
                            onFocus={() => console.log("focused Phone")}
                            onChangeText={ text => setPhone(text)}
                            keyboardType="phone-pad"
                            value={phone}
                        />
                    <Text>Company</Text>
                        <MyInputComponent
                            onFocus={() => console.log("focused company")}
                            onChangeText={ text => setCompany(text)}
                            value={company}
                        />
                    
                </View>

                <View>
                    <View style={{flex: 1, flexDirection: "row", marginVertical: 8, justifyContent: "space-around" }}>
                        
                        <MyButtonComponent onPress= {() =>{  

                                                    var modifiedAt = (new Date()).toDateString()
                                                    var newUserId = (new Date()).getTime() 
                                                    //uuid

                                                    var user = {
                                                        id: newUserId, 
                                                        firstName, 
                                                        lastName, 
                                                        email, 
                                                        phone, 
                                                        company, 
                                                        createdAt: modifiedAt, 
                                                        modifiedAt
                                                    }

                                                    if( props.route.params?.user?.id ) {
                                                        user = {
                                                            ...user, 
                                                            
                                                            id: props.route.params.user.id,
                                                            createdAt: props.route.params.user.createdAt, 
                                                        }

                                                        API.modifyUserById(props.route.params?.user?.id, user)
                                                                    .then(res => console.log("res", res ) )
                                                                    .catch(error => console.log("@error: ", error))


                                                    }else {

                                                                //Send post request with the body
                                                            API.addUser(user)
                                                                .then(res => console.log("res", res ) )
                                                                .catch(error => console.log("@error: ", error))

                                                    }

                                                    console.log("@navigate: ", user)
                            
                                                    props.navigation.navigate("Home"); 
                                                    //props.navigation.navigate("Home", {user: user } )
                                                
                                            }}
                                    colorButton= "#8DF574"
                                    title= { props.route.params?.user?.id ? "Edit User" : "Add User"} />

                        <MyButtonComponent onPress= {() => props.navigation.goBack()}
                                    colorButton= "#8DF574"
                                    title="Cancel" />
                    </View>
                </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditScreen; 