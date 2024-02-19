import { useContext } from "react";
import style from "./cadastro.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Lista from "../lista/lista";

function Cadastro() {
  return (
    <>
      <section className={style.cadastro}>
        <main className={style.cadastro_body}>
          <h1 className={style.cadastro_body_titulo}> CADASTRO</h1>
          <form className={style.cadastro_body_form}>
            <div className={style.cadastro_body_form_input}>
              <label>Nome</label>
              <input name="nome" type="text" />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_input}>
              <label>E-mail</label>
              <input name="email" type="text" />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_input}>
              <label>Nascimento</label>
              <input name="nascimento" type="text" />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_input}>
              <label>Telefone</label>
              <input name="telefone" type="text" />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_btn}>
              <button className={style.cadastro_body_form_button}>
                CADASTRAR
              </button>
            </div>
          </form>
        </main>
      </section>
      <div>
        <Lista />
      </div>
    </>
  );
}

export default Cadastro;
