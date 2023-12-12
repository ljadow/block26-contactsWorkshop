import { useEffect, useState } from "react"
import '../App.css'

function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState({});
    useEffect(() => {
        async function getSingleContact() {
            const res = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const data = await res.json();
            setContact(data)
        }
        getSingleContact();
    }, [])

    console.log("Selected contact: ", contact)
    return (
        <div>
            <h1>{contact.name}'s Details</h1>
            <h2> Username: {contact.username} </h2>
            <h2> Email: {contact.email} </h2>
            <h2> Phone: {contact.phone} </h2>
            <h2> Website: {contact.website} </h2>
            <button onClick={() => setSelectedContactId(null)} >Back to full list</button>
        </div>
    )
}
export default SelectedContact