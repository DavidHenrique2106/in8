import { useContext, useEffect, useState } from "react";
import style from "./cadastro.module.css";
import Lista from "../lista/lista";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");

  const [users, setUsers] = useState([]);

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyDJJohRo3MpzNztjTR8sTE-2z_xgBsafF0",
    authDomain: "provain8-3367a.firebaseapp.com",
    projectId: "provain8-3367a",
  });

  const db = getFirestore(firebaseApp);
  const userCollection = collection(db, "users");

  async function createUser() {
    await addDoc(userCollection, {
      name,
      email,
      telefone,
      nascimento
    });

    setName("");
    setEmail("");
    setTelefone("");
    setNascimento("");

    getUsers();
  }

  async function getUsers() {
    const data = await getDocs(userCollection);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <section className={style.cadastro}>
        <main className={style.cadastro_body}>
          <h1 className={style.cadastro_body_titulo}> CADASTRO</h1>
          <form className={style.cadastro_body_form}>
            <div className={style.cadastro_body_form_input}>
              <label>Nome</label>
              <input
                name="nome"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_input}>
              <label>E-mail</label>
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_input}>
              <label>Nascimento</label>
              <input
                name="nascimento"
                type="text"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
              />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_input}>
              <label>Telefone</label>
              <input
                name="telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <p style={{ color: "red" }}></p>
            </div>
            <div className={style.cadastro_body_form_btn}>
              <button
                className={style.cadastro_body_form_button}
                type="button"
                onClick={createUser}
              >
                CADASTRAR
              </button>
            </div>
          </form>
        </main>
      </section>
      <div>
        <Lista users={users} />
      </div>
    </>
  );
}

export default Cadastro;
