import React from 'react';
import CourseCard from './CourseCard'; // Certifique-se de importar CourseCard corretamente
import { useCourseContext } from '../context/CourseContext'; // Importação do contexto
import { useNavigate } from 'react-router-dom';
import { Course } from '../interfaces/Course';

interface CourseListProps {
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const CourseList: React.FC<CourseListProps> = ({ onEdit, onDelete }) => {
  const navigate = useNavigate();
  const { courses, removeCourse } = useCourseContext();

  const handleEdit = (id: number) => {
    navigate(`/edit-course/${id}`);
  };

  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course: Course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            date={course.date}
            onEdit={() => handleEdit(course.id) }
            onDelete={() => removeCourse(course.id) }
          />
        ))
      ) : (
        <p>Nenhum curso cadastrado</p>
      )}
    </div>
  );
};

export default CourseList;
