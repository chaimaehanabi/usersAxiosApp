import React from 'react'; 
import { TextInput } from 'react-native'; 

const MyInputComponent = (props) => {
    return(
        <TextInput style={{color: "#000", fontSize: 16, marginVertical: 8 }}  
                    
                    underlineColorAndroid="#000" 
                    {...props}
                    />
    )
} 

export default MyInputComponent