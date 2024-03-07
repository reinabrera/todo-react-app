import Note from "./Note";

export default function Notes({data, dispatch}) {
  return(<div className="container">
  <div className="notes-wrapper">{data.map((noteItem, index) => {
        return (
          <Note
            dispatch={dispatch}
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            completed={noteItem.completed}
          />
        );
      })}</div>
    
  </div>);
}