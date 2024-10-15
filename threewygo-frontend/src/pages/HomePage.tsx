import React, { useState } from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Stack, Text, useToast } from '@chakra-ui/react';
import { Route, useNavigate } from 'react-router-dom';
import CourseList from '../components/CourseList';
import { useCourseContext } from '../context/CourseContext';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider } from '@chakra-ui/react';
import AddCoursePage from './AddCoursePage';
import ReportPage from './ReportPage';

const HomePage: React.FC = () => {
  const toast = useToast()
  const navigate = useNavigate();
  const { removeCourse } = useCourseContext();
  const [tabIndex, setTabIndex] = useState(0)

  const handleEdit = (id: number) => {
    navigate(`/edit-course/${id}`);
  };

  const handleDelete = (id: number) => {
    removeCourse(id);

    toast({
      position: 'bottom-left',
      render: () => (
        <Box color='white' p={3} bg='blue.500'>
          Removido com sucesso!
        </Box>
      ),
    })
  };

  const handleTabsChange = (index: number): any => {
    setTabIndex(index);
  }

  return (
    <ChakraProvider>
        <Box>
          <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabList>
              <Tab>Lista</Tab>
              <Tab>Report</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CourseList onEdit={handleEdit} onDelete={handleDelete} />
              </TabPanel>
              <TabPanel>
                <ReportPage />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
    </ChakraProvider>
  );
};

export default HomePage;
