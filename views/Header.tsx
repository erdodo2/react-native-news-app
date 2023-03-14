import {
    View,
    Image,
    StyleSheet,
    useColorScheme,
    Modal,
    Alert,
    Text,
    Pressable,
    StatusBar,
    ScrollView, SafeAreaView
} from 'react-native'
import React, {useState} from 'react';
import Css from "../assets/Css";

export default function Header(): JSX.Element {
    const [modalVisible, setModalVisible] = useState(false);

    const isDarkMode = useColorScheme() === 'dark';
    const styles = StyleSheet.create(Css(isDarkMode))

    return (
        <>

            <View className="flex flex-row justify-between items-center p-5">
                <View className="border rounded-full p-3 border-slate-300 dark:border-slate-700" >
                    <Pressable onPress={()=>{setModalVisible(true)}}>
                    <Image source={require('../assets/image/menu.png')} className="h-[20] w-[20]" style={styles.menu}  />
                    </Pressable>
                </View>
                <View className="flex flex-row">
                    <View className="border rounded-full p-3 border-slate-300 dark:border-slate-700 mr-2">
                        <Image source={require('../assets/image/notify.png')} className="h-[20] w-[20]" style={styles.menu}  />
                    </View>
                    <View className="border rounded-full p-3 border-slate-300 dark:border-slate-700 mr-2">
                        <Image source={require('../assets/image/search.png')} className="h-[20] w-[20]" style={styles.menu}  />
                    </View>
                    <View className="rounded-full">
                        <Image source={require('../assets/image/profile.png')} className="h-[43] w-[43]"  />
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <SafeAreaView className="h-full border-t">
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={styles.modal.backgroundColor}
                    />
                    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.modal} >

                        <View style={styles.modal} >
                            <View className="flex flex-row justify-between items-center p-5">
                                <View className="border rounded-full p-3 border-slate-400 dark:border-slate-700" >
                                    <Pressable onPress={()=>{setModalVisible(false)}}>
                                        <Image source={require('../assets/image/arrow-down.png')} className="h-[20] w-[20]" style={styles.menu}  />
                                    </Pressable>
                                </View>
                                <View className="flex flex-row">
                                    <Text className="dark:text-white text-2xl">News App</Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </>
    )
};
