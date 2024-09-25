import { StyleSheet, View } from 'react-native';
import UserTypeItem from './UserTypeItem';
import { ThemedText } from '../ThemedText';
import { UserType } from '@/types';
import Divider from '../Divider';

type UserTypesProps = {
    list: UserType[],
    selectedValue: UserType,
    setSelectedValue: (title: UserType) => void
}

export default function UserTypes(props: UserTypesProps) {
    const { list, selectedValue, setSelectedValue } = props
    const UserList = () => {
        return list.map((item, index) => {
            return <UserTypeItem key={index} title={item} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        })
    }

    return (
        <View>
            <ThemedText type='title'>User Types</ThemedText>
            <View style={styles.listContainer} >
                {UserList()}
            </View>
            <Divider />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 20
    }
});
