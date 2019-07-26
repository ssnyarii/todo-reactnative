import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

export class TodoList extends React.Component {
  doneTodo = (item, index) => {
    this.props.doneTodo(item, index);
  }

  deleteTodo = (index) => {
    this.props.deleteTodo(index);
  }

  render() {
    const { todos } = this.props;

    return (
      <FlatList 
        data={todos}
        renderItem={({item, index}) =>
          <View>
            <Text 
              key={index} 
              onPress={() => this.doneTodo(item, index)}
              style={item.isDone && styles.doneTodo}
            >
              {item.content}
            </Text>
            <Button onPress={() => this.deleteTodo(index)} title="delete" />
            <Button title="go to detail" />
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  doneTodo: {
    color: 'red'
  }
});