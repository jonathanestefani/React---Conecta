import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseForm from '../components/CourseForm';
import { useCourseContext } from '../context/CourseContext';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, ChakraProvider, Text } from '@chakra-ui/react';

const AddCoursePage: React.FC = () => {
  const { course, addNewCourse, editCourse } = useCourseContext();
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const courseToEdit = id ? course : null;

  const handleSubmit = (data: any) => {
    if (courseToEdit) {
      editCourse(courseToEdit.id, data).then(() => navigate('/'));
    } else {
      addNewCourse(data).then(() => navigate('/'));
    }
  };

  return (
    <ChakraProvider>
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Cursos</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>{courseToEdit ? 'Edição' : 'Cadastro'}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <CourseForm onSubmit={handleSubmit} />
        </div>
    </ChakraProvider>
  );
};

export default AddCoursePage;
