# Movie list made by typescript

My first project practicing typescript


## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file 

## Start the project

```bash
npx nodemon src/app.js
```
## Routes

| Function        | method | Endpoint       |
| --------------| ------ | -------------- |
| **SignUp**     | POST   | `/sign-up`       |

| Body               | Type                                 |
| --------------------| ------------------------------------ |
| **name**           | string(required)                     |
| **email**           | string(required)                     |
| **password**        | string(required)                     |


### Example

request:

```json
  {
   "name": "lele",
	"email": "lele@gmail.com", 
	"password": "123"
  }
```

| Function        | method | Endpoint       |
| --------------| ------ | -------------- |
| **SignIn**     | POST   | `/sign-in`       |

| Body               | Type                                 |
| --------------------| ------------------------------------ |
| **email**           | string(required)                     |
| **password**        | string(required)                     |


### Example

request:

```json
  {
   "name": "lele",
	"email": "lele@gmail.com", 
	"password": "123"
  }
```

response:


```json
  {
   	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjYsImlhdCI6MTY2ODEyNzYwOX0.WP4gIfMfsCNAOSvyAQFI2QPfIO52VBN5UNMOjECvx2p"
  }
```
