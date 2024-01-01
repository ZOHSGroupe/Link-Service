## Description

Link-Service is an Application Programming interface for add,update,delete and get links of ZOHS company.
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dockerize the app :

```bash
# docker-compose
$ docker compose up
```
- API port : 3000
- Open pgAdmin in your browser : [PgAdmin](http://localhost:5050)



## Available Endpoints

### 1. Create Link

- **Endpoint:** `/link`
- **Method:** POST
- **Description:** Create a new link.
- **Request Body:**
  - `type: string` - Type of the link.
  - `sourceLink: string` - Source of the link.
  - `idSource: string` - Identifier for the source.
  - `url: string` - URL of the link.

### 2. Get Link by Source, Type, and ID

- **Endpoint:** `/link/:source/:type/:id`
- **Method:** GET
- **Description:** Get a link by source, type, and ID.
- **Response:**
  - `200`: Successful retrieval with link details.
  - `404`: Link not found.

### 3. Get All Links

- **Endpoint:** `/link`
- **Method:** GET
- **Description:** Get all links.
- **Response:**
  - `200`: Successful retrieval with an array of all links.
  - `500`: Internal Server Error.

### 4. Update Link

- **Endpoint:** `/link/:source/:type/:id`
- **Method:** PATCH
- **Description:** Update a link by source, type, and ID.
- **Request Body:**
  - `url: string` - Updated URL of the link.
- **Response:**
  - `200`: Link updated successfully.
  - `404`: Link not found.

### 5. Delete Link

- **Endpoint:** `/link/:source/:type/:id`
- **Method:** DELETE
- **Description:** Delete a link by source, type, and ID.
- **Response:**
  - `200`: Link deleted successfully.
  - `404`: Link not found.


## Stay in touch :
- Author - [Ouail Laamiri](https://www.linkedin.com/in/ouaillaamiri/) 
- Test - [Postman](https://www.postman.com/avionics-meteorologist-32935362/workspace/postman-api-fundamentals-student-expert/collection/29141176-5b7f78b1-7e96-448c-93ee-f3a3721cd1a3?action=share&creator=29141176)
- Documentation - [Postman](https://documenter.getpostman.com/view/29141176/2s9YsDmFGv)

## License

Link-Service is [MIT licensed](LICENSE).
