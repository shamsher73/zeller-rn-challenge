import ListItem from '@/components/home/ListItem';
import { render } from '@testing-library/react-native';

describe('<ListItem />', () => {

    it('should render correctly when provided with valid user data', () => {
        const user = { id: "123", name: "David Miller", role: "ADMIN" }
        const { getByText } = render(<ListItem user={user} />);

        expect(getByText('David Miller')).toBeTruthy();
        expect(getByText('Admin')).toBeTruthy();
    });

    it('should handle user with an empty name string', () => {
        const user = { id: "123", name: '', role: 'ADMIN' };
        const { getByText } = render(<ListItem user={user} />);

        expect(getByText('Admin')).toBeTruthy();
    });

    it('should display first character of user name in LetterBox', () => {
        const user = { id: "123", name: "David Miller", role: "ADMIN" }
        const { getByText } = render(<ListItem user={user} />);

        expect(getByText('D')).toBeTruthy();
    });

    it('should render correctly when provided with user with an empty role string', () => {
        const user = { id: "123", name: 'David Miller', role: '' };
        const { getByText } = render(<ListItem user={user} />);

        expect(getByText('David Miller')).toBeTruthy();
        expect(getByText('')).toBeTruthy();
    });

    test('snapshot', () => {
        const user = { id: "123", name: "David Miller", role: "ADMIN" }
        const tree = render(<ListItem user={user} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
