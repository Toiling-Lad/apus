This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

[![Build Status](https://travis-ci.org/Toiling-Lad/apus.svg?branch=master)](https://travis-ci.org/Toiling-Lad/apus)

## Table of Contents

* [ Getting Started](#getting-started)
* [ Contributing ](#contributing)
* [ License ](#license)
* [ Sharing and Deployment ](#sharing-and-deployment)

## Getting Started

#### `git clone https://github.com/Toiling-Lad/apus.git`

Get the project on your computer and go inside the project directory

#### `npm start`

Runs your app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Install the [Expo app](https://expo.io) on your iOS or Android phone, and use the QR code in the terminal to open your app. Find the QR scanner on the Projects tab of the app. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

The command also runs [npm run prettier](#npm-prettier) in order to assure code quality.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests. Rules can be found in `pakage.json` and check [jest-expo](https://github.com/expo/jest-expo) for more information.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

#### `npm run prettier`

[Prettier](https://github.com/prettier/prettier) is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
Rules can be found in `pakage.json`


## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

## Contributing

If you find any problems, please [open an issue](https://github.com/Toiling-Lad/apus/issues/new) or submit a fix as a pull request.

New features are welcome, but for large changes let's discuss first to make sure the changes can be accepted and integrated smoothly.

## License

[MIT License](LICENSE)
