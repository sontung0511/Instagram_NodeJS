# Instagram_NodeJs


Build CRUD website social  with **NodeJS**, postgresql and deploy on docker

---

### Website

-   [Instagram](https://www.instagram.com/)

---

### Library :

-   [NODEJS](https://www.npmjs.com/package/NODE)
- ![Database Diagram](https://github.com/sontung0511/Instagram_NodeJS/blob/main/uploads/database.jpg)

---

### How to install & Run

##### Install NPM
```
 npm install
```

##### Run on Local

```

 YARN WATCH
```
```
 YARN SERVER

```

##### Go to Browser and check the URL

http://localhost:6868

---

### Library

| Framework           | uses                              |
| :------------------ | :-------------------------------- |
| .env                | to fix local host                 |
| .babelrc            | use import link easy "` = (/src)" |
| config-overrides.js | webpack config                    |
| prettierc           | to config font , alignment        |
### 
## APIs

**User**

| Method | Link           | Request         | Middleware | Response | Description                                |
|--------|----------------|-----------------|------------|----------|--------------------------------------------|
| POST   | /user/register | Form-data, JSON |            | 201      | Create a new "user" with rolename = user   |
| GET    | /user/login    | Form-data, JSON |            | 201      | Login for the website (Create a new token) |
| GET    | /user          |                 | Auth       | 200      | Read information of a user                 |
| Patch    | /user          | Form-data, JSON | Auth       | 200      | Update a user                              |


