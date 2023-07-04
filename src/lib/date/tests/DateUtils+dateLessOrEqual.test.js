import {describe, expect, it, test} from 'vitest'
import {DateUtils} from "../DateUtils";

describe('dateLessOrEqual', () => {
    it('less should return true', () => {
        // g
        const date1 = '11.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = DateUtils.dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });

    test('equal should return true', () => {
        // g
        const date1 = '12.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = DateUtils.dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });

    test('greater should return false', () => {
        // g
        const date1 = '14.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = DateUtils.dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(false);
    });

    test('less should return true', () => {
        // g
        const date1 = '11.01.2000';
        const date2 = '01.12.2000';

        // w
        const result = DateUtils.dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });
});
