import {  Text, View ,TextInput,TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';


const Alerta =({alerta})=>{
    return(
       <Text style={{fontSize:20,textAlign:'center',color:'white',textTransform:'uppercase',padding:20}}>
            {alerta}
       </Text> 
    )
}

export {
    Alerta
}