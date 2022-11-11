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

| Function        | method | Endpoint       |
| --------------| ------ | -------------- |
| **List Genres**     | GET   | `/genres`       |

response:


```json
 [
	{
		"id": 1,
		"name": "ação"
	},
	{
		"id": 2,
		"name": "aventura"
	},
	.
	.
	.
  ]	
```

| Function        | method | Endpoint       |
| --------------| ------ | -------------- |
| **List Status**     | GET   | `/status`       |

response:


```json
 [
	{
		"id": 1,
		"name": "Watched"
	},
	{
		"id": 2,
		"name": "Dont watched"
	}
  ]	
```


| Function        | method | Endpoint       |
| --------------| ------ | -------------- |
| **List Plataforms**     | GET   | `/plataforms`       |

response:


```json
 [
	{
		"id": 1,
		"name": "Netflix"
	},
	{
		"id": 2,
		"name": "Amazon"
	}
  ]	
```


| Function        | method | Endpoint       |
| --------------| ------ | -------------- |
| **Post a movie in your list**     | POST   | `/movies`       |

| Body               | Type                                 |
| --------------------| ------------------------------------ |
| **name**           | string(required)                     |
| **plataform**        | number(required)                     |
| **genre**        | number(required)                     |
| **statusmovie**        | number(required)                     |
| **grade**        | number(optional)                     |
| **note**        | string(optional)                     |

request:

```json
  {
	"name": "Annabele",
	"plataform": 1,
	"genre": 12,
	"statusmovie": 2
}
```
