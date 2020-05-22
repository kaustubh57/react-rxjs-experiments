## Start the app:
  - In the project directory, run `npm install`.
  - Start the app with `npm start`
    - Runs the app in the development mode.<br />
    - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project dependencies:
  - redux
  - react-redux
  - rxjs
  - redux-observable
  - lodash
  - eventemitter3
  - [reducerUtils](https://github.com/kaustubh57/react-rxjs-experiments/blob/master/src/reducers/reducerUtils.js): `reduceReducers` is a utility. It lets us supply multiple reducer functions as arguments and effectively forms a pipeline out of those functions, then returns a new reducer function. If we call that new reducer with the top-level state, it will call the first input reducer with the state, pass the output of that to the second input reducer, and so on. (more about this: https://medium.com/@avremelk/practical-redux-course-1aeb74bd01aa)

## Project file size after `npm run build`:
- May-22, 2020:

| Size | File |
|---|---|
| 192 KB | build/static/js/2.a042c26c.chunk.js |
| 6.3 KB | build/static/js/main.e8635657.chunk.js |
| 1.6 KB | build/static/js/runtime-main.5679a37a.js |
| 604 KB | build/static/css/main.b100e6da.chunk.css |

- Oct-29, 2019:

| Size | File |
|---|---|
| 46.43 KB | build/static/js/2.1c0269e6.chunk.js |
| 838 B | build/static/js/main.cd0ba9b5.chunk.js |
| 782 B | build/static/js/runtime-main.2286162c.js |
| 417 B | build/static/css/main.b100e6da.chunk.css |
