import { Colors } from '@/constants/Colors';
import { StyleSheet, View, Text } from 'react-native';

type LetterBoxProps = {
    character: string
}

export default function LetterBox(props: LetterBoxProps) {
    const { character } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{character}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 800,
        fontStyle: 'normal',
        color: Colors.primary
    },

});
