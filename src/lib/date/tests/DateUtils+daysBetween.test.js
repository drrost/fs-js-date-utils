import {daysBetween} from "../DateUtils.jsx";

describe('daysBetween', () => {
    it('1 day diff', () => {
        // g
        const date1 = '11.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = daysBetween(date1, date2);

        // t
        expect(result).toEqual(1);
    });

    it('2 day diff', () => {
        // g
        const date1 = '10.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = daysBetween(date1, date2);

        // t
        expect(result).toEqual(2);
    });

    it('-1 day diff', () => {
        // g
        const date1 = '13.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = daysBetween(date1, date2);

        // t
        expect(result).toEqual(-1);
    });
});
