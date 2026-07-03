#! /usr/bin/env node

const {program} = require("commander");
const list = require("./commands/list");

program
    .command('list')
    .description('List GitHub trending repos')
    .option('--duration <string>', 'Get repos younger than the given duration', 'week')
    .option('--limit <numer>', 'Number of repos to return', 10)
    .action(list);

program.parse();