# Installation

## frontend

```
touch README.md .gitignore

npm init -y
yarn add react react-dom
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
touch .babelrc
yarn add -D webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader url-loader file-loader dotenv-webpack tsconfig-paths-webpack-plugin
touch webpack.config.js

yarn add -D typescript ts-loader typesync
yarn run tsc --init
# npx tsc --init
yarn add -D eslint eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier eslint-loader eslint-plugin-import eslint-plugin-unused-imports eslint-plugin-sort-export-all
yarn run eslint --init
# npx eslint --init
touch .prettierrc
yarn install
yarn run sb init
# npx sb init
rm -rf stories
touch .storybook/webpack.config.js

mkdir public src
touch public/index.html
touch .env

mkdir -p src/app/{pages,assets,lib}
mkdir -p src/core/{components,assets,lib}
touch src/{index,App}.tsx
```

```
yarn add @material-ui/core @material-ui/icons styled-components formik yup i18next react-i18next react-lottie
```

## backend

### Getting started for AWS SAM

```
sam init --runtime nodejs12.x
```

### To install TypeScript

```
# webpack 5 doesn't work well at the moment for AWS SAM
npm i -D webpack@4.42.1 webpack-cli typescript ts-node awesome-typescript-loader aws-sdk glob typesync
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

### To run the project

```
npm run build
sam local invoke FUNCTION_NAME
```

### To install and set up a docker image for DynamoDB

```
docker pull amazon/dynamodb-local
docker images

docker network create NETWORK_NAME
# first time
docker run --network NETWORK_NAME --name CONTAINER_NAME -d -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb
# from the second time
docker start CONTAINER_NAME

docker stop CONTAINER_NAME
```

### To set up a table of DynamoDB

```
aws dynamodb create-table --generate-cli-skeleton > dynamodb/table.json

aws dynamodb create-table --cli-input-json file://dynamodb/table.json --endpoint-url http://localhost:8000
aws dynamodb list-tables --endpoint-url http://localhost:8000
aws dynamodb put-item --item file://dynamodb/xxxx.json --endpoint-url http://localhost:8000 --table-name TABLE_NAME
aws dynamodb delete-table --endpoint-url http://localhost:8000 --table-name TABLE_NAME

aws dynamodb scan --table-name TABLE_NAME --endpoint-url http://localhost:8000
```

### To run AWS SAM on local

```
sam local invoke FUNCTION_IDENTIFER
sam local invoke --docker-network NETWORK_NAME FUNCTION_IDENTIFER

sam local start-api
sam local start-api --docker-network NETWORK_NAME

# Others
sam local generate-event
sam local start-lambda
sam validate
```
