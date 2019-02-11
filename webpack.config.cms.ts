const { resolve } = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = () => {
    const config = {
        mode: 'production',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
                types: resolve(__dirname, 'types'),
                components: resolve(__dirname, 'src/components'),
                gatsby$: resolve(__dirname, '.cache/gatsby-browser-entry.js'),
            },
        },
        entry: {
            cms: resolve(__dirname, './src/cms/cms.ts'),
        },
        output: {
            path: resolve(__dirname, 'src/cms'),
            filename: '[name].[chunkhash].js',
        },
        optimization: {
            runtimeChunk: 'single',
            nodeEnv: 'production',
            noEmitOnErrors: true,
            splitChunks: {
                chunks: 'all',
            },
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)sx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader', // creates style nodes from JS strings
                        'css-loader', // translates CSS into CommonJS
                        'sass-loader', // compiles Sass to CSS, using Node Sass by default
                    ],
                },
            ],
        },
    };

    return config;
};
