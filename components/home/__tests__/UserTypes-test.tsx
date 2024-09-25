import { UserType } from '@/types';
import { render } from '@testing-library/react-native';
import UserTypeItem from '../UserTypeItem';
import UserTypes from '../UserTypes';
import { capitalizeWords } from '@/utils';

describe('<UserTypes />', () => {
    it('should render UserTypes component correctly with given props', () => {
        const list = [UserType.ADMIN, UserType.MANAGER]

        const selectedValue = UserType.ADMIN;
        const setSelectedValue = jest.fn();

        const { getByText } = render(
            <UserTypes list={list} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        );

        expect(getByText('User Types')).toBeTruthy();
        list.forEach(item => {
            expect(getByText(capitalizeWords(item))).toBeTruthy();
        });
    });

    it('should handle an empty list without errors', () => {
        const list: UserType[] = []
        const selectedValue = UserType.ADMIN;
        const setSelectedValue = jest.fn();

        const { getByText, queryByText } = render(
            <UserTypes list={list} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        );

        expect(getByText('User Types')).toBeTruthy();
        expect(queryByText('Admin')).toBeNull();
        expect(queryByText('Manager')).toBeNull();
    });

    test('snapshot', () => {
        const list = [UserType.ADMIN, UserType.MANAGER]
        const selectedValue = UserType.ADMIN;
        const setSelectedValue = jest.fn();
        const tree = render(<UserTypes list={list} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
