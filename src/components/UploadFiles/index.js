import { FilePond, registerPlugin } from 'react-filepond';
import React, { useRef } from 'react';

import FilePondPluginFileRename from 'filepond-plugin-file-rename';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import _ from 'lodash';

registerPlugin(
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginFileRename
);

const EXTENSOES_VALIDAS = {
  '.doc': 'application/msword',
  '.gif': 'image/gif',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.odp': 'application/vnd.oasis.opendocument.presentation',
  '.odt': 'application/vnd.oasis.opendocument.text',
  '.pdf': 'application/pdf',
  '.docx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

export default ({
  maxFiles = 10,
  maxFileSize = '5MB',
  acceptedFileTypes = ['.pdf', '.jpg', '.png'],
}) => {
  const refFilePond = useRef(null);

  const contentHtml = `
    <div style="margin-top:10px;">
      <span class="upload-anexo-inbox">
        <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="inbox" width="6em" height="6em" fill="currentColor" aria-hidden="true"><path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"></path></svg>
      </span>
      <span class="ant-typography">
        <div>Arraste o(s) arquivo(s) para essa região ou</div>
        <div class="filepond--label-action">clique aqui para anexar manualmente o(s) arquivo(s)</div>
        <span style="font-size: 12px" class="ant-typography ant-typography-warning">
          formatos permitidos: ${acceptedFileTypes.join()}
        </span>
      </span>
    </div>
  `;

  const onReorderFiles = (files) => {
    console.log(files);
  };

  const onProcessFile = (error, file) => {
    if (!error) {
      console.log(file);
    }
  };

  const onProcessFileRevert = (file) => {
    console.log(file);
  };

  return (
    <FilePond
      ref={refFilePond}
      allowMultiple
      maxFiles={maxFiles}
      allowReorder
      maxFileSize={maxFileSize}
      labelMaxFileSizeExceeded={'Arquivo muito longo'}
      labelMaxFileSize={'O tamanho máximo é {filesize}'}
      allowFileSizeValidation
      labelFileTypeNotAllowed={'Formato de arquivo inválido'}
      labelIdle={contentHtml}
      fileValidateTypeLabelExpectedTypes={'Formatos permitidos: {allTypes}'}
      fileValidateTypeLabelExpectedTypesMap={_.invert(EXTENSOES_VALIDAS)}
      acceptedFileTypes={Object.values(
        _.pick(EXTENSOES_VALIDAS, acceptedFileTypes)
      )}
      labelFileProcessing={'Processando...'}
      labelFileLoadError={'Problemas na leitura arquivo'}
      labelFileProcessingError={'Problemas no upload do arquivo'}
      labelFileProcessingComplete={'Arquivo enviado'}
      labelTapToCancel={'toque para cancelar'}
      labelTapToRetry={'toque para reenviar'}
      labelTapToUndo={'toque para cancelar'}
      onreorderfiles={onReorderFiles}
      onprocessfile={onProcessFile}
      onprocessfilerevert={onProcessFileRevert}
      fileRenameFunction={(file) => {
        return `${_.upperCase(file.basename)}${file.extension}`;
      }}
      server={{ url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76' }}
    />
  );
};
