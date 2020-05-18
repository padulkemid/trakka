<h1 align="center">⭐️ Trakka Back-End ⭐️</h1>

## Features 🤩

  - [ GraphQL ](https://graphql.org/) 🍭
  - [ Mongoose ](https://mongoosejs.com/) 🍃 
  - [ Redis ](https://redis.io/) ⭐️
  - [ Bcrypt ](https://www.npmjs.com/package/bcrypt) 🔓
  - [ JWT ](https://jwt.io/) 🥇
  - [ Apollo Server ](https://www.apollographql.com/) 🖥

## Contribute 🤜🏼🤛🏼

  - Clone this branch.
  - `cd server` then `npm install`
  - Don't forget to add your `.env` variables.
  - `cd src` and start developing !
  - To run the server, go back to root project folder
    then `npm run start`

## Queries for _client_

### User

#### Register

  - _Mutation_ 
      ```graphql
        mutation registerNewUser($input: UserRegister!){
          register(input: $input){
            result
          }
        } 
      ```

#### Login

#### Logout

### Event

#### New Event

#### Get All Events

#### Get Event by ID

#### Edit Event

#### Delete Event
