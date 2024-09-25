import { render } from '@testing-library/react-native';
import LetterBox from '../LetterBox';

describe('<LetterBox />', () => {

    it('should render the character when passed as a prop', () => {
        const { getByText } = render(<LetterBox character="A" />);
        expect(getByText("A")).toBeTruthy();
    });

    it('should render empty character when passed as an empty string prop', () => {
        const { getByText } = render(<LetterBox character="" />);
        expect(getByText("")).toBeTruthy();
    });

    test('snapshot', () => {
        const tree = render(<LetterBox character={"S"} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
