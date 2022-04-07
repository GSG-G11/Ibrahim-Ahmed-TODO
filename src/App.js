import React, { Component } from 'react';import Header from './components/header';
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
    error: false,
    notes: [],
    colors: [],
  };

  closeModalHandler = (isOpen) => {
    this.setState({
      isOpen: !isOpen,
      componentName: '',
      noteId: '',
      title: '',
      description: '',
      error: false,
    });
  };

  openModalHandler = (componentName) => {
    this.setState({
      isOpen: !this.state.isOpen,
      componentName: componentName,
      title: '',
      description: '',
      error: false,
    });
  };

  openEditModalHandler = (componentName, id, title, description) => {
    this.setState({
      noteId: id,
      title,
      description,
      isOpen: !this.state.isOpen,
      componentName,
      error: false,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCreateTodo = () => {
    let allNotes = [...this.state.notes];
    if (this.state.title.length && this.state.description.length) {
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
    } else {
      this.setState({ error: true });
    }
  };

  handleUpdateTodo = () => {
    if (this.state.title.length && this.state.description.length) {
      const { noteId, title, description } = this.state;
      let allNotes = [...this.state.notes];
      const UpdateNotes = allNotes.filter(({ id }) => noteId === id);
      UpdateNotes[0].title = title;
      UpdateNotes[0].description = description;
      this.setState({ isOpen: false, componentName: '' });
    } else {
      this.setState({ error: true });
    }
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

  getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));


  render() {
    const { isOpen, componentName, notes, title, description, error, colors } =
      this.state;
    const componentsLookUp = { CreateNotes, UpdateNotes };
    let renderComponent;

    if (colors) {
      document.body.style.background = `linear-gradient(170deg,${colors.shift()} 5%,${colors.pop()} 98.79%)`;
    }

    if (componentName) {
      const SelectedComponent = componentsLookUp[componentName];
      if (SelectedComponent) {
        renderComponent = (
          <SelectedComponent
            title={title}
            description={description}
            error={error}
            handleChange={this.handleChange}
            handleCreateTodo={this.handleCreateTodo}
            handleUpdateTodo={this.handleUpdateTodo}
          />
        );
      }
    }

    return (
      <div style={{ background: 'red' }}>
        <div>
          <Header
            getColors={this.getColors}
            openModalHandler={this.openModalHandler}
            numNotes={notes.length}
          />
          <Body
            notes={notes}
            deleteCardHandler={this.deleteCardHandler}
            openEditModalHandler={this.openEditModalHandler}
            changeCompleted={this.changeCompleted}
          />
        </div>

        {isOpen && (
          <Modal closeModalHandler={() => this.closeModalHandler(isOpen)}>
            {renderComponent}
          </Modal>
        )}
      </div>
    );
  }
}
