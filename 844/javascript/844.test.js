const backspaceCompare = require('./main');

const sources = [
    {
        s: 'ab#c',
        t: 'ad#c',
        expectation: true,
    },
    {
        s: 'ab##',
        t: 'c#d#',
        expectation: true,
    },
    {
        s: 'a#c',
        t: 'b',
        expectation: false,
    },
    {
        s: 'xywrrmp',
        t: 'xywrrmu#p',
        expectation: true,
    },
    {
        s: 'y#fo##f',
        t: 'y#f#o##f',
        expectation: true,
    },
];

describe('844. Backspace String Compare', () => {
    sources.forEach(({ s, t, expectation }, i) => {
        it(`844: case ${i + 1}, s - ${s}, t - ${t}`, () => {
            expect(backspaceCompare(s, t)).toBe(expectation);
        });
    });
});
