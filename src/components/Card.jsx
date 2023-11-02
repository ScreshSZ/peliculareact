

const Card = ({image,title}) => {
  return (
    <div className="card">
        <h2>{title}</h2>
        <img src={image} alt={title}></img>
    </div>
  )
}

export default Card