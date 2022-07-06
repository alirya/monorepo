import DeepMerge from 'deepmerge';
import UniqueParameters from '@alirya/array/unique-parameters.js';
import Json from './json/json.js';
import Sort from './object/sort.js';

/**
 * merge package to main, replacing all main
 *
 * @param main
 * @param packages
 */
export default function MergeLeft(main : object, packages : Json[]) : Json[] {

  for(const match of packages) {

    match.object = Sort(DeepMerge(main, match.object, {
      arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
    }));
  }

  return packages;
}



