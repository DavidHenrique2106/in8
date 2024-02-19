import React from 'react';
import style from './lista.module.css'

function Lista({ users }) {
console.log(users)
    return (
        <div className={style.lista} >
            <label className={style.lista_titulo} >LISTA DE CADASTRO</label>
            <div className={style.body_table} >
                <table className={style.lista_tabela} >
                    <thead>
                        <tr>
                            <th style={{ width: '100px' }}>ID</th>
                            <th style={{ width: '300px' }}>NOME</th>
                            <th style={{ width: '300px' }}>E-MAIL</th>
                            <th style={{ width: '300px' }}>NASCIMENTO</th>
                            <th style={{ width: '300px' }}>TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.nascimento}</td>
                                <td>{user.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lista;
