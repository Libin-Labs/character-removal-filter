import * as api from '@lp-labs/character-removal-filter';
import { removeCharacters } from '@lp-labs/character-removal-filter';
console.log(removeCharacters('banana', 'an'));
// @ts-expect-error invalid argument must be rejected by declarations
api.removeCharacters(1, 'a');
