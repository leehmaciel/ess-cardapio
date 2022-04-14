import React, { useState } from "react";
import {useForm} from "react-hook-form";
import Axios from "axios";
import './Add.css';

let url = "http://localhost:3001/";

function Add() {

  const {register, handleSubmit} = useForm();

  const onSubmit = (values) => {
    Axios.post(url + "add", {
      name: values.name,
      price: values.price,
      description: values.description, 
    }).then((response) => {
        console.log(response);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Nome:
        <input 
          type="text" 
          {...register("name")}
          placeholder="Digite o nome do produto" 
        />
      </label>

      <label>Preco:
        <input 
        type="text" 
        {...register("price")}
        placeholder="Digite o valor"
      />
      </label>

      <label>Descricao:
        <input 
          type="text" 
          {...register("description")}
          placeholder="Digite a descricao do seu produto"
        />
      </label>

      <button type="submit">Adicionar</button>

    </form>
  );
}

export default Add;