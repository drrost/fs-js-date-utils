import {describe, expect, it} from 'vitest'
import {DateUtils} from './index'

describe('HelloWorld', () => {
    it('less should return true', () => {
        // g
        const date1 = '11.12.2000';
        const date2 = '12.12.2000';

        // w
        const result = DateUtils.dateLessOrEqual(date1, date2);

        // t
        expect(result).toEqual(true);
    });
})
