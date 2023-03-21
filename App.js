import db from './database/firebase.js';
import { collection,addDoc,getDocs } from 'firebase/firestore';
import {  Text, View ,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import {styles} from './assets/estilos/Estilo.js'
import {useState} from 'react'
import { Alerta } from './assets/components/Alerta.js';

export default function App() {


  
  const [identificacion,setIdentificacion]=useState('')
  const [nombre,setNombre]=useState('')
  const [asignatura,setAsignatura]=useState('')
  const [notaUno,setNotaUno]=useState('')
  const [notaDos,setNotaDos]=useState('')
  const [notaTres,setNotaTres]=useState('')
  const [definitiva,setDefinitva]=useState('')
  const [observacion,setObservacion]=useState('')
  const[alerta,setAlerta]= useState('')

  const notas=[notaUno,notaDos,notaTres]

const mostrarAlumno=(alumno)=>{
  if(Object.values(alumno).includes('')){
    setAlerta('Hubo un Error');
    return
  }
  const {
    nombre,
    asignatura,
    notaUno,
    notaDos,
    notaTres,
    definitiva,
    observacion} =alumno;

    setAsignatura(asignatura);
    setNombre(nombre);
    setNotaUno(notaUno);
    setNotaDos(notaDos);
    setNotaTres(notaTres);
    setDefinitva(definitiva);
    setObservacion(observacion);

    setAlerta('Alumno encontrado')
}

const buscar=async( )=>{
  if(identificacion!=""){
    try {
      const querySnapshot = await getDocs(collection(db, "estudiantes"));
      querySnapshot.forEach((doc) => {
    
        if(doc.data().identificacion==identificacion){
          mostrarAlumno(doc.data())
        }
       
  });
      
    } catch (error) {
      console.log(error)
      setAlerta('Introduce el número de identificación para buscar')
    }
  }
  
}


const darObservacion =(promedio)=>{
  if(promedio>=3){
    setObservacion('Aprueba')
    return;
  }
  if(promedio>2 && promedio<=2.94){
    setObservacion('Habilita')
    return
  }

  else{
    setObservacion('Reprueba')
    return
  }
}
const calcularPromedio=()=>{
    const promedio=(parseFloat(notaUno)+parseFloat(notaDos)+parseFloat(notaTres))/3
    setDefinitva(promedio.toFixed(1))
    
    darObservacion(promedio)
  
 }


 const agregarEstudiante= async(estudiante)=>{
    if(estudiante.nombre!=''){
      try {
        const datos = await addDoc(collection(db, "estudiantes"), estudiante);
        setAlerta('Almacenado con éxito')
       
      } catch (error) {
        console.log(error)
      }
    }
     
 }


 const comprobarDatos= async ()=>{

  if([identificacion,nombre,asignatura,notaUno,notaDos,notaTres].includes('')){
      setAlerta('Todos los campos son obligatorios')
      return;
  }

  
 
  if(notas.some(nota=>nota<0 || nota>5.0)){
    setAlerta('Las notas van de 0 a 5')
    return;
  }

  await calcularPromedio();


  setAlerta('')  


 
  
  await agregarEstudiante({
      nombre,
      identificacion,
      asignatura,
      notaUno,
      notaDos,
      notaTres,
      definitiva,
      observacion
    })
  

  

  
 }



 
  const{msg}=alerta
 

  return (
   
    <View style={[styles.container,{backgroundColor:'#1E1A1A'}]}>

    
      <Text style={{marginTop:5,color:'white',backgroundColor:'red',fontWeight:'bold',fontSize:40,backgroundColor:'orange',width:'100%',textAlign:'center'}}>Sistema de Notas</Text>
      {msg!="" && <Alerta alerta={alerta}/>}
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
          <TextInput  style={styles.inputs} value={definitiva} disabled />
        </View>

      </View>

      <View style={styles.caja}>
        <View style={styles.label}>
        <Text>Observación :</Text>
        </View>
        <View >
          <TextInput disabled value={observacion}   style={styles.inputs}/>
        </View>

      </View>

      <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',gap:20}}>
        
        <TouchableOpacity style={{color:'white',fontWeight:'bold',backgroundColor:'orange',padding:15,borderRadius:10,borderWidth:5,borderColor:'white',fontSize:17}} onPress={comprobarDatos} ><Text>Calcular/Guardar</Text></TouchableOpacity>
        
        <TouchableOpacity style={{color:'white',backgroundColor:'orange',padding:15,borderRadius:10,borderWidth:5,borderColor:'white',fontSize:17}} 
        onPress={buscar} ><Text>Buscar</Text></TouchableOpacity>
        
        <TouchableOpacity style={{color:'white',backgroundColor:'orange',padding:15,borderRadius:10,borderWidth:5,borderColor:'white',fontSize:17}}  > <Text>Limpiar</Text></TouchableOpacity>
      </View>











    </View>
    
  );
}

