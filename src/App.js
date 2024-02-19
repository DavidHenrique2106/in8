import style from './App.module.css'
import Sobre from './pages/sobre/sobre';
import Header from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <section className={style.App}  >
      <main className={style.App_body} >
        <header>
          <Header/>
        </header>
        <body>
          <Cadastro/>
        </body>
        <footer>
          <Sobre />
        </footer>
      </main>
    </section>
  );
}

export default App;
