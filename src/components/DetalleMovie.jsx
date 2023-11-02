

const DetalleMovie = ({image,title,description,date,valoracion,adult}) => {
  return (
    <div className="detallesCard">
        <img src={image} alt='title'></img>
        <h1>{title}</h1>
        <h3>{adult ? "Mayores 18 ❌" : "Apta todo Publico 💚"}</h3>
        <h2>Fecha: {date}</h2>
        <h2>Valoracion: {valoracion} ⭐</h2>
        <p>{description}</p>
    </div>
  )
}

export default DetalleMovie