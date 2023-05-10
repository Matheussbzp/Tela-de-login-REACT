import { useState } from 'react';
import './ReactSideBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome,AiFillSetting } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsFillBookFill } from 'react-icons/bs';

function ReactSideBar(){
    const [show,setShow]=useState(false);
    return(
        <div>
          <div className={show?'sidebar1':'sidebar'}>
            <ul>
                <div className='main' onClick={()=>setShow(!show)}>
                    <GiHamburgerMenu className='icon' />
                </div>
                <li>
                    <AiOutlineHome className='icon' />
                    {show?"":<h2>Inicio</h2>}
                </li>
                <li>
                    <TbLayoutDashboard className='icon' />
                    {show?"":<h2>Dashboard</h2>}
                </li>
                <li>
                    <CgProfile className='icon' />
                    {show?"":<h2>Meu perfil</h2>}
                </li>
                <li>
                    <AiFillSetting className='icon' />
                    {show?"":<h2>Configurações</h2>}
                </li>
                <li>
                    <BsFillBookFill className='icon' />
                    {show?"":<h2>Sobre Nós</h2>}
                </li>
            </ul>
          </div>
        </div>
    );
}
export default ReactSideBar;