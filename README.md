[![npm](https://img.shields.io/npm/v/comparador-de-imagens.svg)](https://www.npmjs.com/package/comparador-de-imagens)
[![npm](https://img.shields.io/npm/dt/comparador-de-imagens.svg)](https://www.npmjs.com/package/comparador-de-imagens)

# Comparador de imagens

O pacote Comparador de imagens permite comparar imagens com base em seus dados brutos e representações em base64. Essa comparação ajuda a identificar se duas ou mais imagens são iguais.

## Instalação

Para utilizar a classe `ImageComparator`, instale o pacote em seu projeto através do npm:

```bash
npm install comparador-de-imagens
```

## Exemplo

```TS
import { readFileSync } from 'fs';
import ImageComparator, { ImageToVerifyBasedInData, ImageToVerifyBasedInBase64 } from 'comparador-de-imagens';

// Exemplo de criação de objetos de imagem para verificar por base64
const a:ImageToVerifyBasedInBase64 = {
  id: "1img",
  base64: readFileSync("./data/1img.png", "base64"),
};

const b:ImageToVerifyBasedInBase64 = {
  id: "2img",
  base64: readFileSync("./data/2img.png", "base64"),
};

const c:ImageToVerifyBasedInBase64 = {
  id: "3img",
  base64: readFileSync("./data/3img.png", "base64"),
};

// Exemplo de criação de objetos de imagem para verificar por dados brutos
const img1: ImageToVerifyBasedInData = {
  id: "1img",
  data: readFileSync("./data/1img.png"),
};

const img2: ImageToVerifyBasedInData = {
  id: "2img",
  data: readFileSync("./data/2img.png"),
};

const img3: ImageToVerifyBasedInData = {
  id: "3img",
  data: readFileSync("./data/3img.png"),
};

const comparator = new ImageComparator();

// Verificação por base64
const base64Results = comparator.verifyByBase64([a, b, c]);
console.log(base64Results);

// Verificação por dados brutos (Buffer)
const dataResults = comparator.verifyByBytes([img1, img2, img3]);
console.log(dataResults);

```

## Métodos

##### verifyByBase64(imagesToVerify: ImageToVerifyBasedInBase64[]): ImageEqual[]

Este método recebe um array de objetos ImageToVerifyBasedInBase64, que contêm IDs e strings de representações em base64 das imagens. Ele retorna um array de objetos ImageEqual que contêm o ID de cada imagem e uma lista de IDs de outras imagens que foram consideradas iguais.

##### verifyByBytes(imagesToVerify: ImageToVerifyBasedInData[]): ImageEqual[]

Este método recebe um array de objetos ImageToVerifyBasedInData, que contêm IDs e dados brutos (Buffers) das imagens. Ele retorna um array de objetos ImageEqual que contêm o ID de cada imagem e uma lista de IDs de outras imagens que foram consideradas iguais.

## Tipos

Os seguintes tipos estão disponíveis para uso:

##### ImageToVerifyBasedInBase64:

Tipo que representa um objeto de imagem com ID e representação em base64.

##### ImageToVerifyBasedInData:

Tipo que representa um objeto de imagem com ID e dados brutos (Buffer).

##### ImageEqual:

Tipo que representa o resultado da comparação entre imagens, contendo o ID da imagem e uma lista de IDs de imagens iguais.

## Author

- [@danielguirra](https://www.github.com/danielguirra)

#### Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para melhorar este pacote.

Licença
MIT License. Consulte o arquivo LICENSE para mais detalhes.
