const persons = (props) =>
  props.persons.map((p, index) => {
    return (
      <AppError key={p.id}>
        <Person
          change={(event) => props.nameChangeHandler(event, p.id)}
          click={() => props.deleteHandler(index)}
          name={p.name}
          age={p.age}
        ></Person>
      </AppError>
    );
  });
