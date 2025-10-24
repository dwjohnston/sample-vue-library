This is a demonstration package demonstrating publishing a vue component library as an npm package.

It's all pretty straight forward. It's a create vite app as base.

The magic is basically in the vite.config.ts using [vite library mode](https://vite.dev/guide/build.html#library-mode)

Also note the `exports` and `files` properties in package.json

Also, make sure you include an  .npmignore if you plan to install this via git rather than via npm! See: https://stackoverflow.com/questions/56011430/npm-install-from-repo-not-running-prepare 

This configuration does bundle it all into single file, which works for my purposes - but might not be so good for something needing better treeshaking.
