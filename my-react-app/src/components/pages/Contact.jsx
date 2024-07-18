import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Contact.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        console.log("Başarıyla gönderildi:", response.data);
        history.push("/");
        toast("Bilgilerin başarıyla gönderildi!");
      })
      .catch((error) => {
        console.error("İletişim bilgileri gönderim hatası:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>İsim:</label>
        <input
          {...register("firstName", {
            required: "İsim zorunludur",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "İsim sadece harflerden oluşmalıdır.",
            },
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label>Soyisim:</label>
        <input
          {...register("lastName", {
            required: "Soyisim zorunludur",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Soyisim sadece harflerden oluşmalıdır.",
            },
          })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <label>Telefon Numarası:</label>
        <input
          {...register("phoneNumber", {
            required: "Telefon numarası zorunludur",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Geçerli bir telefon numarası girmelisiniz (10 rakam).",
            },
          })}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>

      <div>
        <label>Email Adresi:</label>
        <input
          {...register("email", {
            required: "Email adresi zorunludur",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Geçerli bir email adresi girmelisiniz.",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Not:</label>
        <textarea {...register("note")} />
      </div>

      <button type="submit">Gönder</button>
    </form>
  );
}

export default ContactForm;
