import { merge01 } from './merge-array1';
import { merge02 } from './merge-array2';
import { checkWord } from './wordle';
import { calculateVotes, calcPerVotes, totalPrecinct, calcSpent } from './elections';

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

console.log(`\n`);

// codes for Wordle
const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

console.log(`\n`);

// codes for Elections
// part 1
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

// part 2-1
const totalPerCand: Array<number> = candidates.map(calculateVotes);
const pctPerCand: Array<number> = calcPerVotes(totalPerCand, candidates.length);

for (let i = 0; i < candidates.length; i += 1) {
  console.log(
    `${candidates[i].name} -- ${totalPerCand[i]} votes -- ${Number(pctPerCand[i]).toFixed(2)}%`
  );
}

// part 2-2
const precinctVotes: Array<number> = totalPrecinct(candidates, candidates.length);
const votePercent = [];

for (let i = 0; i < candidates.length; i += 1) {
  console.log(`\n${candidates[i].name}:`);
  for (let j = 0; j < candidates[0].votes.length; j += 1) {
    votePercent[j] = (candidates[i].votes[j] / precinctVotes[j]) * 100;
    console.log(`  Precinct ${j + 1} -- ${Number(votePercent[j]).toFixed(2)}%`);
  }
}

console.log(`\n`);

// part 2-3
const spentArr: Array<number> = calcSpent(candidates, totalPerCand);
for (let i = 0; i < candidates.length; i += 1) {
  console.log(`${candidates[i].name} spent  $${Number(spentArr[i]).toFixed(2)} per vote`);
}

// part 3
let foundWinner = false;
for (let i = 0; i < candidates.length; i += 1) {
  if (pctPerCand[i] >= 50) {
    foundWinner = true;
    console.log(`\n${candidates[i].name} is the winner!!`);
  }
}

if (!foundWinner) {
  let candi1 = pctPerCand[0];
  let candi2 = pctPerCand[1];
  let temp = 0;
  let name1 = candidates[0].name;
  let name2 = candidates[1].name;
  let tempName: string;
  if (candi1 < candi2) {
    temp = candi1;
    tempName = name1;
    candi1 = candi2;
    name1 = name2;
    candi2 = temp;
    name2 = tempName;
  }
  for (let i = 0; i < candidates.length - 2; i += 1) {
    if (candi2 < pctPerCand[i + 2]) {
      candi2 = pctPerCand[i + 2];
      name2 = candidates[i + 2].name;
      if (candi1 < candi2) {
        temp = candi1;
        tempName = name1;
        candi1 = candi2;
        name1 = name2;
        candi2 = temp;
        name2 = tempName;
      }
    }
  }
  console.log(
    `\nRun-off between the two candidates - ${name1} and ${name2} - receiving the highest number of votes`
  );
}
