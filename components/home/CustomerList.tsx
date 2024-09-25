import { View, FlatList, StyleSheet, Text, RefreshControl } from 'react-native';
import ListItem from './ListItem';
import { ThemedText } from '../ThemedText';
import { User, UserType } from '@/types';
import { capitalizeWords } from '@/utils';
import Divider from '../Divider';
import { useCallback, useState } from 'react';

type CustomerListProps = {
    items: User[],
    selectedValue: UserType
    getUsers: () => void
}

export default function CustomerList(props: CustomerListProps) {
    const { items, selectedValue, getUsers } = props
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getUsers()
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View>
            <ThemedText type='title'>{capitalizeWords(selectedValue)} Users</ThemedText>
            <FlatList
                style={styles.listContainer}
                data={items}
                renderItem={(item) => (selectedValue === item.item.role ? <ListItem user={item.item} /> : null)}
                ListEmptyComponent={() => <Text>No users found</Text>}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 20,

    }
});
