import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseForm from '../components/CourseForm';
import { useCourseContext } from '../context/CourseContext';
import { ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const AddCoursePage: React.FC = () => {
  const { course, addNewCourse, editCourse } = useCourseContext();
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0)

  const courseToEdit = id ? course : null;

  const handleSubmit = (data: any) => {
    if (courseToEdit) {
      editCourse(courseToEdit.id, data).then(() => navigate('/'));
    } else {
      addNewCourse(data).then(() => navigate('/'));
    }
  };

  const handleTabsChange = (index: number): any => {
    setTabIndex(index);
  }

  return (
    <ChakraProvider>
          <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabList>
              <Tab>Cadastro</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <CourseForm onSubmit={handleSubmit} />
              </TabPanel>
            </TabPanels>
          </Tabs>


      
    </ChakraProvider>
  );
};

export default AddCoursePage;
