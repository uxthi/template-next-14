export const copyToClipboard = (text: string) => {
  if (!text) return;

  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Erro ao copiar texto: ", err);
    // TODO: checar se vamos abrir snackbar nesse caso.
  });
  
};
