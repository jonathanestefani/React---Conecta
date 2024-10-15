import { ChakraProvider, Box, Text, Button } from '@chakra-ui/react';

interface CourseCardProps {
  title: string;
  description: string;
  date: Date;
  onEdit: () => void;
  onDelete: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, date, onEdit, onDelete }) => {
  return (
    <ChakraProvider>
      <Box borderWidth="1px" borderRadius="lg" padding={4}>
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
        <Text color="gray.500">Data: {date.toString()}</Text>
        <Button onClick={onEdit} colorScheme="blue" mt={2}>Editar</Button>
        <Button onClick={onDelete} colorScheme="red" mt={2} ml={2}>Excluir</Button>
      </Box>
    </ChakraProvider>
  );
};

export default CourseCard;
