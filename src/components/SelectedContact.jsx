import { useEffect, useState } from "react"

function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState(null);
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
            <h1>Contact Details</h1>
            <h2> {contact.name} </h2>
        </div>
    )
}
export default SelectedContact