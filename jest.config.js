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
}
