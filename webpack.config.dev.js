import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  //entry point for application for hot reloading
  //it's possible to add middleware
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  // we can change it to node/electron etc.
  target: 'web',
  //path for simulation of the bundling it won't acctualy write any files
  //it will serve the build from memory
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    // https://webpack.js.org/configuration/devtool/
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  // example: here it's handling js and css
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
