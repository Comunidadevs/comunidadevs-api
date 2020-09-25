module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'yarn run lint-staged',
    'pre-push': 'yarn run code:check',
  },
};
