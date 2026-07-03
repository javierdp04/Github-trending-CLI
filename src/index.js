#! /usr/bin/env node

import { program } from "commander";
import list from "./commands/list.js";

program
    .command('list')
    .description('List GitHub trending repos')
    .option('--duration <string>', 'Get repos younger than the given duration', 'week')
    .option('--limit <numer>', 'Number of repos to return', 10)
    .action(list);

program.parse();