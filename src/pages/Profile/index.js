import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profileContainer">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem Vinda, APIPA</span>
        <Link className="button" to="/incidents/new">
          Cadastrar Novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam
            sunt odit voluptatum provident cumque molestias, tenetur eos! Nisi
            eius quam fugiat tempora architecto ullam placeat expedita in
            doloribus ea.
          </p>

          <strong>VALOR:</strong>
          <p>R$ 125,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam
            sunt odit voluptatum provident cumque molestias, tenetur eos! Nisi
            eius quam fugiat tempora architecto ullam placeat expedita in
            doloribus ea.
          </p>

          <strong>VALOR:</strong>
          <p>R$ 125,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam
            sunt odit voluptatum provident cumque molestias, tenetur eos! Nisi
            eius quam fugiat tempora architecto ullam placeat expedita in
            doloribus ea.
          </p>

          <strong>VALOR:</strong>
          <p>R$ 125,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam
            sunt odit voluptatum provident cumque molestias, tenetur eos! Nisi
            eius quam fugiat tempora architecto ullam placeat expedita in
            doloribus ea.
          </p>

          <strong>VALOR:</strong>
          <p>R$ 125,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}