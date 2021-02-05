# Project Title

Netflix Clone

## Description

Front end clone of Netflix in React and CSS (Grid and Flexbox). It uses TMDB API and is hosted on firebase.

![Netflix Clone](http://www.sabazikaria.com/images/preview-netflix-clone.gif)

## Requirements

_Operational_

- TMDB API Access Token (Requires registered application with TMDB API)

## Development

### API Access

- Go [here](https://www.themoviedb.org/settings/api) to register an application with TMDB API.
- `API Key`, save this value somewhere private for later.

### Installation

```
git clone https://github.com/szikaria961/netflix-clone.git
cd netflix-clone
npm install
cp .example-env .env
```

Open the `.env` file in your text editor of choice and fill in the `REACT_APP_API_KEY` value with the token generated from their website.

### Client

Create a new terminal tab/session and do the following:

```
cd netflix-clone
npm start
```

View development app at `http://localhost:3000`

## Deployment

## License

[MIT](https://choosealicense.com/licenses/mit/)
