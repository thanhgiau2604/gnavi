![Node](https://img.shields.io/badge/node%40latest-%3E%3D16.13.2-red) ![Yarn](https://img.shields.io/badge/yarn%40latest-%3E%3D1.22.17-yellow) ![Next](https://img.shields.io/badge/next-12.0.8-brightgreen) ![Storybook](https://img.shields.io/badge/storybook-%5E6.4.18-blue)

# GUIDENAVI

### Getting start

##### Run the development server:

```bash
$ yarn dev
```

The application is now running on http://localhost:3000.

##### Run storybook

```bash
$ yarn storybook
```

The storybook is now running on http://localhost:6006.

### Editor Config

If you use VSCode, I recommend you tell VSCode to auto-fix eslint errors on save.
Open `settings.json` or at root folder create a `.vscode/settings.json` file with the following content:

```json
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

### Commitlint Rules

In general the pattern mostly looks like this:

```
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

Common types according to commitlint-config-conventional (based on the Angular convention) can be:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
- **chore**: add something without touching production code (Eg: update npm dependencies)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: Reverts a previous commit
- **style**: Changes that do not affect the meaning of the code (Eg: adding white-space, - formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
