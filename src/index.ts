import { merge01 } from './merge-array1';
import { merge02 } from './merge-array2';
import { checkWord } from './wordle';
import { calculateVotes, round, calcPerVotes, totalPrecinct } from './elections';

// codes for Merging Arrays - part 1 -
const array1: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array2: Array<number> = [18, 74, 88, 3, 7, 44, 108];

const mergedArr1: Array<number> = merge01(array1, array2);
console.log(mergedArr1);

// codes for Merging Arrays - part 2 -
const array3: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array4: Array<number> = [18, 74, 88, 3];

const mergedArr2: Array<number> = merge02(array3, array4);
console.log(mergedArr2);

const mergedArr3: Array<number> = merge02(array4, array3);
console.log(mergedArr3);

// codes for Wordle
const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

// codes for Elections
const candidates: Array<Candidate> = [
  {
    name: 'Edward Underwood',
    votes: [192, 147, 186, 114, 267],
    funding: 58182890,
  },
  {
    name: 'Rose Olson',
    votes: [48, 90, 12, 21, 13],
    funding: 78889263,
  },
  {
    name: 'Leonard Willis',
    votes: [206, 312, 121, 408, 382],
    funding: 36070689,
  },
  {
    name: 'Nathaniel Taylor',
    votes: [37, 21, 38, 39, 29],
    funding: 6317921937,
  },
];

const totalPerCand: Array<number> = candidates.map(calculateVotes);
const pctPerCand: Array<number> = calcPerVotes(totalPerCand, candidates.length);

for (let i = 0; i < candidates.length; i += 1) {
  console.log(`${candidates[i].name} -- ${totalPerCand[i]} votes -- ${pctPerCand[i]}%`);
}

const precinctVotes: Array<number> = totalPrecinct(candidates, candidates.length);
const votePercent = [];

for (let i = 0; i < candidates.length; i += 1) {
  console.log(`${candidates[i].name}:\n`);
  for (let j = 0; j < candidates[0].votes.length; j += 1) {
    votePercent[j] = round((candidates[i].votes[j] / precinctVotes[j]) * 100);
    console.log(`  Precinct ${j + 1} -- ${votePercent[j]}%`);
  }
}
