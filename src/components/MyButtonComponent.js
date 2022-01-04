import React from 'react'; 
import {View, Text, TouchableOpacity} from 'react-native'; 


 const MyButtonComponent = (props) => {
    return(
        <TouchableOpacity {...props}>
                <View style={{  padding: 16, 
                                backgroundColor: props.colorButton,
                                borderWidth: 1, 
                                borderRadius: 6,
                                justifyContent: "center", 
                                alignItems: "center"}}>

                    <Text style={{  color: "#000",
                                    fontSize: 14, 
                                    
                                    }}>
                        {props.title}
                    </Text>
                </View>
        </TouchableOpacity>
    )
}

export default MyButtonComponent; 