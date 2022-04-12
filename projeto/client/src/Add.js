import React, { useState } from "react";
import {useForm} from "react-hook-form";
import './Add.css';

function Add() {

  const {register, handleSubmit} = useForm();

  const onSubmit = (event) => {
    console.log(event);
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
        {...register("cost")}
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