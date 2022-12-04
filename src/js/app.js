import GameSavingLoader from './gamesavingloader.js';

GameSavingLoader.load().then((saving) => saving).catch((error) => {
  console.log(error);
});
