import React from "react";
import contacts from "../contacts.json";
import { useState } from "react";

function Contacts() {
  const [contactsLists, setContacsList] = useState(contacts.slice(0, 5));
  const handleAgrega = () => {
    if (contactsLists.length === contacts.length) {
      return;
    }

    const randomNumber = Math.floor(Math.random() * contacts.length);

    const contactsId = contactsLists.map((eachContacts) => eachContacts.id);
    const randomContact = contacts[randomNumber];

    if (contactsId.includes(randomContact.id)) {
      handleAgrega();
    } else {
      setContacsList([randomContact.id, ...contactsLists]);
    }
  };

  return (
    <div>
      <h2>Contacts</h2>
      <button onClick={handleAgrega}>Add Random Contact </button>

      {contactsLists.map((elem) => {
        return (
          <table>
            <img src={elem.pictureUrl} alt="pictur" width={"100px"} />
            <h3>Name {elem.name} </h3>
            <h3>Popularity {elem.popularity}</h3>
            <h3>Won Oscar {elem.wonOscar}</h3>
            <h3>Won Emmy{elem.wonEmmy}</h3>
          </table>
        );
      })}
    </div>
  );
}

export default Contacts;
