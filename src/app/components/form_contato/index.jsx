"use client";
import React, { useState } from "react";
import "./form.css";
const FormContact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    website: "",
    tipo: "aluno",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      website: "",
      tipo: "aluno",
      mensagem: "",
    });
  };

  return (
    <div className="wrapper_form">
      <h4 className="form_title"> Contato </h4>
      <form onSubmit={handleSubmit} className="form_contact">
        <label>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="telefone"
            placeholder="Phone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
        <label>
          <select name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="aluno">Aluno</option>
            <option value="investidor">Investidor</option>
            <option value="pesquisador">Pesquisador</option>
          </select>
        </label>
        <label>
          <textarea
            name="mensagem"
            placeholder="Escreva sua mensagem apra nós"
            value={formData.mensagem}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormContact;
