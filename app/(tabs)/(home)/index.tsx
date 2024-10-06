import { useAppDispatch, useAppSelector } from '@/core/store/hooks';
import HomeComponent from './home.component';
import { useGetCustomerQuery } from '@/api/customerApi';
import { UserType } from '@/types';
import { filterListItems, selectUserType } from '@/core/reducers/customerSlice';
import { Alert } from 'react-native';

export default function HomeContainer() {
  const list = useAppSelector((state) => state.customer.userList)
  const filterItems = useAppSelector((state) => state.customer.filterItems)
  const selectedValue = useAppSelector((state) => state.customer.selectedUserType)

  const dispatch = useAppDispatch()
  const { refetch, isLoading, isError } = useGetCustomerQuery()

  if (isError) Alert.alert("Api error occurred");

  return (
    <HomeComponent
      isLoading={isLoading}
      list={list}
      filterItems={filterItems}
      selectedValue={selectedValue}
      refetch={refetch}
      setSelectedValue={(type: UserType) => dispatch(selectUserType(type))}
      filterUsers={(name: string) => dispatch(filterListItems(name))}
    />
  );
}