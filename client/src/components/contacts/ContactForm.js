import React from 'react'

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { name, email, phone, type } = contact
    return (
        <form>
            <h2 className='text-primary'>
                Add Contact
</h2>
            <input type='text' placeholder='Name' name='name' value={name} onChange={onChange}>
            </input>
            <input type='email' placeholder='Email' name='email' value={email} onChange={onChange}>
            </input>
            <input type='phone' placeholder='Phone' name='phone' value={phone} onChange={onChange}>
            </input>
            <h5 >
                Contact Type
</h5>
            <input type='radio' name='type' value='personal' checked={type === 'personal'} >
                Personal{''}</input>
            <input type='radio' name='type' value='professional' checked={type === 'professional'} >
                Professional{''}</input>
        </form>
    )
}
export default ContactForm
