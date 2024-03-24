import { Button, SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import { useState } from 'react';

function HomeScreen({navigation}) {

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  return (
    <MainLayout>
    <SafeAreaView style={styles.container}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
    </MainLayout>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 10,
  },
});

export default HomeScreen;
