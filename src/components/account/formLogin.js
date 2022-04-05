import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import { isEmpty } from 'lodash'
import { validateEmail } from '../../utils/validations'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'
import Loading from '../loading'

export default function formLogin(props) {
    const navigation = useNavigation();
    const { toastRef }=props;
    const [showPass, setShowPass] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const[loading, setLoading]=useState(false)

    const onSubmit = () =>{
        // console.log("onSubmit")
        // console.log(formData)
        if(isEmpty(formData.email)  || isEmpty(formData.password)){
            toastRef.current.show("Todos los campos son obligatorios")
        }else if(!validateEmail(formData.email)){
            toastRef.current.show("Emial no valido")
        }else{
            setLoading(true)
            //toastRef.current.show("OK")
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(response=>{
                setLoading(false)
                console.log(response)
                navigation.navigate("index")
            })
            .catch(err=>{
                setLoading(false)
                toastRef.current.show("Correo y/o contraseña incorrectos")
            })
        }
    }

    const capturarDatos =(type, e) =>{
        // console.log(e.nativeEvent.Text)
        // console.log(type)
        setFormData({...formData, [type]:e.nativeEvent.text})
    }

  return (
    <View style={styles.formContainer}>
      <Input
      onChange={e=>capturarDatos("email", e)}
      placeholder='Correo Electronico'
      containerStyle={styles.inputForm}
      rightIcon={
          <Icon type='material-community' name='at' iconStyle={styles.icon} />
      }
      />
      <Input
      onChange={e=>capturarDatos("password", e)}
      placeholder='Contraseña'
      containerStyle={styles.inputForm}
      password={true}
      secureTextEntry={showPass ? false : true}
      rightIcon={
          <Icon type='material-community' name={showPass ?"eye-off-outline" : "eye-outline" } iconStyle={styles.icon}
          onPress={()=>setShowPass(!showPass)}
          />
      }
      />
      <Button
      title={"Iniciar Sesion"}
      containerStyle={styles.containerBtn}
      buttonStyle={styles.btnLogin}
      onPress={onSubmit}
      />
      <Loading isVisible={loading} text="Iniciando Sesión" />
    </View>
  )
}

function defaultFormValues(){
    return{
        email:"",
        password:""
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    inputForm:{
        marginTop:20,
        width:"100%"
    },
    icon:{
        color:"#c1c1c1"
    },
    containerBtn:{
        margin:20,
        width:"95%"
    },
    btnLogin:{
        backgroundColor:"#fcb823"
    }
})