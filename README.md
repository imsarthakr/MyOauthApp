# About the Project
OAuth 2.0, which stands for “Open Authorization”, is a standard designed to allow a website or application to access resources hosted by other web apps on behalf of a user. It is an authorization framework that enables applications — such as Facebook, GitHub, and DigitalOcean — to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts a user account and authorizing third-party applications to access that user account.

</br>
This application authorizes and autheticates github profile of a user and displays repositories, profile info, followers and following.

</br>
The application requests authorization to access service resources from the user
If the user authorized the request, the application receives an authorization grant
The application requests an access token from the authorization server (API) by presenting authentication of its own identity, and the authorization grant
If the application identity is authenticated and the authorization grant is valid, the authorization server (API) issues an access token to the application. Authorization is complete.
The application requests the resource from the resource server (API) and presents the access token for authentication
If the access token is valid, the resource server (API) serves the resource to the application.

</br>

## How to run?

> To run it on your local server

- *Open terminal* and *type `npm install`*: This will install the dependencies.

- In the same terminal and *type `npm run serve`*: This will compile the app and will start the app on your local server.

- *Open another terminal* and *type `npm run cors`*: This will allow cross origin resource sharing.

## Configuration

Update the client Id and client secret as per your Oauth app, in the file `src/assets/configurations.json`.

Client id and secret code can be generated using this [documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

## Demo

https://user-images.githubusercontent.com/42978414/171398647-f6aa91d7-cb03-4304-977d-d810cc6b57ed.mp4


## Author

[@imsarthakr](https://github.com/imsarthakr)





