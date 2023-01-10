import { Configuration } from "webpack";
import { configCommonWebpack, ROOT_DIST } from "./config.common";
import { Configuration as DevServerConfig } from "webpack-dev-server";

interface WebpackConfigDev extends Configuration {
  devServer?: DevServerConfig;
}

const devConfigWebpack = (env: any, arg: any): WebpackConfigDev => {
  return {
    ...configCommonWebpack(env, arg),
    mode: "development",
    devtool: 'source-map',
    devServer: {
      static: ROOT_DIST,
      port: 3030,
      open: true,
      liveReload: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};

export default devConfigWebpack;
