import React from "react"
import { Text, FlatList } from "react-native"
import RepositoryItems from "./RepositoryItem.jsx"
import useRepositories from "../hooks/useRepositories.js"

const RepositoryList = () => {

    const { repositories } = useRepositories()
    
    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem = {({ item: repo }) => (
                <RepositoryItems {... repo}/>
            )}
        >
        </FlatList>
    )
}

export default RepositoryList