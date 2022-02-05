import React, { useState } from "react";
import Button from "/src/button/button";
import { Label, Input } from "./styled";

function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const isButtonEnable = name && phone && address;

  const buttonEvt = (evt) => {
    evt.preventDefault();
    console.log(
      `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}. Наш менеджер свяжется с Вами по телефону: ${phone}`
    );
  };
  const onChange = (evt, setChange) => setChange(evt.target.value);
  return (
    <form>
      <Label>
        Имя:{" "}
        <Input
          placeholder="Ваше имя"
          name="name"
          value={name}
          onChange={(evt) => onChange(evt, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <Input
          name="phone"
          type="tel"
          placeholder="+7 987 654 32 10"
          value={phone}
          onChange={(evt) => onChange(evt, setPhone)}
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <Input
          name="address"
          placeholder="Куда доставить?"
          value={address}
          onChange={(evt) => onChange(evt, setAddress)}
        />
      </Label>
      <Button onClick={buttonEvt} type="submit" disabled={!isButtonEnable}>
        Оформить
      </Button>
    </form>
  );
}

export default Order;
