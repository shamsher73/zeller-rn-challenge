import { StyleSheet, SafeAreaView, View, ActivityIndicator, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { ListZellerCustomers } from '@/graphql/queries';
import UserTypes from '@/components/home/UserTypes';
import { User, UserType } from '@/types';
import { Colors } from '@/constants/Colors';
import CustomerList from '@/components/home/CustomerList';
import { ApiClient } from '@/services/Api';
import _ from 'lodash';

export default function HomeScreen() {

  const list: UserType[] = [UserType.ADMIN, UserType.MANAGER]
  const [selectedValue, setSelectedValue] = useState<UserType>(UserType.ADMIN)
  const [listItems, setListItems] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await ApiClient.graphql({
          query: ListZellerCustomers,
        });
        setListItems(_.get(result, 'data.listZellerCustomers.items', []))
      } catch (err) {
        Alert.alert('Failed to fetch customers')
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [selectedValue]);

  if (loading) return <ActivityIndicator />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <UserTypes list={list} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        <CustomerList items={listItems} selectedValue={selectedValue} />
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
  },
});
