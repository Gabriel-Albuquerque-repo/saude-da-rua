module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@app': 'src/app.ts',
        '@entites': './src/entites',
        '@useCases': './src/useCases',
        '@utils': 'src/utils',
        '@repositories': 'src/repositories',
        '@mongoConnection': 'src/repositories/implementations/MongoConnection.ts',
        '@routes': 'src/routes.ts',
        '@schemas': 'src/repositories/implementations/mongodb/schemas/Volunteer.ts'
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
