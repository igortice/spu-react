import { FilePond, registerPlugin } from 'react-filepond';
import React, { useRef } from 'react';

import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

export default () => {
  const refFilePond = useRef(null);

  const contentHtml = () => {
    return `
      <div class='muted'>Arraste o(s) arquivo(s) para essa região</div>
      <div class='muted'>ou</div>
      <div class='muted'><span class='filepond--label-action'>Clique aqui para anexar manualmente um arquivo</span></div>
    `;
  };

  return (
    <FilePond
      ref={refFilePond}
      allowMultiple
      maxFiles={10}
      allowReorder
      maxFileSize={'100MB'}
      labelMaxFileSizeExceeded={'Arquivo muito longo'}
      allowFileSizeValidation
      labelFileTypeNotAllowed={'Formato de arquivo inválido'}
      labelIdle={contentHtml()}
      fileValidateTypeLabelExpectedTypes={'Formatos permitidos: {allTypes}'}
      acceptedFileTypes={['application/pdf']}
      server="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    />
  );
};
