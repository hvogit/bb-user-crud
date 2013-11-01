# bb-user-crud

## Introduction
A simple single page app using new front-end technologies I have learned:

- **backbone.js** - MV* framework
- **require.js** - dependenies and modulars management
- **handlerbars** - template engine
- **underscore.js** - utils used by backbone, mini templete
- **node.js** - used with `express` module to implement a simple REST api

## How to run
    $> node server.js
    Server running at http://127.0.0.1:8000
    [19:49:26] GET /users
    [19:49:37] GET /users/2
    [19:49:47] PUT /users/2
    [19:49:47] GET /users
    [19:49:54] GET /users/1
    [19:49:57] DELETE /users/1
    [19:49:57] GET /users
    [19:50:9] DELETE /users/ALL
    All users cleared
    [19:50:9] GET /users

    Open in browser:
    http://localhost:8000

## How to test REST api
Use either browser plugin/extension or commandline like below:

    curl localhost:8000/users
    curl localhost:8000/users/1
    curl -X POST -H  "Content-Type: application/json" localhost:8000/users -d '{"name":"Hugh Jackman", "score": 30}'
    curl -X PUT  -H  "Content-Type: application/json" localhost:8000/users/3 -d '{"sore": 50}'
    curl -X DELETE localhost:8000/users/2
    curl -X DELETE localhost:8000/users/ALL

## Screenshots
...

## References:
- [Backbone tutorials](http://backbonetutorials.com/organizing-backbone-using-modules/)
- [Detect memory leak](http://andrewhenderson.me/tutorial/how-to-detect-backbone-memory-leaks/)
- [Zombies issue](http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/)

