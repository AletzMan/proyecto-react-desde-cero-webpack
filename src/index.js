import React from "react";
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('app')).render(
    //<React.StrictMode>
      <App />
    ///</React.StrictMode>,
  )

// Dependecias Necesarias
// npm install react react-dom -D
// npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
// npm install webpack-cli webpack-dev-server -D
// npm install html-loader html-webpack-plugin -D
// npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D
// npm install css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin -D ya vienen incluidos desde webpack 5 el clean solo con llamarlo en configuracion