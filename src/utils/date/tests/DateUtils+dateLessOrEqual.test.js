import {dateLessOrEqual} from "../DateUtils.js";

describe('dateLessOrEqual', () => {
    it('less should return true', () => {
        // g
        const date1 = '11.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });

    it('equal should return true', () => {
        // g
        const date1 = '12.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });

    it('greater should return false', () => {
        // g
        const date1 = '14.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(false);
    });

    it('less should return true', () => {
        // g
        const date1 = '11.01.2000';
        const date2 = '01.12.2000';

        // w
        const result = dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });
});
