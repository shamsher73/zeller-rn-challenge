import { StyleSheet, View } from 'react-native';
export default function Divider() {
    return (
        <View
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});
