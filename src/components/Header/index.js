import React from 'react'
import "./style.css"
import logo from "./../../assets/images/Logo.png"

const Header = () => {
  return (
      <header className="headerArea">

        <nav className="navArea">

          <div className="logoArea">
            <img src={logo}/>
          </div>
            
          <div className="titulo">
            <h1>Onde?</h1>
          </div>  

          <div class="campoArea">
            <label for="">
              Cidade:<sup>*</sup>
            </label>
            <select class="inputCidade" name="cidade" id="">
              <option value="0">Selecione uma opção</option>
              <option value="1">SP - PRESIDENTE PRUDENTE</option>
              <option value="2">SP - ALVARES MACHADO</option>
            </select>
          </div>

        </nav>

      </header>
  )
}

export default Header