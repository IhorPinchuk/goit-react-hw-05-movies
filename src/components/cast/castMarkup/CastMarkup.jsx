
const CastMarkup = ({image, name}) => {
    return (
        <li >
              <img width={100} src={image} alt={name} />
              <p>{name}</p>
               </li>
    )
}

export default CastMarkup;