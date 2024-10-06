import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '../ThemedText';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';
import { UserType } from '@/types';
import { capitalizeWords } from '@/core/utils';

type UserTypeItemProps = {
    title: UserType,
    selectedValue: UserType,
    setSelectedValue: (item: UserType) => void
}

export default function UserTypeItem(props: UserTypeItemProps) {
    const { title, selectedValue, setSelectedValue } = props
    const isSelected = selectedValue === title ? true : false;
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: isSelected ? Colors.secondary : Colors.background }]}
            onPress={() => setSelectedValue(title)}
            testID='user-type-item'
        >
            <MaterialIcons
                name={isSelected ? "radio-button-checked" : "radio-button-unchecked"}
                size={24}
                color={Colors.primary}
                style={styles.icon}
            />
            <ThemedText >{capitalizeWords(title)}</ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
    },
    icon: {
        marginHorizontal: 10
    }
});
