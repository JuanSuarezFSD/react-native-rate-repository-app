import React from "react"
import  {View, Text, StyleSheet} from 'react-native'
import StyledText from "./StyledText"
import RepositoryStats from "./RepositoryStats"




const RepositoryItems = (props) => {
    return (
        <View key={props.id} style={styles.container}>
        
        <StyledText fontWeight='bold' fontSize='subheading'>{props.fullname}</StyledText>
        <StyledText blue>{props.description}</StyledText>
        <StyledText bold>{props.language}</StyledText>
        <RepositoryStats {...props} />
    </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 10
    },
})

export default RepositoryItems