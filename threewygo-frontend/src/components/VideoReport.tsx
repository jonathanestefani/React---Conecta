import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, ChakraProvider } from '@chakra-ui/react';
import axios from '../services/api';

const VideoReport: React.FC = () => {
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    axios.get('/courses').then(response => {
      const totalSize = response.data.reduce((acc: number, course: any) => acc + course.videoSize, 0);
      setTotalSize(totalSize);
    });
  }, []);

  return (
    <ChakraProvider>
      <Box>
        <Heading as="h2" size="lg">Total Video Size Report</Heading>
        <Text>Total video size occupied by all courses: {totalSize} MB</Text>
      </Box>
    </ChakraProvider>
  );
};

export default VideoReport;
