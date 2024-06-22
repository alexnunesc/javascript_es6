# Introdução ao TypeScript

## Initializer o projeto

```bash
  npm init -y
```

## Instalando o TypeScript

Para instalar o TypeScript, você precisa ter o Node.js instalado em sua máquina. Para isso, acesse o site do Node.js e faça o download da versão LTS.

Após a instalação do Node.js, abra o terminal e execute o seguinte comando:

```bash
  npm install typescript -D
  # ou
  npm install -g typescript

  # Executar o TypeScript
  npx tsc nome_do_arquivo.ts
```

## Instalando o Ts-node

Para instalar o Ts-node, execute o seguinte comando:

```bash
  npm install ts-node -D
  # ou
  npm install -g ts-node

  # Executar o TypeScript
  npx ts-node nome_do_arquivo.ts
```

## Instalandos e configurando o ESLint

Para instalar o ESLint, execute o seguinte comando:

```bash
  npm install eslint -D
  # ou
  npm install -g eslint

  # Instalando os plugins do ESLint
  npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin -D

  # ou 
  npm install eslint@^8.56.0 --save-dev
  npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev


  # Iniciar o ESLint
  npx eslint --init
```

## Instalando e configurando o Prettier

Para instalar o Prettier, execute o seguinte comando:

```bash
  npm install prettier -D
  npm i prettier eslint-config-prettier eslint-plugin-prettier -D
  # ou
  npm install -g prettier

  # Iniciar o Prettier
  npx prettier --init
```

## Instalando e configurando o tsconfig.json

Para criar o arquivo `tsconfig.json`, execute o seguinte comando:

```bash
  npx tsc --init
```

Após a criação do arquivo `tsconfig.json`, adicione as seguintes configurações:

```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true
    }
  }
```

## Instalando e configurando o EditorConfig

Para instalar o EditorConfig, acesse o site do EditorConfig e faça o download do plugin para o seu editor de código.

Após a instalação do plugin, crie um arquivo chamado `.editorconfig` na raiz do seu projeto e adicione o seguinte conteúdo:

```editorconfig
  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
```
