import {DateUtils} from "../DateUtils.js";

describe('getFormattedTime', () => {
    it('Midnight', () => {
        // g
        const date = new Date();
        date.setMinutes(0);
        date.setHours(0);

        // w
        const result = DateUtils.getFormattedTime(date);

        // t
        expect(result).toEqual('00:00');
    });

    it('Full time', () => {
        // g
        const date = new Date();
        date.setMinutes(56);
        date.setHours(11);

        // w
        const result = DateUtils.getFormattedTime(date);

        // t
        expect(result).toEqual('11:56');
    });

    it('Full one digit minutes', () => {
        // g
        const date = new Date();
        date.setMinutes(1);
        date.setHours(11);

        // w
        const result = DateUtils.getFormattedTime(date);

        // t
        expect(result).toEqual('11:01');
    });
});
