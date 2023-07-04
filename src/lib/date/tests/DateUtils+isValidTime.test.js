import {DateUtils} from "../DateUtils.jsx";

describe('isValidTime', () => {
    it('Empty string should be false', () => {
        // g
        const time = '';

        // w
        const result = DateUtils.isValidTime(time);

        // t
        expect(result).toEqual(false);
    });

    it('Correct time returns true', () => {
        // g
        const time = '11:34';

        // w
        const result = DateUtils.isValidTime(time);

        // t
        expect(result).toEqual(true);
    });

    it('Any string returns false', () => {
        // g
        const time = 'asdfa:KJ98u9';

        // w
        const result = DateUtils.isValidTime(time);

        // t
        expect(result).toEqual(false);
    });

    it('Zero time returns true', () => {
        // g
        const time = '00:00';

        // w
        const result = DateUtils.isValidTime(time);

        // t
        expect(result).toEqual(true);
    });

    it('Leading zero hour returns true', () => {
        // g
        const time = '08:00';

        // w
        const result = DateUtils.isValidTime(time);

        // t
        expect(result).toEqual(true);
    });

    it('Absent leading zero hour returns false', () => {
        // g
        const time = '8:00';

        // w
        const result = DateUtils.isValidTime(time);

        // t
        expect(result).toEqual(false);
    });
});
