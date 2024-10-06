import { fireEvent, render } from '@testing-library/react-native';
import UserTypeItem from '../UserTypeItem';
import { Colors } from '@/constants/Colors';
import { UserType } from '@/types';

describe('<UserTypeItem />', () => {

    it('should render correctly with given props', () => {
        const props = {
            title: UserType.ADMIN,
            selectedValue: UserType.ADMIN,
            setSelectedValue: jest.fn()
        };
        const { getByText } = render(<UserTypeItem {...props} />);
        expect(getByText('Admin')).toBeTruthy();
    });


    it('should call setSelectedValue with title on press', () => {
        const props = {
            title: UserType.ADMIN,
            selectedValue: UserType.ADMIN,
            setSelectedValue: jest.fn()
        };
        const { getByTestId } = render(<UserTypeItem {...props} />);
        fireEvent.press(getByTestId('user-type-item'));
        expect(props.setSelectedValue).toHaveBeenCalledWith('ADMIN');
    });

    it('should apply correct background color when selected', () => {
        const props = {
            title: UserType.ADMIN,
            selectedValue: UserType.ADMIN,
            setSelectedValue: jest.fn()
        };
        const { getByTestId } = render(<UserTypeItem {...props} />);
        const userTypeItem = getByTestId('user-type-item');
        expect(userTypeItem.props.style.backgroundColor).toBe(Colors.secondary);
    });

    test('snapshot', () => {
        const props = {
            title: UserType.ADMIN,
            selectedValue: UserType.ADMIN,
            setSelectedValue: jest.fn()
        };
        const tree = render(<UserTypeItem {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
