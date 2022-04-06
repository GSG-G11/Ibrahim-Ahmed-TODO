import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import Modal from './components/modal';
import CreateNotes from './components/forms/CreateNotes';
import UpdateNotes from './components/forms/UpdateNotes';

export default class App extends Component {
  state = {
    noteId: '',
    isOpen: false,
    componentName: '',
    title: '',
    description: '',
    notes: [
      {
        id: 1,
        title: 'Learn React',
        description: 'Learn React',
        createdAt: 'Wed Apr 06 2022',
        done: false,
      },
      {
        id: 2,
        title: 'Learn React 2',
        description: 'Learn React2',
        createdAt: 'Wed Apr 06 2022',
        done: true,
      },
    ],
  };

  closeModalHandler = (isOpen) => {
    this.setState({
      isOpen: !isOpen,
      componentName: '',
      noteId: '',
      title: '',
      description: '',
    });
  };

  openModalHandler = (componentName) => {
    this.setState({
      isOpen: !this.state.isOpen,
      componentName: componentName,
    });
  };

  openEditModalHandler = (componentName, id, title, description) => {
    this.setState({
      noteId: id,
      title,
      description,
      isOpen: !this.state.isOpen,
      componentName,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCreateTodo = () => {
    let allNotes = [...this.state.notes];
    allNotes = [
      ...allNotes,
      {
        id: allNotes.length ? allNotes.pop().id + 1 : 1,
        title: this.state.title,
        description: this.state.description,
        createdAt: new Date().toDateString(),
        done: false,
      },
    ];
    this.setState({ notes: allNotes, isOpen: false, componentName: '' });
  };

  handleUpdateTodo = () => {
    const { noteId, title, description } = this.state;
    let allNotes = [...this.state.notes];
    const UpdateNotes = allNotes.filter(({ id }) => noteId === id);
    UpdateNotes[0].title = title;
    UpdateNotes[0].description = description;
    this.setState({ isOpen: false, componentName: '' });
  };

  deleteCardHandler = (noteId) => {
    let allNotes = [...this.state.notes];
    const allButDeleted = allNotes.filter(({ id }) => noteId !== id);
    this.setState({ notes: allButDeleted });
  };

  changeCompleted = (noteId) => {
    let allNotes = [...this.state.notes];
    const UpdateNotes = allNotes.filter(({ id }) => noteId === id);
    UpdateNotes[0].done = !UpdateNotes[0].done;
    this.setState({ isOpen: false, componentName: '' });
  };

  render() {
    const { isOpen, componentName, notes, title, description } = this.state;
    const componentsLookUp = { CreateNotes, UpdateNotes };
    let renderComponent;

    if (componentName) {
      const SelectedComponent = componentsLookUp[componentName];
      if (SelectedComponent) {
        renderComponent = (
          <SelectedComponent
            title={title}
            description={description}
            handleChange={this.handleChange}
            handleCreateTodo={this.handleCreateTodo}
            handleUpdateTodo={this.handleUpdateTodo}
          />
        );
      }
    }
    return (
      <>
        <div>
          <Header openModalHandler={this.openModalHandler} />
          <Body
            notes={notes}
            deleteCardHandler={this.deleteCardHandler}
            openEditModalHandler={this.openEditModalHandler}
            changeCompleted={this.changeCompleted}
          />
        </div>

        <Modal
          isOpen={isOpen}
          closeModalHandler={() => this.closeModalHandler(isOpen)}>
          {renderComponent}
        </Modal>
      </>
    );
  }
}
