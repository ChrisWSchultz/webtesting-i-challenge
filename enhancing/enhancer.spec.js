const enhancer = require('./enhancer.js');

describe('enhancer', () => {
    it('repairs', () => {
        expect(enhancer.repair({
            name: "item",
            enhancement: 0,
            durability: 10,
        })).toEqual({
            name: "item",
            enhancement: 0,
            durability: 100,
        });
    });

    it('success', () => {
        expect(enhancer.success({
            name: "item",
            enhancement: 0,
            durability: 100,
        })).toEqual({
            name: "item",
            enhancement: 1,
            durability: 100,
        });

        expect(enhancer.success({
            name: "item",
            enhancement: 20,
            durability: 80,
        })).toEqual({
            name: "item",
            enhancement: 20,
            durability: 80,
        });
    });

    it('fail', () => {
        expect(enhancer.fail({
            name: "item",
            enhancement: 0,
            durability: 100,
        })).toEqual({
            name: "item",
            enhancement: 0,
            durability: 95,
        });

        expect(enhancer.fail({
            name: "item",
            enhancement: 16,
            durability: 100,
        })).toEqual({
            name: "item",
            enhancement: 16,
            durability: 90,
        });

        expect(enhancer.fail({
            name: "item",
            enhancement: 20,
            durability: 100,
        })).toEqual({
            name: "item",
            enhancement: 19,
            durability: 90,
        });
    });

    it('get', () => {
        expect(enhancer.get({
            name: 'thing',
            enhancement: 0,
            durability: 5
        })).toEqual({
            name: 'thing',
            enhancement: 0,
            durability: 5
        });

        expect(enhancer.get({
            name: 'thing',
            enhancement: 20,
            durability: 100
        })).toEqual({
            name: '[+20] thing',
            enhancement: 20,
            durability: 100
        });
    });
});
