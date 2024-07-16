import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Image, Alert } from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskContent, setNewTaskContent] = useState('');

  useEffect(() => {
    setTasks([
      { id: '1', title: 'Công việc 1', content: 'Nội dung công viêc 1', completed: false },
      { id: '2', title: 'Công việc 2', content: 'Nội dung công viêc 2', completed: true },
    ]);
  }, []);

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: String(tasks.length + 1),
      title: newTaskTitle,
      content: newTaskContent,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId) => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    
    if (!taskToUpdate) {
      return;
    }
  
    if (taskToUpdate.completed) {
      Alert.alert(
        'Thông báo',
        'Công việc này đã hoàn thành.',
        [
          {
            text: 'OK',
            style: 'cancel',
          }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Xác nhận hoàn thành công việc',
        'Bạn có chắc chắn muốn đánh dấu công việc này đã hoàn thành?',
        [
          {
            text: 'Không',
            style: 'cancel',
          },
          {
            text: 'Có',
            onPress: () => {
              const updatedTasks = tasks.map(task =>
                task.id === taskId ? { ...task, completed: true } : task
              );
              setTasks(updatedTasks);
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  const deleteTask = (taskId) => {
    Alert.alert(
      'Xác nhận xóa công việc',
      'Bạn có chắc chắn muốn xóa công việc này?',
      [
        {
          text: 'Không',
          style: 'cancel',
        },
        {
          text: 'Có',
          onPress: () => {
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (

    <View
      style={styles.taskItem}>
        <View>
          <Text style={[styles.taskTitle, item.completed && styles.completedTask]}>
            {item.title}
          </Text>
          <Text>{item.content}</Text>
        </View>
        <TouchableOpacity style={styles.img_done}
            onPress={() => updateTaskStatus(item.id)}>
          <Image source={require('./Lab2/img/done_outline.png')} style={{width: 30, height: 30, resizeMode:'cover'}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.img_delete}
            onPress={() => deleteTask(item.id)}>
          <Image source={require('./Lab2/img/delete24.png')} style={{width: 30, height: 30, resizeMode:'cover'}}/>
        </TouchableOpacity>
    </View>
  );

  const completedTasksCount = tasks.filter(task => task.completed).length;
  const remainingTasksCount = tasks.length - completedTasksCount;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>QUẢN LÝ CÔNG VIỆC</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tiêu đề"
          value={newTaskTitle}
          onChangeText={text => setNewTaskTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập nội dung"
          value={newTaskContent}
          onChangeText={text => setNewTaskContent(text)}
        />
        <Button title="Add CV" onPress={addTask} />
      </View>
      <Text style={styles.text_title2}>DANH SÁCH CÔNG VIỆC</Text>
      <Text style={styles.taskCount}>
        {`${remainingTasksCount} công việc đang làm, ${completedTasksCount} đã hoàn thành`}
      </Text>
      <FlatList
        style={styles.listContainer}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    flex: 1,
  },
  taskItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row'
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  taskCount: {
    marginBottom: 10,
    color: '#999',
  },
  text_title2:{
    fontSize: 26,
    color: 'gray',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center'
  },
  img_done:{
    justifyContent: 'center',
    position: 'absolute',
    end: 0,
    bottom: 0,
    top: 0,
    marginEnd: 60
  },
  img_delete:{
    justifyContent: 'center',
    position: 'absolute',
    end: 0,
    bottom: 0,
    top: 0,
    marginEnd: 10
  }
});

export default TodoApp;