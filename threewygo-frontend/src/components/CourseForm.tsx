import { useForm } from 'react-hook-form';
import { Box, Button, ChakraProvider, Input, Text, Textarea, useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { useCourseContext } from '../context/CourseContext';
import { Course } from '../interfaces/Course';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';

interface CourseFormProps {
  onSubmit: (data: any) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const toast = useToast()

  const { id } = useParams<{ id: string }>(); 
  const { course, getCourse, setCourse } = useCourseContext();
  const [ date, setDate] = useState(new Date());
  const [ form, setData] = useState(course);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videosize, setVideosize] = useState(0);

  const { register, handleSubmit } = useForm({
    defaultValues: course
  });

  const back = () => {
    navigate(`/`);
  };

  const handleFormSubmit = () => {
    const data = { id: course.id, title: title, description: description, date: date, videoSize: 0 };
    console.log('data: ', data);
    onSubmit(data);

    navigate(`/`);
  };

  const valueInput = (e: any) => setData({ ...course, [e.target.name]: e.target.value});

  const newForm = () => {
    navigate(`/add-course`);
    
    const data = { id: 0, title: "", description: "", date: new Date(), videoSize: 0 };

    setTitle(data.title);
    setDescription(data.description);
    setDate(data.date);

    setCourse(data);
  };

  useState((() => {
    console.log('componentDidMountHook...')

    if (course.id != Number(id)) {
      getCourse(Number(id));

      console.log(course);
    }
  }))

  const load = useCallback(() => {
      console.log(course.id, Number(id));

      setTitle(course.title);
      setDescription(course.description);
      setDate(course.date);
  }, [id, course])

  useEffect(() => {
    load();
  }, [load]);

  return (
    <ChakraProvider>
        <Box as="form" onSubmit={handleSubmit(handleFormSubmit)} padding={4}>
            <Input type="text" 
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder="Título" mb={2} />

            <Textarea
              value={description}
              onChange={event => setDescription(event.target.value)}
              placeholder="Descrição"
              mb={2}
            />

            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
            />

            <Text textAlign={[ 'right' ]} >
              <Button onClick={back} colorScheme="blue" mt={2} mr={2}>Voltar</Button>
              <Button onClick={newForm} colorScheme="blue" mt={2} mr={2}>Novo</Button>
              <Button type="submit" colorScheme="teal" mt={2}>Salvar</Button>
            </Text>
        </Box>
    </ChakraProvider>
  );
};

export default CourseForm;
