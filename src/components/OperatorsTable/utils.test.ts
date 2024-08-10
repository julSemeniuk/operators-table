import { getDefaultOperatorTableHeaderName } from './utils';

describe('getDefaultOperatorTableHeaderName', () => {
    it('should format camelCase field name by capitalizing and splitting words', () => {
        const result = getDefaultOperatorTableHeaderName('createdAt');
        expect(result).toBe('Created at');
    });

    it('should capitalize single word field name', () => {
        const result = getDefaultOperatorTableHeaderName('name');
        expect(result).toBe('Name');
    });
});
