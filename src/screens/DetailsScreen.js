import React, { useState, useEffect } from 'react';
import {View, Text,  } from 'react-native'; 

//Components 
import MyButtonComponent from '../components/MyButtonComponent';

//API 
import * as API from '../services/api'; 

const DetailsScreen = (props) =>{
    const [user, setUser] = useState(null); 

    useEffect( () => {

       if(props.route.params?.user) {
           setUser(props.route.params.user)
       }
           
    }, [])

    return (
        <View style={{flex: 1, padding: 16 }}>
            
            <Text style={{color: "#000", fontSize: 20, fontWeight: "bold"}}>
                  Welcome to Details Screen
            </Text>
            <View style={{ flex: 1, padding: 16, borderWidth: 1 }} >

                <Text style={{ color: "#000", fontSize: 12, marginBottom: 16 }} >
                    USER INFORMATION: {"#" + user?.id}
                </Text>


                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
                    Name: <Text style={{ color: "#000", fontSize: 14, fontWeight: "normal" }}>
                        {user?.firstName + " " + user?.lastName}
                    </Text>
                </Text>

                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
                    Email: <Text style={{ color: "#000", fontSize: 14, fontWeight: "normal" }}>
                        {user?.email}
                    </Text>
                </Text>

                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
                    Phone: <Text style={{ color: "#000", fontSize: 14, fontWeight: "normal" }}>
                        {user?.phone}
                    </Text>
                </Text>

                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16 }}>
                    Company: <Text style={{ color: "#000", fontSize: 14, fontWeight: "normal" }}>
                        {user?.company}
                    </Text>
                </Text>

                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>

                    <Text style={{ color: "#000", fontSize: 14 }}>
                        Member since {user?.createdAt}
                    </Text>

                </View>

            </View>

            <View >
                <View style={{flexDirection: "row", marginVertical: 8, justifyContent: "space-around"}}>
                    {/* <MyButtonComponent onPress= {() => console.log("Call Me")}
                                backgroundColor= "#00F"
                                title="Call" />
                    
                    <MyButtonComponent onPress= {() => console.log("Send Email")}
                                backgroundColor= "#F0F"
                                title="Email" /> */}
                
                </View>
                <View style={{flexDirection: "row",  justifyContent: "space-around"}}>
                        <MyButtonComponent onPress= {() => props.navigation.navigate("Edit", {user} )}
                                        backgroundColor= "#00F"
                                        title="Edit" />

                        <MyButtonComponent onPress= {() =>{
                                    var deleteUserId = props.route.params?.user?.id
                                    
                                    API.deleteUserById( deleteUserId)
                                        .then(res => res.status == "200" ? console.log("navigate back") : console.log("")  )
                                        .catch(error => console.log("") )
                                        props.navigation.navigate("Home") 
                                }}
                                
                                    backgroundColor= "#F0F"
                                    title="Delete" />

                        
                </View>
            
            </View>
        </View>
    )
}

export default DetailsScreen; 