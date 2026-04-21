const Card = () => {

  const user = 'Kanav';
  const age = 21;

  return (
    <>
      {/* <h1>Hello guys i am user</h1> */}
      {/* To print any variable we have to use curly braces */}
      <div className="card">
        <h1>Hello guys i am {user}</h1>
        <h2>and i am {age} years old</h2>
      </div>
    </>
  )
}

export default Card;