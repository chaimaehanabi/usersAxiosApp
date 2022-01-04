import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'; 

//Local DATA
import data from '../MOCK_DATA'

import FloatingButtonComponent  from "../components/FloatingButtonComponent"; 

import * as API from '../services/api'; 

//import {getUsers} from '../services/api'; 


const HomeScreen = (props) =>{
    const [users, setUsers] = useState([]); 

    //console.log("@api get ALL ", API.getUsers()  )

    useEffect( () => {
        //local data
        if( data ){
            setUsers(data); 
        }

        //data from a remote sourcer (Ex: HTTP/server) 


        //getUsers()

        // try {
        //     const allUsers = await API.getUsers(); 
        //     console.log("USERS: ", allUsers); 

        // }catch(e ){
        //     console.log('Network error ')
        // }

       
        const unsubscribe = props.navigation.addListener("focus", () => {
        
            
            API.getUsers() 
                        .then(res => {console.log("@getUsers: ", res.data) ; setUsers(res.data)   })
                        .catch(error => console.log("error", error))
        } )

        return unsubscribe

    }, [])

    // useEffect( () => {
    //                     console.log("updated");

    //                     if(props.route.params?.user) {
    //                         console.log("@user: ", props.route.params?.user)
                            
    //                         var id = props.route.params?.user?.id 
    //                         var usersCopy = [...users]
                
    //                         usersCopy = usersCopy.filter(element => element.id !== id )

    //                         console.log(" @id: ", id); 
                            

    //                         usersCopy = [...usersCopy, props.route.params?.user]
                
    //                         ///setUsers(prevState => console.log(prevState)); 
                            
    //                         setUsers(usersCopy)
    //                     }

    //                 }, [props.route.params?.user] )

    // useEffect( () => {
    //                 console.log("came from delete screen");

    //                 if(props.route.params?.deleteUserId) {
                        
    //                     var id = props.route.params?.deleteUserId 
    //                     var usersCopy = [...users]
            
    //                     usersCopy = usersCopy.filter(element => element.id !== id )

    //                     setUsers(usersCopy)
    //                 }

    //             }, [props.route.params?.deleteUserId] )


    return (
        <View style={{flex: 1, padding: 16 }}>
            <Text style={{color: "#000", fontSize: 20, fontWeight: "bold" }}>
                  Welcome to Users App
            </Text>

            {users ? <Text style={{ color: "#000", fontSize: 12 }}>
                        {"You have " + users.length + " users."}
                    </Text> : null}

            <FlatList 
                data={ users.reverse() }
                renderItem={({item, index}) => {
                    return(

                        //props.navigation.navigate()

                        <TouchableOpacity 
                                            onPress = {() => props.navigation.navigate("Details", {user: item}) }>
                            <View style={{padding: 8, marginVertical: 8,  borderWidth: 1, borderRadius: 4 }}>
                                
                                <Text style={{color: "#000"}}>
                                    {"Name: " +  item.firstName + item.lastName}
                                </Text>
                                
                                <Text style={{color: "#000"}}>
                                    {"Email: " +  item.email}
                                </Text>
                                {item?.phone ? 
                                                <Text style={{color: "#000"}}>
                                                    {"Phone: " +  item.phone}
                                                </Text> : null
                                }
                                
                                <Text style={{color: "#000"}}>
                                    {"Company: " +  item.company}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
            
        </View>
    )
}

export default HomeScreen; 