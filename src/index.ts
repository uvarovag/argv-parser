export type TArgvReturn = string | number | boolean
export type TGetArgVal = (val: string) => TArgvReturn
export type TParseArgv = (argv: string[]) => Record<string, TArgvReturn>

export const getArgVal: TGetArgVal = (val) => {
    switch (val) {
        case '': {
            return true
        }
        case 'true': {
            return true
        }
        case 'false': {
            return false
        }
        default: {
            return Number.isNaN(Number(val)) ? val : Number(val)
        }
    }
}

export const parseArgv: TParseArgv = (argv) => {
    const [node, script, ...rest] = argv
    const args = Object.fromEntries(
        rest.map((arg) => {
            const [key, ...rest] = arg.split('=')
            return [key.replace(/^-+/, ''), getArgVal(rest.join('='))]
        })
    )
    return { node, script, ...args }
}
