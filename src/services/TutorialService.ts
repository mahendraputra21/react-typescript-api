import http from "../http-common";
import ITutorialData from "../types/Tutorial";

const getAll = () => {
  return http.get<Array<ITutorialData>>("/Products");
};

const get = (id: any) => {
  return http.get<ITutorialData>(`/Products/${id}`);
};

const create = (data: ITutorialData) => {
  return http.post<ITutorialData>("/Products", data);
};

const update = (id: any, data: ITutorialData) => {
  return http.put<any>(`/Products`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/Products/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/Products`);
};

const findByName = (name: string) => {
  return http.get<Array<ITutorialData>>(`/Products/Search?name=${name}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName,
};

export default TutorialService;
