import webpack from "webpack";
import TerserExtractPlugin from "terser-webpack-plugin";
import { configCommonWebpack } from "./config.common";

const prodConfigWebpack = (env: any, arg: any): webpack.Configuration => {
  return {
    ...configCommonWebpack(env, arg),
    mode: "production",
    optimization: {
      minimize: true,
      minimizer: [
        new TerserExtractPlugin({
          extractComments: true,
        }),
      ],
    },
  };
};

export default prodConfigWebpack;
