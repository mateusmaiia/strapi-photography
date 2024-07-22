module.exports = ({ env }) => ({
  upload: {
    provider: "local",
    providerOptions: {
      path: "public/uploads", // Diretório onde os arquivos serão armazenados
      sizeLimit: 1000000, // Limite de tamanho do arquivo em bytes (ajuste conforme necessário)
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});
