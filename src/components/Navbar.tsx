import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown} from '@fortawesome/free-solid-svg-icons';

import placeHolderUser from '../assets/user.jpg'
import {useState} from 'react';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () =>{
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <nav className="absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
            <div>
                <h1 className='hidden'>Imagiflix</h1>
                <img src={placeHolderUser} alt="imagiflix" />
                <ul className='grid grid-flow-col gap-4'>
                    <li className='font-bold'>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                </ul>
            </div>
            <div className='justify-self-end justify-items-end'>
                <form className='relative w-64'>
                    <input 
                    className='w-full text-white bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100'
                    type='text' 
                    placeholder='Títulos, gente, gêneros'/>
                    <button className='search absolute right-0 py-1 px-2 text-white' onClick={(e) => e.preventDefault()}>
                    <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <div className='relative flex ml-4'>
                        <img src={placeHolderUser} alt="foto de perfil"  onClick={() => handleClick()}/>
                        <button type='button' onClick={() => handleClick()}>
                        <FontAwesomeIcon className='ml-2' icon={faCaretDown}/>
                        </button>
                        <ul className={`absolute mt-10 top-0 right-0 w-32 bg-black rounded p-4 transition-all duration-500 ease-in-out ${!isMenuOpen && 'opacity-0 invisible'}`}>
                            <li>Minha conta</li>
                            <li>Sair</li>
                        </ul>
                    </div>
                </form>
            </div>

        </nav>
    )
}

export default Navbar;