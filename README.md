<h1 align="center">⭐️ Trakka Back-End ⭐️</h1>

## Features 🤩

  - [ GraphQL ](https://graphql.org/) 🍭
  - [ Mongoose ](https://mongoosejs.com/) 🍃 
  - [ Redis ](https://redis.io/) ⭐️
  - [ Bcrypt ](https://www.npmjs.com/package/bcrypt) 🔓
  - [ JWT ](https://jwt.io/) 🥇
  - [ Apollo Server ](https://www.apollographql.com/) 🖥

## Contribute 🤜🏼🤛🏼

  1. Clone this branch.
  2. `cd server` then `npm install`
  3. Don't forget to add your `.env` variables.
  4. `cd src` and start developing !
  5. To run the server, go back to root project folder
    then `npm run start`

## Notes

  - To view `typeDefs` you could go to `src/utils/typeDefs.js`
  - Don't forget to turn on services for `mongodb` and `redis-cli`

## Queries for _client_ 🏄🏻‍♀️

### User 🧛🏾‍♂️

#### Register

  - _Mutation_ 
      ```graphql
        mutation registerNewUser($input: UserRegister!){
          register(input: $input){
            result
          }
        } 
      ```

      ```jsx
        // Query variable example

        {
          "input": {
            "username": "kholid",
            "email": "fikr@gmail.com",
            "password": "123456"
          }
        }
      ```

#### Login

  - _Mutation_ 
      ```graphql
        mutation loginUser($input: UserLogin!){
          login(input: $input){
            result
          }
        }
      ```

      ```jsx
        // Query variable example

        {
          "input": {
            "email": "fikr@gmail.com",
            "password": "123456"
          }
        }
      ```

#### Logout

  - _Mutation_ 
      ```graphql
        mutation logoutUser {
          logout {
            result
          }
        }
      ```

### Event 🎸

#### New Event

  - _Mutation_ 
      ```graphql
        mutation createEvent($event: EventInput!){
          createEvent(event: $event){
            id
            title
            description
            timestamp
          }
        }
      ```

      ```jsx
        // Query variable example

        {
          "event": {
            "title": "tekken 7",
            "description": "Abis main, pergi ke pasar buat nyari makan sama temen g",
            "timestamp": "1589814419531"
          }
        }
      ```

#### Get All Events

  - _Query_ 
      ```graphql
        query allEvents {
          getEvents {
            id
            email
            title
            description
            timestamp
          }
        }
      ```

#### Get Event by ID

  - _Query_ 
      ```graphql
        query eventById($id: ID!) {
          getEventsById(id: $id){
            id
            title
            description
            timestamp
          }
        }
      ```

      ```jsx
        // Query variable example

        {
          "id": "5ec2a500e1a9271cba37af03"
        }
      ```

#### Edit Event by ID

  - _Mutation_ 
      ```graphql
        mutation editEvent($id: ID!, $event: EventInput!){
          editEvent(id: $id, event: $event){
            id
            title
            description
            timestamp
          }
        }
      ```

      ```jsx
        // Query variable example

        {
          "id": "5ec2a500e1a9271cba37af03",
          "event": {
            "title": "trine 4",
            "description": "Ya gitu dehhh",
            "timestamp": "1589814733208"
          }
        }
      ```

#### Delete Event

  - _Mutation_ 
      ```graphql
        mutation deleteEvent($id: ID!){
          deleteEvent(id: $id){
            result
          }
        }
      ```

      ```jsx
        // Query variable example

        {
          "id": "5ec2a5c7e1a9271cba37af04"
        }
      ```

