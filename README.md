# Description

This Repo demonstrates unit and integration tests demo that explains the use case for both types of tests and how you can write both of the tests for your application APIs and functions.

# Project setup

To setup the project you will need to have a node.js version from 16 and beyond

## run the repo in your local machine

```bash
git clone https://github.com/jabo-arnold-landry/testing-lesson.git
pnpm install # for pnpm 
npm install # for npm
yarn install # for yarn
bun install # for bun
```
### Start server
run the below command to start the server
```bash
pnpm run dev # for pnpm 
npm run dev # for npm
yarn run dev # for yarn
bun run dev # for bun
```
## create your database connection string inside .env

For this project I used mongo for database you will need to create your database and use the connection string that your database instance uses

```bash
cp .env.example .env # run this command to get the same env structure as the project uses
```
after cloning and installing the packages you will be good to start running the project.

the project runs on port 5000

# Test files

The test files for this project will be found under  `src/test`, and you can access each single test from the branch of the repo

Check the repo branches you will find all the tests branch for each test that was created in this project
