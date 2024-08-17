const queries = {
    userProfileInfo: `
      query userProfileInfo($username: String!) {
        matchedUser(username: $username) {
          username
          githubUrl
          profile {
            ranking
            userAvatar
            realName
            countryName
            skillTags
            reputation
            reputationDiff
            solutionCount
            solutionCountDiff
          }
        }
      }
    `,
    userLanguageStats: `
      query userLanguageStats($username: String!) {
        matchedUser(username: $username) {
          languageProblemCount {
            languageName
            problemsSolved
          }
        }
      }
    `,
    userProblemsSolved: `
      query userProblemsSolved($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          problemsSolvedBeatsStats {
            difficulty
            percentage
          }
        }
      }
    `,
    userActivityStats: `
      query userActivityStats($username: String!, $year: Int) {
        matchedUser(username: $username) {
          userCalendar(year: $year) {
            streak
            totalActiveDays
          }
        }
      }
    `
  };

module.exports = queries;