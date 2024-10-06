import { View, FlatList, StyleSheet, Text, RefreshControl, TextInput } from 'react-native';
import ListItem from './ListItem';
import { ThemedText } from '../ThemedText';
import Divider from '../Divider';
import { useState } from 'react';
import { Customer, UserType } from '@/types';
import { capitalizeWords } from '@/core/utils';

type CustomerListProps = {
    items: Customer[],
    selectedValue: UserType
    getUsers: () => void
    filterUsers: (text: string) => void
    isLoading: boolean
}

export default function CustomerList(props: CustomerListProps) {
    const { items, selectedValue, getUsers, filterUsers, isLoading } = props
    const [text, setText] = useState('');

    const renderItem = ({ item }: { item: Customer }) => <ListItem user={item} />

    return (
        <View style={styles.container}>
            <ThemedText type='title'>{capitalizeWords(selectedValue)} Users</ThemedText>
            <TextInput value={text} style={styles.inputContainer} onChangeText={(t) => { setText(t); filterUsers(t) }} />
            <FlatList
                style={styles.listContainer}
                data={items}
                renderItem={renderItem}
                ListEmptyComponent={<Text>No customers found</Text>}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={getUsers} />
                }
            />
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContainer: {
        marginVertical: 20
    },
    inputContainer: {
        marginBottom: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    }
});
