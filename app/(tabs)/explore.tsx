
import { Button, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function Explore() {
    return (
        <SafeAreaView>
            <Button onPress={() => router.back()} title='Back' />
        </SafeAreaView>
    );
}