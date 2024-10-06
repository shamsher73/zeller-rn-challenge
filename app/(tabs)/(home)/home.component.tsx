import { StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';
import UserTypes from '@/components/home/UserTypes';
import { Colors } from '@/constants/Colors';
import CustomerList from '@/components/home/CustomerList';
import { Customer, UserType } from '@/types';

type HomeProps = {
    isLoading: boolean;
    list: UserType[];
    filterItems: Customer[];
    selectedValue: UserType;
    refetch: () => void;
    setSelectedValue: (type: UserType) => void
    filterUsers: (text: string) => void;
}


export default function HomeComponent({
    isLoading,
    list,
    filterItems,
    selectedValue,
    refetch,
    setSelectedValue,
    filterUsers
}: HomeProps) {

    if (isLoading) return <ActivityIndicator />;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <UserTypes
                    list={list}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
                <CustomerList
                    items={filterItems}
                    selectedValue={selectedValue}
                    getUsers={refetch}
                    filterUsers={filterUsers}
                    isLoading={isLoading}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1
    },
    subContainer: {
        padding: 24,
        flex: 1,
    },
});
