module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|svg|png|jpg)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        // https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
        lib: ['ES2019'],
        module: 'commonjs',
        target: 'ES2019',
      },
    },
  },
}
