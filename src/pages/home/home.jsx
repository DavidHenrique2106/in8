import { Link } from 'react-scroll';
import style from './home.module.css';
import logo from './logo-in8-dev.svg';
import { useRef } from 'react';


function Header() {
  const menu_ref = useRef();

  function abriMenu() {
    let condicaoMenu = menu_ref.current.style.display;
    if (condicaoMenu === 'none') {
      menu_ref.current.style.display = 'flex';
    } else {
      menu_ref.current.style.display = 'none';
    }
  }

  return (
    <section className={style.header}>
      <div ref={menu_ref} style={{ display: 'none' }} className={style.body_header_nav_list_mobile}>
        <ul>
          <li>
            <Link to="cadastro" smooth={true} duration={500}>
              Cadastro
            </Link>
          </li>
          <li>
            <Link to="lista" smooth={true} duration={500}>
              Lista
            </Link>
          </li>
          <li>
            <Link to="sobre" smooth={true} duration={500}>
              Sobre Mim
            </Link>
          </li>
        </ul>
      </div>
      <main className={style.body_header}>
        <div className={style.body_header_nav}>
          <button onClick={() => abriMenu()} className={style.body_header_button_mobile}></button>
          <div className={style.body_header_nav_logo}>
            <img src={logo} style={{ width: '150px' }} alt="Logo" />
          </div>
          <div className={style.body_header_nav_list}>
            <ul>
              <li>
                <Link to="cadastro" smooth={true} duration={500}>
                  Cadastro
                </Link>
              </li>
              <li>
                <Link to="lista" smooth={true} duration={500}>
                  Lista
                </Link>
              </li>
              <li>
                <Link to="sobre" smooth={true} duration={500}>
                  Sobre Mim
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="cadastro" className={style.body_header_titulo}>
          <p>ESTÁGIO</p>
          <label>PROVA DE SELEÇÃO</label>
        </div>
      </main>
    </section>
  );
}

export default Header;
