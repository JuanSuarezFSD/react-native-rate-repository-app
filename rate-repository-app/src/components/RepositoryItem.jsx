import React from "react"
import  {View, Image,Text, StyleSheet} from 'react-native'
import StyledText from "./StyledText"
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"


const RepositoryItemHeader = ({ ownerAvatarUrl, fullname, description, language }) => (
    <View style={{flexDirection: 'row', paddingBottom: 2,}}>
            <View style={{paddingRight: 10}}>
                <Image 
              style={styles.image}
              source={{uri: ownerAvatarUrl}}
            />
            </View>
            
            <View style={{flex:1,paddingBottom: 10, justifyContent: 'center'}}>
                <StyledText fontWeight='bold' fontSize='heading'>{fullname}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
                <StyledText style={styles.lenguage}>{language}</StyledText>
            </View>
        </View>
)

const RepositoryItems = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
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
    lenguage: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginTop: 8
    }
})

export default RepositoryItems