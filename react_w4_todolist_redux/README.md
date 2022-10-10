Todolist를 리덕스로 바꾼 버전입니다.
=============





## 가장 크게 페이지폴더안에서 메인과 상세페이지를 나누어보았습니다.

그리고 각 페이지에서만 import된 컴포넌트들은 각 페이지안에서 나누었습니다.
우연찮게 detail에서는 import된 컴포넌트는 없었습니다.
만약, 서로 다른 페이지에 공통된 컴포넌트가 import된다면, 따로 common폴더를 만들어 관리할 것입니다.



#### 아래는 폴더를 도식화한 것입니다.   
   
   

> **Hooks** (커스텀훅)
>	> Quoteapi.js (명언랜덤재생)   

=============

> **pages** (페이지 모아놓은곳)
>	> *Detail*
>	>	> Detail.js   
>	> *Main*
>	>	> Main페이지 (부모컴포넌트?)   
>	>	> components (import되는 컴포넌트들)
>	>	>   >form
>	>	>   >   >form.js
>	>	>   >header
>	>	>   >   >header.js
>	>	>   >layout
>	>	>   >   >layout.js
>	>	>   >list
>	>	>   >   >list.js   
   

=============

>**redux**
>   >*config* (리덕스 설정과 관련된 파일)
>	>	>configstore.js (Store를 만드는 설정 코드들이 있는 파일)
>   >*modules* (State들의 그룹)
>	>	>todolist.js   
   
=============   
   
>**shared** (페이지이동을 위한)
>   >Router.js










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
