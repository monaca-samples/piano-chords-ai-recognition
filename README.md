# Piano Chords AI Recognition
This app uses audio captured by phone/laptop microphone and predicts the piano chords which user plays. It uses [Teachable Machine](https://teachablemachine.withgoogle.com/) to train the model and [ml5.js](https://ml5js.org/) for predicting the results. 
Webpack is used for bundling the application and Monaca for mobile deployment.
## How to start
1. Download the project.
2. Run `npm install` in the directory.
3. Run `npm run dev` to start the project.
4. If the browser opens url *0.0.0.0:8080*, change it to *localhost:8080*.

## How to use
1. Wait until the model loads.
2. When the predicting page appears, play the chord written on the card.
3. If you do not know the chord, tap the card or *Reveal* button to see image of chord.
4. After successful play of chord, the card will turn green and next one will appear.

## Important files
#### JS
- `hybridFunctions.js` - functions for starting microphone and predictions
#### Vue
- `LoadingPage.vue` - first screen that user sees while loading the model
- `PredictingPage.vue` - main screen where predicting is happening

---


## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `script/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).


## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)
* [Framework7 Vue Documentation](https://framework7.io/vue/)
* [Vue3 Documentation](https://v3.vuejs.org/guide/introduction.html)
