import React from "react"
import  {View, Text, StyleSheet} from 'react-native'
import StyledText from "./StyledText"

const RepositoryItems = (props) => {
    return (
        <View key={props.id} style={styles.container}>
        <StyledText bold big>Id: {props.id}</StyledText>
        <StyledText blue>Full Name: {props.fullname}</StyledText>
        <StyledText blue>Description: {props.description}</StyledText>
        <StyledText bold>Language: {props.language}</StyledText>
        <StyledText small>Stars: {props.stargazersCount}</StyledText>
        <StyledText small>Forks: {props.forksCount}</StyledText>
        <StyledText small>Review: {props.reviewCount}</StyledText>
        <StyledText small>Rating: {props.ratingAverage}</StyledText>
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