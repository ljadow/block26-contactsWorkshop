function ContactRow ({selectedFn2, singleContact}){
return (
    <tr onClick={()=>selectedFn2(singleContact.id)}>
        <td>{singleContact.name}</td>
        <td>{singleContact.email}</td>
        <td>{singleContact.phone}</td>
    </tr>
)
}

export default ContactRow