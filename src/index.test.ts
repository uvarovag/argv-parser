import { getArgVal, parseArgv } from './'

describe('getArgVal', () => {
    it('should return true for empty string', () => {
        expect(getArgVal('')).toBe(true)
    })

    it('should return true for "true"', () => {
        expect(getArgVal('true')).toBe(true)
    })

    it('should return false for "false"', () => {
        expect(getArgVal('false')).toBe(false)
    })

    it('should return a number for numeric strings', () => {
        expect(getArgVal('42')).toBe(42)
        expect(getArgVal('3.14')).toBe(3.14)
        expect(getArgVal('-10')).toBe(-10)
    })

    it('should return the original string for non-numeric strings', () => {
        expect(getArgVal('hello')).toBe('hello')
        expect(getArgVal('foo=bar')).toBe('foo=bar')
    })

    it('should handle edge cases', () => {
        expect(getArgVal('0')).toBe(0)
        expect(getArgVal('NaN')).toBe('NaN')
        expect(getArgVal('undefined')).toBe('undefined')
    })
})

describe('parseArgv', () => {
    it('should parse arguments with key-value pairs', () => {
        const argv = [
            'node',
            'script.js',
            '--foo=bar',
            '--num=42',
            '--flag1=true',
            '--flag2=true===hello',
            '--flag3=true==hello=my==@=!==little=324==pony',
        ]
        const result = parseArgv(argv)

        expect(result).toEqual({
            node: 'node',
            script: 'script.js',
            foo: 'bar',
            num: 42,
            flag1: true,
            flag2: 'true===hello',
            flag3: 'true==hello=my==@=!==little=324==pony',
        })
    })

    it('should parse arguments with flags (no value)', () => {
        const argv = ['node', 'script.js', '--flag', '--anotherFlag']
        const result = parseArgv(argv)

        expect(result).toEqual({ node: 'node', script: 'script.js', flag: true, anotherFlag: true })
    })

    it('should handle mixed arguments (flags and key-value pairs)', () => {
        const argv = ['node', 'script.js', '--flag', '--foo=bar', '--num=3.14']
        const result = parseArgv(argv)

        expect(result).toEqual({ node: 'node', script: 'script.js', flag: true, foo: 'bar', num: 3.14 })
    })

    it('should handle empty values', () => {
        const argv = ['node', 'script.js', '--empty=']
        const result = parseArgv(argv)

        expect(result).toEqual({ node: 'node', script: 'script.js', empty: true })
    })

    it('should handle numeric values', () => {
        const argv = ['node', 'script.js', '--positive=42', '--negative=-10', '--float=3.14']
        const result = parseArgv(argv)

        expect(result).toEqual({ node: 'node', script: 'script.js', positive: 42, negative: -10, float: 3.14 })
    })

    it('should handle boolean values', () => {
        const argv = ['node', 'script.js', '--true=true', '--false=false']
        const result = parseArgv(argv)

        expect(result).toEqual({ node: 'node', script: 'script.js', true: true, false: false })
    })

    it('should handle non-numeric strings', () => {
        const argv = ['node', 'script.js', '--text=hello', '--special=foo=bar']
        const result = parseArgv(argv)

        expect(result).toEqual({ node: 'node', script: 'script.js', text: 'hello', special: 'foo=bar' })
    })
})
