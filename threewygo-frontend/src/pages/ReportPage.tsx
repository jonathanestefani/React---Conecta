import React from 'react';
import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react';
import { useCourseContext } from '../context/CourseContext';

const ReportPage: React.FC = () => {
  const { courses } = useCourseContext();

  const totalVideoSize = courses.reduce((acc, course) => acc + course.videoSize, 0);

  return (
    <ChakraProvider>
      <Box>
        <Heading as="h2" size="lg">Total Video Size Report</Heading>
        <Text mt={4}>Total video size occupied by all courses: {totalVideoSize} MB</Text>
      </Box>
    </ChakraProvider>
  );
};

export default ReportPage;
