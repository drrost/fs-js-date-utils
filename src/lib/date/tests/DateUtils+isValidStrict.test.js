import {DateUtils} from "../DateUtils.jsx";

describe('isValidStrict', () => {
    it('Empty string should be false', () => {
        // g
        const date = '';

        // w
        const result = DateUtils.isValidStrict(date);

        // t
        expect(result).toEqual(false);
    });

    it('Correct date should be true', () => {
        // g
        const date = '23.12.2022';

        // w
        const result = DateUtils.isValidStrict(date);

        // t
        expect(result).toEqual(true);
    });

    it('Two digits year date should be false', () => {
        // g
        const date = '23.12.20';

        // w
        const result = DateUtils.isValidStrict(date);

        // t
        expect(result).toEqual(false);
    });
});
