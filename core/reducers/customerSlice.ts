import { Customer, UserType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { filterItemsWithNameRole, filterItemsWithRole } from '../utils'

export interface CustomerState {
    value: number,
    listItems: Customer[],
    filterItems: Customer[],
    userList: UserType[],
    selectedUserType: UserType
}

const initialState: CustomerState = {
    value: 0,
    listItems: [],
    filterItems: [],
    userList: [UserType.ADMIN, UserType.MANAGER],
    selectedUserType: UserType.ADMIN,
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setListItems: (state, action: PayloadAction<Customer[]>) => {
            state.listItems = action.payload;
            state.filterItems = filterItemsWithRole(action.payload, state.selectedUserType)
        },
        filterListItems: (state, action: PayloadAction<string>) => {
            if (action.payload !== '') {
                state.filterItems = filterItemsWithNameRole(state.listItems, state.selectedUserType, action.payload)
            } else {
                state.filterItems = filterItemsWithRole(state.listItems, state.selectedUserType)
            }
        },
        selectUserType: (state, action: PayloadAction<UserType>) => {
            state.selectedUserType = action.payload
            state.filterItems = filterItemsWithRole(state.listItems, action.payload)
        },
        reset: (state) => {
            state.listItems = [];
            state.filterItems = [];
        },
    },
})

export const { setListItems, filterListItems, selectUserType } = customerSlice.actions

export default customerSlice.reducer