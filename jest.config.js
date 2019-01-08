/**
 * Created by ximing on 2018/12/4.
 */
module.exports = {
    verbose: true,
    collectCoverage: true,
    testEnvironment: 'node',
    setupFiles: [
        './jest-runtime/wx.js',
        './jest-runtime/global-api.js',
        './jest-runtime/page.js',
        './jest-runtime/component.js'
    ]
};
