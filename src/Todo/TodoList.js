import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { TransitionGroup, CSSTransition } from "react-transition-group";


const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList(props) {
  return (
    <TransitionGroup component="ul" style={styles.ul}>
       {props.todos.map((todo, index) => {
        return (
          <CSSTransition
          key={todo.id}
          classNames={'todo'}
          timeout={1000}
          >
             <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
          </CSSTransition>         
        )
      })}
    </TransitionGroup>
    
     
    
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
