const prompt = require('prompt');
const fs = require('fs');


let def = {
  "name": "react-component-init",
  "version": "1.0.0",
  "description": "Boliderplate for creating and publishing react components to npm",
  "main": "src/Component.js",
  "jsnext:main": "src/Component.js",
  "storybook": "src/ComponentStory.js",
  "scripts": {
    "components": "start-storybook -c ./.config/storybook -p 9999",
    "pretest": "webpack --config .config/webpack/test.js",
    "test": "tape dist/tests/test.js | tap-spec",
    "start": "npm run components",
    "lint": "eslint src",
    "setup": "node test.js"
  },
  "author": "Tyler Clark",
  "license": "",
  "devDependencies": {
    "@kadira/storybook": "^2.35.3",
    "autoprefixer": "^6.7.6",
    "babel-core": "^6.23.1",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^6.3.2",
    "babel-plugin-css-modules-transform": "^1.2.1",
    "babel-plugin-react-require": "^3.0.0",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-2": "^6.22.0",
    "css-loader": "^0.26.2",
    "enzyme": "^2.7.0",
    "eslint": "^3.16.1",
    "eslint-plugin-react": "^6.10.0",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.10.1",
    "null-loader": "^0.1.1",
    "postcss-cssnext": "^2.9.0",
    "postcss-import": "^9.1.0",
    "postcss-loader": "^1.3.3",
    "prompt": "^1.0.0",
    "react-addons-test-utils": "^15.4.2",
    "react-dom": "^15.4.2",
    "style-loader": "^0.13.2",
    "tap-spec": "^4.1.1",
    "tape": "^4.6.3",
    "webpack": "^1.14.0",
    "webpack-node-externals": "^1.5.4"
  },
  "dependencies": {
    "react": "^15.4.2"
  }
}


prompt.start();

const schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name is required',
      required: true
    },
    description: {
      default : ''
    },
    author : {
      required: true,
      message: 'Author is required',
    },
    license : {
      default : ''
    }
  }
};

prompt.get(schema, function (err, result) {

  let obj = def

  obj.name = result.name
  obj.description = result.description
  obj.author = result.author
  obj.license = result.license

  fs.writeFile("./package.json", JSON.stringify(obj), function(err) {
      if(err) return console.log(err);

      console.log("New package.json has been saved!");
  });
});
