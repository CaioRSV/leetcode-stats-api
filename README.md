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
```
/stats/:username/profile
```

## Problems solved by Languages

```
/stats/:username/languages
```

## Problems solved by Difficulty
```
/stats/:username/problems/difficulty
```

## Daily Activity (current streak and total)
```
/stats/:username/activity
```
---
### Additional comments:

[Useful reference for the GraphQL queries](https://github.com/akarsh1995/leetcode-graphql-queries.git)
