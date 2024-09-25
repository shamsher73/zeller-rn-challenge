
import { render } from '@testing-library/react-native';
import { ThemedText } from '../ThemedText';

describe('<ThemedText />', () => {
    test('Text renders correctly on ThemedText', () => {
        const { getByText } = render(<ThemedText>Rabbit</ThemedText>);

        getByText('Rabbit');
    });

    test('snapshot', () => {
        const tree = render(<ThemedText>Rabbit</ThemedText>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
