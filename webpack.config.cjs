module.exports = {
    entry: './src/index.ts',
    target: 'node',
    stats: { warnings: false },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    experiments: {
        topLevelAwait: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}
