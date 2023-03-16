import {  Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';


const Alerta =({mensaje})=>{
    return(
       <View style={{fontSize:20,textAlign:'center',backgroundColor:'red',color:'white',textTransform:'uppercase',padding:20}}>
            {mensaje}
       </View> 
    )
}

export {
    Alerta
}