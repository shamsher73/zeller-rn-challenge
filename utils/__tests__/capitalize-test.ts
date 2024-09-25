import { capitalizeWords } from "..";

describe('capitalize function test', () => {
    it('should capitalize all words in a sentence', () => {
        const input = 'hello world';
        const expectedOutput = 'Hello World';
        const result = capitalizeWords(input);
        expect(result).toBe(expectedOutput);
    });


    it('should return an empty string when input is empty', () => {
        const input = '';
        const expectedOutput = '';
        const result = capitalizeWords(input);
        expect(result).toBe(expectedOutput);
    });

    it('should capitalize first letter of a single word', () => {
        const input = 'hello';
        const expectedOutput = 'Hello';
        const result = capitalizeWords(input);
        expect(result).toBe(expectedOutput);
    });
});
