import { StyleSheet, View } from 'react-native';
import LetterBox from '../LetterBox';
import { ThemedText } from '../ThemedText';
import { capitalizeWords } from '@/utils';
import { User } from '@/types';

export default function ListItem({ user }: { user: User }) {
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
