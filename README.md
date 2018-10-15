# hearthstone-search

## Information

This project is a school project to practice docker and especially docker-compose. 

This project used two containers :
- A container which runs a Node.js application to find hearthstone's card.
- A MongoDB database which contains all cards.

Both containers are linked and are on the same network. 

The express folder is shared between the host and the container, so you can edit the code directly from the host.

cards.json is the dataset containing all cards, you have to import it on the database using mongoimport from the host. (By the way, the application works without, but has nothing to display ...)

## Setup

Build and run the application with the following command : 

```
docker-compose up
```

Populate the MongoDB database with the following command :

```
mongoimport --db dbCards --collection cards --file cards.json --jsonArray
```

## Test

To test the application, simply go to http://localhost:3000/ and search your favorite cards. 
