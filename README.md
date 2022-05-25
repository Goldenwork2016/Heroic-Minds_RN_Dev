# Heroic Minds React Native App

This is the repository that holds the React Native code for the Heroic Minds app.

#### Folder Structure:

    .
    ├── .expo-shared            # contains Expo related configurations
    ├── assets                  # Any artwork used within the HM App
    ├── src                     # Source files
    │  ├── components           # RN components used to build screens
    │  ├── config               # Configuration
    │  ├── context              # React Context for HM
    │  ├── hooks                # React Hooks (Data, Auth, Audio)
    │  ├── lib                  # Libraries (TailwindCSS)
    │  ├── navigators           # React Navigation stacks/tabs
    │  ├── screens              # Screens
    │  ├── types                # Types
    └── app.json                # Expo entry point

#### Build Commands:

    USE YARN

    To run development server - yarn start
    To run on iOS - yarn ios
    To run on Android - yarn android

#### General instructions;

    Stick to creating reusable components in the components folder and consume them in the
    specific screen you are creating.

    In order to access data between screens and stacks, different Contexts have been created to help
    facilitate that development. Continue with that same structure.

    For additional tabs, use the exisiting navigator and create any React hooks needed to facilitate further development.

    When pushing code, please create a feature branch, create a Pull Request into the main branch, add Chran M as the reviewer, and wait for your code to be reviewed and merged into main.

    Do not push code directly into main, this will affect production deployment.

    Test your code both in Android and iOS, if you can't, reach out to a developer on the team who can or set up a local env.
