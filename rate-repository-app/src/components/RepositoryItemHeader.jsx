import React from "react"
import { Image, View } from "react-native"
import RepositoryItems from "./RepositoryItem"
import theme from "../theme"

const RepositoryItemHeader = ({ ownerAvatarUrl, fullname, description, language }) => {
    return (
        <View>
            <Image 
              style={styles.image}
              source={{uri: props.ownerAvatarUrl}}
            />
            <StyledText fontWeight='bold' fontSize='heading'>{props.fullname}</StyledText>
            <StyledText blue>{props.description}</StyledText>
            <StyledText style={styles.lenguage}>{props.language}</StyledText>
        </View>
       )
}

export default RepositoryItemHeader