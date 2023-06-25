import {DateUtils} from "../../DateUtils.js";
import {ACCUSATIVE} from "../../DateUtils+humanReadable.js";

describe('getTimeDiffHumanReadable', () => {

    // Accusative
    //
    it('1 minute', () => {
        // g
        const dateTime1 = '12.03.2023 12:44';
        const dateTime2 = '12.03.2023 12:45';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('1 хвилину');
    });

    it('2 minutes', () => {
        // g
        const dateTime1 = '12.03.2023 12:44';
        const dateTime2 = '12.03.2023 12:46';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('2 хвилини');
    });

    it('10 minutes', () => {
        // g
        const dateTime1 = '12.03.2023 12:54';
        const dateTime2 = '12.03.2023 13:04';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('10 хвилин');
    });

    it('1 hour', () => {
        // g
        const dateTime1 = '12.03.2023 12:54';
        const dateTime2 = '12.03.2023 13:54';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('1 годину');
    });

    it('1 hour 1 minute', () => {
        // g
        const dateTime1 = '12.03.2023 12:54';
        const dateTime2 = '12.03.2023 13:55';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('1 годину 1 хвилину');
    });

    it('1 day 1 hour 1 minute', () => {
        // g
        const dateTime1 = '12.03.2023 12:54';
        const dateTime2 = '13.03.2023 13:55';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('1 добу 1 годину 1 хвилину');
    });

    it('1 day 2 hours 1 minute', () => {
        // g
        const dateTime1 = '12.03.2023 12:54';
        const dateTime2 = '13.03.2023 14:55';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('1 добу 2 години 1 хвилину');
    });

    it('11 minutes', () => {
        // g
        const dateTime1 = '12.03.2023 12:30';
        const dateTime2 = '12.03.2023 12:41';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('11 хвилин');
    });

    it('11 hours', () => {
        // g
        const dateTime1 = '12.03.2023 09:30';
        const dateTime2 = '12.03.2023 20:30';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('11 годин');
    });

    it('15 days', () => {
        // g
        const dateTime1 = '12.02.2023 09:30';
        const dateTime2 = '27.02.2023 09:30';

        // w
        const result = DateUtils.humanReadableDiff(dateTime1, dateTime2, ACCUSATIVE);

        // t
        expect(result).toEqual('15 діб');
    });
});
