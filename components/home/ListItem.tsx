import { StyleSheet, View } from 'react-native';
import LetterBox from '../LetterBox';
import { ThemedText } from '../ThemedText';
import { Customer } from '@/types';
import { capitalizeWords } from '@/core/utils';

const ListItem = ({ user }: { user: Customer }) => {
    return (
        <View style={styles.container}>
            <LetterBox character={user.name.charAt(0)} />
            <View style={styles.subContainer}>
                <ThemedText type='primary'>{user.name}</ThemedText>
                <ThemedText type='secondary'>{capitalizeWords(user.role)}</ThemedText>
            </View>
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    subContainer: {
        marginLeft: 10,
        justifyContent: 'space-between'
    },
});
