import { API_BASE } from '../configs/Api';

export default class ProcessoService {
  static tipos = async (_) => {
    const options = {
      method: 'GET',
      url: `processo/tipos`,
    };

    return await API_BASE(options);
  };

  static assuntos = async (tipo_id) => {
    const options = {
      method: 'GET',
      url: `processo/tipos/${tipo_id}/assuntos`,
    };

    return await API_BASE(options);
  };
}
