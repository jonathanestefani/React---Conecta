import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCourses, getCourseById, addCourse, updateCourse, deleteCourse } from '../services/api';
import { Course } from '../interfaces/Course';

interface CourseContextType {
  courses: Course[];
  course: Course;
  getCourse: (id: number) => void;
  setCourse: (course: Course) => void;
  fetchCourses: () => void;
  addNewCourse: (course: Course) => Promise<void>;
  editCourse: (id: number, course: Course) => Promise<void>;
  removeCourse: (id: number) => Promise<void>;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
};

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({ id: 0, title: "", description: "", date: "", videoSize: 0});

  const fetchCourses = async () => {
    const response = await getCourses();
    setCourses(response.data.result.data);
  };

  const getCourse = async (id: number) => {
    const response = await getCourseById(id);
    setCourse(response.data.result);
  };

  const addNewCourse = async (course: Course) => {
    await addCourse(course);
    fetchCourses();
  };

  const editCourse = async (id: number, course: Course) => {
    await updateCourse(id, course);
    fetchCourses();
  };

  const removeCourse = async (id: number) => {
    await deleteCourse(id);
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider value={{ courses, course, setCourse, getCourse, fetchCourses, addNewCourse, editCourse, removeCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
