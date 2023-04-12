import React from "react";
import { View, Text, Image } from "react-native";
import repositories from '../data/repositories.js'
import { FlatList } from "react-native";
import RepositoryItems from "./RepositoryItem.jsx";

const RepositoryList = () => {
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