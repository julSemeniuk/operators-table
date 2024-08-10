import { formatIsoDateTime } from './helpers';

describe('formatIsoDateTime', () => {
    it('should correctly format a valid ISO date string', () => {
        const isoDateString = '2024-07-28T23:13:51.076Z';
        const result = formatIsoDateTime(isoDateString);
        expect(result).toBe('29.07.2024 02:13');
    });

    it('should correctly format a date-only ISO string', () => {
        const isoDateString = '2024-07-29';
        const result = formatIsoDateTime(isoDateString);
        expect(result).toBe('29.07.2024 03:00');
    });

    it('should return "Invalid Date Invalid Date" for an invalid ISO date string', () => {
        const invalidIsoDateString = 'invalid-date';
        const result = formatIsoDateTime(invalidIsoDateString);
        expect(result).toBe('Invalid Date Invalid Date');
    });

    it('should return "Invalid Date Invalid Date" for an empty string as input', () => {
        const result = formatIsoDateTime('');
        expect(result).toBe('Invalid Date Invalid Date');
    });
});
