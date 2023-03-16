
import {  Text, View ,TextInput,TouchableOpacity} from 'react-native';
import {styles} from './assets/estilos/Estilo.js'
import {useState} from 'react'
import { Alerta } from './assets/components/Alerta.js';

export default function App() {
  const[alerta,setAlerta]= useState('')
  const [identificacion,setIdentificacion]=useState('')
  const [nombre,setNombre]=useState('')
  const [asignatura,setAsignatura]=useState('')
  const [notaUno,setNotaUno]=useState('')
  const [notaDos,setNotaDos]=useState('')
  const [notaTres,setNotaTres]=useState('')
  const [definitiva,setDefinitva]=useState('')
  const [observacion,setObservacion]=useState('')


const notas=[notaUno,notaDos,notaTres]
const calcularPromedio=()=>{
    const promedio=(parseFloat(notaUno)+parseFloat(notaDos)+parseFloat(notaTres))/3
    setDefinitva(promedio.toFixed(1))
 }


 if([identificacion,nombre,asignatura,notaUno,notaDos,notaTres,observacion].includes('')){

 }

 if(notas.some(nota=>nota<0 || nota>5.0)){
    
 }

 

  const {msg}=alerta

  return (
    <View style={[styles.container,{backgroundColor:'#1E1A1A'}]}>
      <Text style={{marginTop:5,color:'white',fontWeight:'bold',fontSize:40,backgroundColor:'orange',width:'100%',textAlign:'center'}}>Sistema de Notas</Text>
      
      <View style={styles.caja}>
        <View style={styles.label}>
          <Text>
          Identificación
          </Text>
        </View>

        <View >
          <TextInput value={identificacion} onChangeText={identificacion=>setIdentificacion(identificacion)} placeholder='Agregue número de documento' style={styles.inputs}/>
        </View>

      </View>

      <View style={styles.caja}>
        <View style={styles.label}>
          <Text>
          Nombres
          </Text>

        </View>
        <View >
          <TextInput value={nombre} onChangeText={nombre=>setNombre(nombre)} placeholder='Agregue Nombres y Apellidos del alumno' style={styles.inputs}/>
        </View>

      </View>
     


      <View style={styles.caja}>
        <View style={styles.label}>
          <Text>
            Asignatura  
                </Text>
        </View>
        <View >
          <TextInput value={asignatura} onChangeText={asignatura=>setAsignatura(asignatura)} placeholder='Agregue Nombre asignatura' style={styles.inputs}/>
        </View>

      </View>

      <View style={styles.caja}>
        <View style={styles.label}>
         <Text>Nota Momento #1 30% :</Text> 
        </View>
        <View>
          <TextInput value={notaUno} onChangeText={notaUno=>setNotaUno(notaUno)} placeholder='Agregue primera nota' style={styles.inputs}/>
        </View>

      </View>

      <View style={styles.caja}>
        <View style={styles.label}>
        <Text>Nota Momento #2 35% :</Text>

        </View>
        <View >
          <TextInput value={notaDos} onChangeText={notaDos=>setNotaDos(notaDos)} placeholder='Agregue segunda nota' style={styles.inputs}/>
        </View>

      </View>



      <View style={styles.caja}>
        <View style={styles.label}>
       <Text> Nota Momento #3 35% :</Text>
        </View>
        <View >
          <TextInput value={notaTres} onChangeText={notaTres=>setNotaTres(notaTres)} placeholder='Agregue tercera nota' style={styles.inputs}/>
        </View>

      </View>

      <View style={styles.caja}>
        <View style={styles.label}>
        <Text>Definitiva :</Text>
        </View>
        <View >
          <TextInput style={styles.inputs} value={definitiva}/>
        </View>

      </View>

      <View style={styles.caja}>
        <View style={styles.label}>
        <Text>Observación :</Text>
        </View>
        <View >
          <TextInput value={observacion} onChangeText={(observacion)=>setObservacion(observacion)} placeholder='Agregue una descripción' style={styles.inputs}/>
        </View>

      </View>

      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',gap:20}}>
        
        <TouchableOpacity style={{color:'white',fontWeight:'bold',backgroundColor:'orange',padding:15,borderRadius:10,borderWidth:5,borderColor:'white',fontSize:17}} onPress={calcularPromedio} ><Text>Calcular/Guardar</Text></TouchableOpacity>
        
        <TouchableOpacity style={{color:'white',backgroundColor:'orange',padding:15,borderRadius:10,borderWidth:5,borderColor:'white',fontSize:17}} ><Text>Buscar</Text></TouchableOpacity>
        
        <TouchableOpacity style={{color:'white',backgroundColor:'orange',padding:15,borderRadius:10,borderWidth:5,borderColor:'white',fontSize:17}}  > <Text>Limpiar</Text></TouchableOpacity>
      </View>























      
    </View>
  );
}

