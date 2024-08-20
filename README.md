# leetcode-stats-api

A RESTful API that provides an interface for fetching stats from LeetCode users while improving simplicity by abstracting the GraphQL original approach of the available public route of the platform.

## Set up

Environment:
```
GRAPHQL_URL=https://leetcode.com/graphql
```

## Running

```
npm install
npm run start
```

# Routes

## Public profile info
![Profile Route](https://i.imgur.com/Bjyz4lY.png)
```
/stats/:username/profile
```

## Problems solved by Languages
![Languages Route](https://i.imgur.com/aOk4HYB.png)
```
/stats/:username/languages
```

## Problems solved by Difficulty
![Problems Difficulty Route](https://i.imgur.com/vE52Fnr.png)
```
/stats/:username/problems/difficulty
```

## Daily Activity (current streak and total)
![Activity Route](https://i.imgur.com/vTXolhF.png)

```
/stats/:username/activity
```
---
### Additional comments:

[Useful reference for the GraphQL queries](https://github.com/akarsh1995/leetcode-graphql-queries.git)
