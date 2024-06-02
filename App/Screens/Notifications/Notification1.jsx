import { StyleSheet,Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import { React} from 'react'
const Notification1 = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'black', height: 900 }}>
        <TouchableOpacity  onPress={() => navigation.navigate('Notification')} >
 
 <Image style={{Left:20,top: 35,}}
 source={require('../../../assets/back1.png')} />

</TouchableOpacity>

            <Text   style={{ fontWeight: 600, fontSize: 25, color: 'white', left: 80, }}>Notifications</Text>
            <Modal
                theme={{ colors: { backdrop: "rgba(217, 217, 217, 0)" } }}
                transparent={true}
                visible={true}
                backdropOpacity={0.9}
            >
                <View style={styles.main}>


                    <View
                        style={{
                            flexDirection: "column",
                            gap: 2.5,
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                gap: 2.5,
                                alignItems: "center",
                                top: 40,
                            }}
                        >
                            <Text style={{color:'black', width: 265, height: 192, fontWeight: 600, fontSize: 20, left: 10, lineHeight: 24 }}></Text>
                        </View>
                    </View>


                </View>

            </Modal>
        </View>
    )
}

export default Notification1

const styles = StyleSheet.create({
    subHeading: {
        padding: 10,
        fontSize: 18,
        fontWeight: "500",
        // fontFamily: "Inter-Medium",
        textAlign: "center",
        top: 20,
    },
    main: {
        backgroundColor: "#D9D9D9",
        minHeight: 180,
        top: 150,
        maxWidth: 313,
        left: 20,
        right: 80,
        borderRadius: 20,
        opacity: 10,
    },
})