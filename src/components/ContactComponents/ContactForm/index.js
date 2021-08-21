import React, { useState } from "react"
import { services } from "../../../data/services"
import { useForm } from "../../../hooks/useForm"
import {
  Button,
  Error,
  Form,
  Input,
  Label,
  Select,
  TextArea,
} from "./ContactFormElements"

export const ContactForm = () => {
  const [values, handleInputChange, reset] = useForm({
    clientName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [error, setError] = useState(false)

  const { clientName, email, phone, subject, message } = values

  const handleSubmit = e => {
    e.preventDefault()
    if (
      clientName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      setError(true)
      return
    }
    setError(false)
    let myForm = document.getElementById("contactForm")
    let formData = new FormData(myForm)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => reset())
      .catch(error => alert(error))
  }

  return (
    <Form
      autoComplete="off"
      name="contact"
      method="POST"
      data-netlify="true"
      id="contactForm"
      onSubmit={handleSubmit}
    >
      <Label>Nombre *</Label>
      <Input
        type="text"
        name="clientName"
        placeholder="Ingresa tu nombre"
        value={clientName}
        onChange={handleInputChange}
      />
      <Label>Correo Electrónico *</Label>
      <Input
        type="email"
        name="email"
        placeholder="Ingresa tu correo"
        onChange={handleInputChange}
        value={email}
      />
      <Label>Teléfono *</Label>
      <Input
        type="tel"
        name="phone"
        placeholder="Ingresa tu teléfono"
        onChange={handleInputChange}
        value={phone}
      />
      <Label>¿Qué necesitas? *</Label>
      <Select name="subject" onChange={handleInputChange} value={subject}>
        <option value="">--- Selecciona uno de nuestros servicios ---</option>
        {services.map(option => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </Select>
      <Label>Mensaje *</Label>
      <TextArea
        name="message"
        rows="5"
        cols="50"
        placeholder="Escribe tu mensaje aquí..."
        onChange={handleInputChange}
        value={message}
      ></TextArea>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <Button type="submit">Enviar</Button>
    </Form>
  )
}
