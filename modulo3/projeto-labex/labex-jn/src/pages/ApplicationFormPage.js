import React, {useState} from "react";
import { ContainerForm } from "../components/styles/StyleApplicationForm";
import Header from "../components/Header";
import { ButtonForm, Form, Input, Select } from "../components/styles/StyleGeral";
import { useForm } from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData"
import { BaseURL } from "../constants/urls";
import Countries from "../components/Countries";
import axios from "axios";

export default function ApplicationFormPage() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [id, setId] = useState("")
  const [trips, isLoading, error] = useRequestData(`${BaseURL}trips`);

  const onChangeId = (event) =>{
    setId(event.target.value)
  }
  const tripsList =
    trips &&
    trips.trips.map((item) => {
      return <option value={item.id} >{item.name}</option>;
    });

  const onSubmit = (event) =>{
    event.preventDefault()
    const url = `${BaseURL}trips/${id}/apply`;
    
    const headers = {
      'Content-Type': 'application/json'}
    axios
      .post(url, form, {headers})
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    cleanFields()
  }

  return (
    <ContainerForm>
      <Header path={-1} />
      <h1>Inscreva-se</h1>
      <Form onSubmit={onSubmit}>
        <Select required onChange={onChangeId}>
          <option disabled selected value={""}>Viagem:</option>
          {tripsList}
        </Select>
        <Input
          required
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <Input
          required
          placeholder="Idade"
          name="age"
          value={form.age}
          onChange={onChange}
          type="number"
          min={18}
         />
        <Input
          required
          placeholder="Sua história"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
         />
        <Input
          required
          placeholder="Profissão"
          name="profession"
          value={form.profession}
          onChange={onChange}
         />
         <Countries value={form.country} onChange={onChange}/>
        <ButtonForm>APLICAR</ButtonForm>
      </Form>
    </ContainerForm>
  );
}
