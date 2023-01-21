function calculateVotes(applicant: Candidate): number {
  let totalVotes = 0;
  for (let i = 0; i < applicant.votes.length; i += 1) {
    totalVotes += applicant.votes[i];
  }
  return totalVotes;
}

// round a number to 2 decimal places
const round = (value: number): number => Math.round(100 * value) / 100;

function calcPerVotes(totalVotesPerCand: Array<number>, numOfApp: number): Array<number> {
  let totalVotes = 0;
  const percentVotesPerCand: Array<number> = [];

  for (let i = 0; i < numOfApp; i += 1) {
    totalVotes += totalVotesPerCand[i];
  }
  for (let i = 0; i < numOfApp; i += 1) {
    percentVotesPerCand[i] = round((totalVotesPerCand[i] / totalVotes) * 100);
  }

  return percentVotesPerCand;
}

function totalPrecinct(precinct: Array<Candidate>, numOfApp: number): Array<number> {
  const totalPre: Array<number> = [];
  for (let i = 0; i < precinct[0].votes.length; i += 1) {
    let tempPre = 0;
    for (let j = 0; j < numOfApp; j += 1) {
      tempPre += precinct[j].votes[i];
    }
    totalPre.push(tempPre);
  }
  return totalPre;
}

export { calculateVotes, round, calcPerVotes, totalPrecinct };
