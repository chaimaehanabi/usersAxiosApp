
import React from 'react'; 
import {View, Text, TouchableOpacity} from 'react-native'; 


 const FloatingButtonComponent = (props) => {
    return (

        <View
            style={{
                padding: 16,
                borderRadius: 36,
                backgroundColor: '#fcd000',
                position: 'absolute',
                right: 10,
                bottom: 10
            }}>

            <TouchableOpacity {...props}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color:"black" }}>+ ADD USER</Text>    
            </TouchableOpacity>
        </View>

    )
}

export default FloatingButtonComponent; 