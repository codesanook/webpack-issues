```sh
yarn workspace dll add -D \
  webpack \
  webpack-cli \
  @babel/core \
  @babel/preset-env \
  babel-loader \
  lodash
```



yarn workspace app add -D \
  webpack \
  webpack-cli \
  @babel/core \
  @babel/preset-env \
  babel-loader \
  lodash

yarn workspace dll run dev
yarn workspace app run dev
