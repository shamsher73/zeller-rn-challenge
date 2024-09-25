import { render } from '@testing-library/react-native';
import CustomerList from '../CustomerList';
import { User, UserType } from '@/types';

describe('<CustomerList />', () => {

    it('should render a list of users based on the selected role', () => {
        const items = [
            { id: '1', name: 'John Doe', role: 'ADMIN' },
            { id: '2', name: 'Jane Smith', role: 'ADMIN' }
        ];
        const selectedValue = UserType.ADMIN;
        const getUsers = jest.fn()
        const { getByText } = render(<CustomerList items={items} selectedValue={selectedValue} getUsers={getUsers} />);
        expect(getByText('Admin Users')).toBeTruthy();
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByText('Jane Smith')).toBeTruthy();
    });

    it('should display role in customer list based on selected role', () => {
        const items = [
            { id: '1', name: 'John Doe', role: 'ADMIN' },
            { id: '2', name: 'Jane Smith', role: 'MANAGER' }
        ];
        const selectedValue = UserType.ADMIN;
        const getUsers = jest.fn()
        const { getByText } = render(<CustomerList items={items} selectedValue={selectedValue} getUsers={getUsers} />);
        expect(getByText('Admin Users')).toBeTruthy();
        expect(getByText('Admin')).toBeTruthy();
    });


    it('should handle empty list of users gracefully', () => {
        const items: User[] = [];
        const selectedValue = UserType.MANAGER;
        const getUsers = jest.fn()
        const { getByText, queryByText } = render(<CustomerList items={items} selectedValue={selectedValue} getUsers={getUsers} />);
        expect(getByText('Manager Users')).toBeTruthy();
        expect(queryByText('No users found')).toBeTruthy();
    });

    test('snapshot', () => {
        const items = [
            { id: '1', name: 'John Doe', role: 'ADMIN' },
            { id: '2', name: 'Jane Smith', role: 'ADMIN' }
        ];
        const selectedValue = UserType.ADMIN;
        const getUsers = jest.fn()
        const tree = render(<CustomerList items={items} selectedValue={selectedValue} getUsers={getUsers} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
