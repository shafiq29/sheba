## Getting started

The purpose of this project is to develop a web service that allows users to reserve seats for an event.


## Cloning the repo

In order to clone the repo please use following command:

```
git clone https://github.com/shafiq29/sheba.git

```

## Integrate with your tools

- Please install Docker CLI and Docker Compose into your machine. The rest of the setup will be done by docker. 

## Functional Requirements:

- Admin can create/edit/delete events
- User can reserve seats for an events
- User gets email notifications for confirmation of the reservation (Using nodemailer)

## Technical Requirements:

- Implemented the service in Node.js/Express
- The service can accept requests to reserve a specific number of seats for a given event ID
- Implemented logic to check seat availability before confirming the reservation
- Handled potential concurrency issues if multiple users attempt to reserve seats simultaneously using transactions
- Considered error handling for scenarios like insufficient seats or invalid event IDs
- Designed the API to be RESTful and well-documented it with the integration of Swagger
- Written unit tests for your API endpoint.
- Designed a frontend in react to create events for admin and list events and reservation for users

## Unit Test:
- This is done using jest 
- Run npm test


## Test and Deploy

To test and deploy, we just need to run the following commands:

```
cd sheba
docker-compose up --build

```

The backend running at http://localhost:5000/api can be tested either by postman or use the http://localhost:8080 frontend built with react



# Deliverables:
- Functional code with well written steps to run the project on any computer. The steps are all in this README.md file
- Unit tests covering different scenarios (successful reservation, insufficient seats,invalid event ID).
- For this particular project in brief explanation, my approach to concurrency control was to solve using db transaction handling using the sequelize ORM so that unwanted things roll back.

## Evaluation Criteria

- I tried my level best to stick to the functionality, correctness, and adherence to RESTful principles withing the scope and deadline.
- Tried to maintain standard quality and comprehensiveness of unit tests.
- The explanation of concurrency control in this current scope was covered through transaction however if the time and scope gets bigger we have some other brilliant steps to take in order to ensure concurrency support for users.

For this assignment I tried to focus as much as possible on core functionalities of an online event reservation system. It will definitely help you to know my skills better to assesses my ability to design and implement APIs, handle concurrency, and write unit tests.

## API Documentation:

http://localhost:5000/api-docs/


## My Attempt to get the Bonus!

For the Bonus points I was excited to showcase additional skills in cloud deployment and developer experience. I did make it as a containerized application in order to deploy it to Amazon EC2 instance running on linux. I used a free tier using personal debit card so the limited live link
is here http://54.255.141.225:8080/events

- Create an amazon ec2 instance 
- Download pem file for credentials
- ssh to the aws cli
- Add ssh fingerprint to clone the source code to the instance from gitlab
- Finally install docker and docker compose inside of the server
- Run the docker-compose up --build to up the containers

Later I used some efficient approach using the dockerhub deploy and pull it in the ec2 instance.


## Special Notes and Limitations:
The email send mechanism will not be functional in local machine, that is why the part is commented out. All we will need to do is turn on it on production and use mail server credentials. I focused in majority of backend service and its implementation with proper CI/CD and dev experience improvement so the UI is not so attractive right now, but we all know we can make great UI's within the timeframe if we have great working backend. Though there are more approaches like optimistic and pessimistic locking and queue based solutions all have their own pros and cons that we can discuss when we talk in person interview.

## Special Updates

The User Experience Improvements can be found on a seperate branch feature/ui-improvement
The live link is also available at aws cloud http://54.255.141.225:8080/events


Thank you so much!