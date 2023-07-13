function NewComponent(props) {
    return (
      <div className='component'>
          <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2> 
           <p> {props.description}</p>
        </div>
      
    );
  }
  
  export default NewComponent;
  