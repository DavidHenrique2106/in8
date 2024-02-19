import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import style from './lista.module.css'

function Lista() {

    function formatDate(date) {

        const dtnasc = new Date(date)

        return (`  ${dtnasc.getDate() < 9 ? '0' + dtnasc.getDate() : dtnasc.getDate()}/${dtnasc.getMonth() < 9 ? '0' + dtnasc.getMonth() : dtnasc.getMonth()}/${dtnasc.getFullYear()} `)

    }

    return (
        <div className={style.lista} >
            <label className={style.lista_titulo} >LISTA DE CADASTRO</label>
            <div className={style.body_table} >
                <table className={style.lista_tabela} >
                    <thead>
                        <tr>
                            <th style={{ width: '100px' }}></th>
                            <th style={{ width: '300px' }} >NOME</th>
                            <th style={{ width: '300px' }}>E-MAIL</th>
                            <th style={{ width: '300px' }} >NASCIMETNO</th>
                            <th style={{ width: '300px' }}>TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td>{formatDate()}</td>
                                <td></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lista