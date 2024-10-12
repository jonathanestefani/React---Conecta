import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCourses = () => {
  return api.get('/courses');
};

export const getCourseById = (id: number) => {
  return api.get(`/courses/${id}`);
};

export const addCourse = (course: any) => {
  return api.post('/courses', course);
};

export const updateCourse = (id: number, course: any) => {
  return api.put(`/courses/${id}`, course);
};

export const deleteCourse = (id: number) => {
  return api.delete(`/courses/${id}`);
};

export default api;
