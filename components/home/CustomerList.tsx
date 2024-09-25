import { View, FlatList } from 'react-native';
import ListItem from './ListItem';
import { ThemedText } from '../ThemedText';
import { User } from '@/types';
import { capitalizeWords } from '@/utils';

type CustomerListProps = {
    items: User[],
    selectedValue: string
}

export default function CustomerList(props: CustomerListProps) {
    const { items, selectedValue } = props
    return (
        <View>
            <ThemedText type='title'>{capitalizeWords(selectedValue)} Users</ThemedText>
            <FlatList
                data={items}
                renderItem={(item) => (selectedValue == item.item.role ? <ListItem user={item.item} /> : null)}
            />
        </View>
    );
}
