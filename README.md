# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Structure

In the `src` directory, there are following folders:

- `assets`
- `components`
- `helpers`
- `hooks`
- `layouts`
- `pages`
- `routes`
- `services`
- `store`
- `styles`
- `types`

Let's see what each of the folders are standing for.

### Assets

This folder as the name itself says, will hold all the assets (images, icons, videos, etc.) of our app.

`images` and `icons` folders are already there.

### Components

This folder is responsible for holding all the components that being used in our app.

`Elements` folder should hold the smallest components that can exist on their own. Those components should not have any business logic and should be independent, thus being able to exist on their own. For example, we can put `Button` and `Loader` components there, that can be used in more complex components.

`Modules` folder should hold more complex components, but still those that don't have or have a very small amount of business logic. They should be able to exist on their own as well. `Navbar` and `Search` components would be a good example.

Of course `Elements` and `Modules` folders would not be enough to hold all the needed components. So it would be comfortable to have appropriate folders which be holding components that have same "logic" and "context". For example `Profile` folder that could hold all the components that somehow related to profile entity. It could be `ProfileAvatar` and `ProfileInfo`...

### Contexts

Hold here all the context providers.

### Helpers

The name of this folder says pretty much everything about it. It is good to put here all the "helper" functions used throughout the whole app. The examples are `formatDate` and `truncateText` functions.

### Hooks

Just put all the custom hooks used throughout the whole app in this folder. A good example would be `useDebounce` hook which is often used in search inputs for optimization.

### Layouts

Usually, there are only two layouts in apps: `BaseLayout` and `LoginLayout`. The first one used when the user is logged in, that layout will normally display appropriate content of a specific page wrapped in a `Navbar` and `Footer` components. And the second one will be a wrapper for unauthenticated pages. But of course, there can be more "layouts" in your app.

### Pages

This folder should hold components that are responsible for pages. The important thing here is to not overcomplicate the component with the complex logic and a lot of jsx. For example, the `ProfilePage` component stored inside the `Pages` folder cold use `ProfileAvatar` and `ProfileInfo` components described above. Consider "page components" as containers for smaller "pieces" that share the same business logic.

### Routes

This one is just holding single file `index.tsx`, which will contain all of the routes. Of course you can rearange this, splitting the "routes" logic into multiple files.

### Services

Why do we call them Services and not some name else? Honestly there is no right answer for this, at least in my opinion. In simple words, services are just ordinary classes which will contain functions of your own choice, so call them how you like.

### Store

Basically the logic for initialization of a store.

### Styles

Put here the global styling. This folder contains `globals.scss` file with example of scss code. Feel free to delete the file and create your own, or change it to css in case you are not familiar with the scss. But trust me, it is worth learning scss =)

### Ts

This folder contains one of the ways for managing types, enums, and interfaces. It is a good practice to not hold them at the component level unless it is not a props type or an interface.
