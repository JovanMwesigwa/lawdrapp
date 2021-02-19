import React from 'react'
import { StyleSheet,  View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';



import colors from '../config/colors'
import AppTextTwo from './AppTextTwo'

const AppItemSelector = ({title, firstTitle, notes, other, secondTitle}) => {

    const [ selectedFirst, setSelectedFirst ] = React.useState(true);
    const [ selectedSecond, setSelectedSecond ] = React.useState(false);


    const handleFirst = () => {
        setSelectedFirst(!selectedFirst);
        setSelectedSecond(!selectedSecond);
    }

    const handleSecond = () => {
        setSelectedSecond(!selectedSecond);
        setSelectedFirst(!selectedFirst);
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <AppTextTwo fontSize={16} fontWeight="700">{title}</AppTextTwo>
            {
                !notes ? 
                <View style={[styles.descriptionContainer, { flexDirection: other ? 'column' : 'row' }]}>
                <View style={styles.selector}>
                    <TouchableOpacity 
                        onPress={handleFirst}
                        style={[styles.roundSelector, { backgroundColor: selectedFirst ? colors.secondary : colors.white100 }]}>
                        {selectedFirst && <MaterialIcons name="check" size={20} color={colors.white100} />}
                    </TouchableOpacity>
                    <AppTextTwo fontSize={15} marginLeft={8}>{firstTitle}</AppTextTwo>
                </View>
                <View style={styles.selector}>
                    <TouchableOpacity 
                        onPress={handleSecond}
                        style={[styles.roundSelector, { backgroundColor: selectedSecond ? colors.secondary : colors.white100 }]}>
                        {selectedSecond && <MaterialIcons name="check" size={20} color={colors.white100} />}
                    </TouchableOpacity>
                    <AppTextTwo fontSize={15} marginLeft={8}>{secondTitle}</AppTextTwo>
                </View>
            </View>
                :
                <TextInput
                    style={{ paddingBottom: 12, color: colors.darkBlue, fontSize: 16 }}
                    multiline
                />
            }
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        backgroundColor: colors.white100,
        margin: 15,
        borderRadius: 15,
        padding: 15
    },
    roundSelector: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 35/2,
        borderWidth: 0.8,
        borderColor: colors.secondary,
        height: 30,
        justifyContent: 'center',
        width: 30,
    },
    selector: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 12,
    }
})

export default AppItemSelector
