//根⽬录创建config-overrides.js, 修改默认配置
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
    fixBabelImports("import", {
        //antd按需加载
        // antd按需加载
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "red" }
        }
    })
);