import inicio from '/src/assets/inicio/inicio.webp'

export const Header = () => {
    return (
        <div className='pb-5'>
            <img className="w-full border-8 border-green-800" src={inicio} alt="Imagen inicio"/>
        </div>
    )
}

export default Header

