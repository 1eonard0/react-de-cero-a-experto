export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{ height: 200 }} >
        <h2 className="text-capitalize">#{id} - {name}</h2>

        {/* Imagenes */}
        <div>
            <img src={sprites} alt={name} />
        </div>
    </section>
  )
}
