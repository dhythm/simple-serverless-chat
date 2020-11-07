# Installation

# frontend

# backend

```
sam init --runtime nodejs12.x
npm i -D webpack webpack-cli typescript ts-node awesome-typescript-loader aws-sdk glob typesync
npm i -D @types/node @types/webpack @types/aws-lambda

touch webpack.config.ts

cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "outDir": "./dist",
    "allowJs": true
  },
  "include": ["./src/**/*"]
}
EOF

npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
cat <<EOF > .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
EOF
```
