import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import MapView, {Marker, Circle} from 'react-native-maps'

export default function locations() {
    const [region, setRegion] = useState({
        latitude:18.9173117,
        longitude:-99.1610834,
        latitudeDelta:0.0522,
        longitudeDelta:0.0521
    });
    const [marker, setMarker] = useState({
        latitude:18.9173117,
        longitude:-99.1610834
    })
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.mapa} 
      region={region}
      onPress={(e)=>{setMarker(e.nativeEvent.coordinate), setRegion(e.nativeEvent.coordinate)}}
      //onRegionChange={(r)=>(console.log(r))}
      onRegionChangeComplete={(r)=>(console.log(r))}
      >
        <Marker
        key={1}
        coordinate={marker}
        title={"Es Mi Primer Marcador"}
        description={"-----------------------------------"}
        //image={{uri:"https://www.crearlogogratisonline.com/images/crearlogogratis_1024x1024_01.png"}}
        >
            <Image
            source={{
                uri:"https://www.popsockets.mx/dw/image/v2/BDFW_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw399ee61a/images/hi-res/100829_0.png?sw=800&sh=800"
            }}
            style={styles.marcador}
            />
        </Marker>
        <Circle
        radius={1000}
        center={marker}
        strokeWidth={3}
        strokeColor={"lightblue"}
        fillColor={"rgba(0,183,255,0.1)"}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    mapa:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height
    },
    marcador:{
        width:50,
        height:50
    }
})