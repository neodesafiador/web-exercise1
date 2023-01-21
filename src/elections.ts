// Calculate the total number of votes
function calculateVotes(applicant: Candidate): number {
  let totalVotes = 0;
  for (let i = 0; i < applicant.votes.length; i += 1) {
    totalVotes += applicant.votes[i];
  }
  return totalVotes;
}

// Calculate the total number of votes received by each candidate and
// the percent of the total votes cast
function calcPerVotes(totalVotesPerCand: Array<number>, numOfApp: number): Array<number> {
  let totalVotes = 0;
  const percentVotesPerCand: Array<number> = [];

  for (let i = 0; i < numOfApp; i += 1) {
    totalVotes += totalVotesPerCand[i];
  }
  for (let i = 0; i < numOfApp; i += 1) {
    percentVotesPerCand[i] = (totalVotesPerCand[i] / totalVotes) * 100;
  }

  return percentVotesPerCand;
}

// Calculate the total number of votes for each precinct
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

// Calculate the amount spent per vote by each candidate
function calcSpent(applicant: Array<Candidate>, totalPerCand: Array<number>): Array<number> {
  const spentArr: Array<number> = [];
  for (let i = 0; i < applicant.length; i += 1) {
    spentArr[i] = applicant[i].funding / totalPerCand[i];
  }

  return spentArr;
}

export { calculateVotes, calcPerVotes, totalPrecinct, calcSpent };
