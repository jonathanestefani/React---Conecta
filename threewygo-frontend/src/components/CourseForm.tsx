import { useForm } from 'react-hook-form';
import { Box, Button, ChakraProvider, Input, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCourseContext } from '../context/CourseContext';
import { Course } from '../interfaces/Course';
import { useParams } from 'react-router-dom';

interface CourseFormProps {
  onSubmit: (data: any) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onSubmit }) => {
  const { id } = useParams<{ id: string }>(); 
  const { course, getCourse } = useCourseContext();

  const { register, handleSubmit } = useForm({
    defaultValues: course
  });

  // Renomeamos a função interna `onSubmit` para `handleFormSubmit` para evitar conflito
  const handleFormSubmit = (data: any) => {
    onSubmit(data); // Chama a função de envio passada como prop
  };

  useEffect(() => {
    if (course.id == 0 && Number(id) > 0) {
      getCourse(Number(id));
    }
  }, [course]);

  return (
    <ChakraProvider>
        <Box as="form" onSubmit={handleSubmit(handleFormSubmit)} padding={4}>
            <Input type="text" value={course ? course.title : ""} placeholder="Título" {...register("title", { required: true })} mb={2} />
            <Textarea value={course ? course.description : ""} placeholder="Descrição" {...register("description", { required: true })} mb={2} />
            <Input value={course ? course.date : ""} type="date" placeholder="Data" {...register("date", { required: true })} mb={2} />
            <Button type="submit" colorScheme="teal" mt={4}>Salvar</Button>
        </Box>
    </ChakraProvider>
  );
};

export default CourseForm;
