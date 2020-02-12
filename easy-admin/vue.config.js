module.exports = {
    // devServer: {
    //     overlay: {
    //         warnings: false,
    //         errors: false
    //     },
    //     lintOnSave: false
    // }
    outputDir: __dirname + '/../server/admin',
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}
