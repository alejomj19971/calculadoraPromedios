import { StyleSheet } from "react-native-web";


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    caja:{
        flex:1/8,
        flexDirection:'row',
        marginTop:5,
        gap:10,
        justifyContent:'center',
        


        
        
    },
    label:{
      padding:5,
      textAlign:'left',
      color:'white',
      fontWeight:'bold',
      fontSize:20
     
    },
    inputs:{
      borderWidth: 1,
      borderColor:'gray',
      borderRadius:10,
      padding:5,
      color:'white'
    }
  });


  export{
    styles
  }