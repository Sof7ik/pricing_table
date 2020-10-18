const bodyElement = document.body;
// let name, tel;

const closeModal = () => {
    if(document.querySelector('div.modal'))
    {
        document.querySelector('div.modal').remove();  
    }
}

document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('button-get-started'))
    {
        createModal();
    }

    if (event.target === document.querySelector('div.modal'))
    {

        closeModal();
    }
})

// const sendFeedback = (event) => {
//     event.preventDefault();
    
//     name = document.getElementById('name').value;
//     console.log('name: ', name);
//     tel = document.getElementById('tel').value;
//     console.log('tel: ', tel);

//     if(name.trim() !== '' & tel.trim() !== ''){
//         let formData = new FormData();
//         formData.append('name', name);
//         formData.append('tel', tel);

//         fetch('../phpScripts/send.php', 
//         {
//             method: 'POST',
//             body: `name=${name}&tel=${tel}`
//         })
//         .then((res) =>
//         {
//             return res.text();
//         })
//         .then((res) =>
//         {
//             console.log(res);
//         });
//     }
//     else {
//         console.log('Поля заполни дебил!');
//     }
// }

const createModal = () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<div class="innerModal">
        <h1 class="modalTitle">Callback feedback</h1>
        <span class="modalDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi corporis quo, fuga reprehenderit quisquam asperiores recusandae ducimus dicta vel praesentium veritatis magni placeat eligendi provident consequatur iste. Enim, quo rem?</span>
        <form action="/" method="POST">
            <input type="text" name="name" id="name" placeholder="Enter your name here">
            <input type="tel" name="tel" id="tel" placeholder="Enter your tel number here">

            <input type="submit" value="Get callback!">
        </form>
    </div>`;
    bodyElement.insertAdjacentElement('afterbegin', modal);
    modal.style.minHeight = '100vh';
    document.querySelector('input[type="submit"]').addEventListener('click', sendFeedback);
}

