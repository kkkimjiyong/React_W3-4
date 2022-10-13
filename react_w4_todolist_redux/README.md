Todolist를 리덕스로 바꾼 버전입니다.
=============


![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/113953473/195526870-1e2d5102-708b-4a28-b0c6-370637218e64.gif)
   
   
   
## 기존 과제에서 개인적으로 추가한 기능들입니다.
   
   
-명언 api를 이용하여 상단의 명언이 새로고침시마다, 바뀝니다.   
-로컬스토리지를 이용하여, 새로고침 시에도 데이터가 날라가지 않습니다.   
-edit버튼을 통하여, 상세페이지에서 수정이 가능합니다.   
-인풋창 옆의 important 체크박스를 통하여, 중요도체크가 가능합니다. (불표시)   
-애니메이션 효과를 넣어보았습니다.




## 가장 크게 페이지폴더안에서 메인과 상세페이지를 나누어보았습니다.

그리고 각 페이지에서만 import된 컴포넌트들은 각 페이지안에서 나누었습니다.   
우연찮게 detail에서는 import된 컴포넌트는 없었습니다.   
만약, 서로 다른 페이지에 공통된 컴포넌트가 import된다면, 따로 common폴더를    만들어 관리할 것입니다.



#### 아래는 폴더를 도식화한 것입니다.   
   
   
      
       
   
```
src
├── Hooks (커스텀훅)
|   └──Quoteapi.js
├── pages (페이지별)
|   ├── (common) -> 만약 겹치는 import 컴포넌트가 있다면
|   ├── Detail (상세페이지)
|   └── Todolist (메인페이지)
|        ├── Todlist.jsx  
|        └── components (메인페이지 구성 컴포넌트)
|             ├── form/Form.jsx
|             ├── header/Header.jsx
|             ├── layout/Layout.jsx
|             └── list/List.jsx
├── redux
|   ├── config
|        └── configstore.js
|   └── modules
|        └── todolist.js
├── shared
|    └── Router.js
├── App.js
├── App.css
├── App.test.js
├── index.css
├── index.js
├── jsconfig.json
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```

   


   


    
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
