import { View, FlatList, StyleSheet, Text } from 'react-native';
import ListItem from './ListItem';
import { ThemedText } from '../ThemedText';
import { User, UserType } from '@/types';
import { capitalizeWords } from '@/utils';

type CustomerListProps = {
    items: User[],
    selectedValue: UserType
}

export default function CustomerList(props: CustomerListProps) {
    const { items, selectedValue } = props
    return (
        <View>
            <ThemedText type='title'>{capitalizeWords(selectedValue)} Users</ThemedText>
            <FlatList
                style={styles.listContainer}
                data={items}
                renderItem={(item) => (selectedValue == item.item.role ? <ListItem user={item.item} /> : null)}
                ListEmptyComponent={() => <Text>No users found</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 20
    }
});
