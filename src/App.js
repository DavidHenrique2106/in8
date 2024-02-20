import style from './App.module.css';
import Sobre from './pages/sobre/sobre';
import Header from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <section className={style.App}>
      <main className={style.App_body}>
        <header id="home"> {/* Adicionando ID para a seção Home */}
          <Header/>
        </header>
        <main id="cadastro"> {/* Adicionando ID para a seção Cadastro */}
          <Cadastro/>
        </main>
        <footer id="sobre"> {/* Adicionando ID para a seção Sobre */}
          <Sobre />
        </footer>
      </main>
    </section>
  );
}

export default App;
