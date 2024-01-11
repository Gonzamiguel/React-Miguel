import cards from '/src/assets/cards/lionel-messi-seleccion.jpg'

export const Header = () => {
    return (
        <div className='pb-5'>
            <img className="h-screen w-screen object-cover object-top" src={cards} alt="Imagen inicio"/>
        </div>
    )
}

export default Header

