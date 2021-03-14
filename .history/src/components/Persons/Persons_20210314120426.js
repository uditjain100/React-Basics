const persons = (props) =>
  persons.map((p, index) => {
    return (
      <AppError key={p.id}>
        <Person
          change={(event) => this.nameChangeHandler(event, p.id)}
          click={() => this.deleteHandler(index)}
          name={p.name}
          age={p.age}
        ></Person>
      </AppError>
    );
  });
