import {DateUtils} from "../DateUtils.jsx";

describe('getTimeDiffInHours', () => {
    it('Equal times should be 0', () => {
        // g
        const dateTime1 = '12.03.2023 12:44';
        const dateTime2 = '12.03.2023 12:44';

        // w
        const result = DateUtils.getTimeDiffInHours(dateTime1, dateTime2);

        // t
        expect(result).toEqual(0);
    });

    it('One more minutes should be 1', () => {
        // g
        const dateTime1 = '12.03.2023 12:00';
        const dateTime2 = '12.03.2023 12:01';

        // w
        const result = DateUtils.getTimeDiffInHours(dateTime1, dateTime2);

        // t
        expect(result).toEqual(1);
    });

    it('One less minutes should be 1', () => {
        // g
        const dateTime1 = '12.03.2023 12:00';
        const dateTime2 = '12.03.2023 11:59';

        // w
        const result = DateUtils.getTimeDiffInHours(dateTime1, dateTime2);

        // t
        expect(result).toEqual(-0);
    });
});
