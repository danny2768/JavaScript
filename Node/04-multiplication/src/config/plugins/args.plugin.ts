import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'Name of the file'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Destination of the file'
    })
    .check((argv, options) => {
        // -b --base
        if (isNaN(argv.b)) throw 'Error: The base must be a number'
        if (argv.b < 1) throw 'Error: The base must be greater than 0'

        // -l --limit
        if (isNaN(argv.l)) throw 'Error: The limit must be a number'
        if (argv.l < 0) throw 'Error: The limit must be greater than 1'

        // -s --show
        if (typeof argv.s !== 'boolean') throw 'The show must be a boolean'

        // -n --name
        if (typeof argv.n !== 'string') throw 'The name must be a string'

        // -d --destination
        if (typeof argv.d !== 'string') throw 'The destination must be a string'


        return true;
    })
    .parseSync()
    