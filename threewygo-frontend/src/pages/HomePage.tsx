import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, ChakraProvider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CourseList from '../components/CourseList';
import { useCourseContext } from '../context/CourseContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { removeCourse } = useCourseContext();

  const handleEdit = (id: number) => {
    navigate(`/edit-course/${id}`);
  };

  const handleDelete = (id: number) => {
    removeCourse(id);
  };

  return (
    <ChakraProvider>
        <Box>
            <Breadcrumb separator='-'>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Cursos</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/add-course'>Cadastro</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            
            <CourseList onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
    </ChakraProvider>
  );
};

export default HomePage;
