function show() {
    // Obter um elemento único a partir do seu id
    const contactlist = document.getElementById('contact-list')
    console.log(contactlist)

    // Obter vários elementos (HTMLCollection) a partir de um nome de tag
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // Obter vários elementos (HTMLCollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)

     // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)
    
    // Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)

    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
    
}