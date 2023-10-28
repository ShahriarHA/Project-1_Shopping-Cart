let addItemButton = document.querySelector('#addItems');
// addItemButton = addItemButton.getElementsByTagName('i');
console.log(addItemButton);
let tcards = document.querySelector('#total-cards');
let container = document.querySelector('.container');

container.addEventListener('click',reloadPage);
addItemButton.addEventListener('click', addItemToTheCart);
document.addEventListener('DOMContentLoaded', addElementFLS);
tcards.addEventListener('click',gotoToatalCards);

function reloadPage(e){
    // console.log(e.target);
    // if(e.target){
    //     // window.location.reload();
    // }
}

function addItemToTheCart(e) {
    let t = e.target.id;
    // console.log(t);
    let allIcons = addItemButton.querySelectorAll('i');
    // console.log(allIcons);
    allIcons.forEach(cname => {
        // console.log(cname);
        let id = cname.id;
        if (id == t) {
            // let item = 1;
            // let pID = cname.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
            // let pName = cname.parentElement.previousElementSibling.previousElementSibling;
            // let pPrice = cname.parentElement.previousElementSibling;
            cartUI(cname);
        }
        else {
            // console.log("no");
        }
    })
}

function cartUI(cname) {
    // console.log(pID);
    // console.log(pName);
    // console.log(pPrice);
    // console.log(cname.parentElement.previousElementSibling.textContent);
    let pID = cname.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    let pName = cname.parentElement.previousElementSibling.previousElementSibling.textContent;
    let pPrice = cname.parentElement.previousElementSibling.textContent;

    // console.log(pID);

    let total_cards = document.querySelector('#total-cards');
    let div1 = document.createElement('div');
    div1.className = 'card text-dark bg-light mb-3';
    div1.setAttribute('style', 'max-width: auto;');
    // console.log(div1);

    let div2 = document.createElement('div');
    div2.className = 'card-header';
    div2.appendChild(document.createTextNode(`Product ID: ${pID}`));
    let icon = document.createElement('i');
    icon.className = 'bi bi-trash3 float-end';
    icon.id = 'delete';
    icon.setAttribute('style', 'cursor: pointer;');
    div2.appendChild(icon);
    // console.log(div2);

    let div3 = document.createElement('div');
    div3.className = 'card-body';
    let h6_1 = document.createElement('h6');
    let h6_2 = document.createElement('h6');
    h6_1.className = 'card-title';
    h6_1.appendChild(document.createTextNode(`Product Name: ${pName}`));
    h6_2.className = 'card-title';
    h6_2.appendChild(document.createTextNode(`Product Price: ${pPrice}`));
    div3.appendChild(h6_1);
    div3.appendChild(h6_2);

    // console.log(div3);

    div1.appendChild(div2);
    div1.appendChild(div3);
    // console.log(div1);

    total_cards.appendChild(div1);
    alertforaddElement();

    let total_cardss = document.querySelector('#total-cards').childElementCount;
    // console.log(total_cardss);
    let counter = document.querySelector('#set-counter');
    // counter.appendChild(document.createTextNode(total_cards));
    counter.textContent = `${total_cardss}`;

    // icon.addEventListener('click', removeElements);

    // calling local storage;
    addLS(pID, pName, pPrice);
}

function addLS(pid, pname, pprice) {
    let newCards = []
    newCards.push(pid, pname, pprice);
    let cards;
    if (localStorage.getItem('cards') === null) {
        cards = [];
    }
    else {
        cards = JSON.parse(localStorage.getItem('cards'));
    }
    cards.push(newCards);
    localStorage.setItem('cards', JSON.stringify(cards));
    setTimeout(() => {
        window.location.reload();
    }, 2100);
}

function addElementFLS(e) {
    let cards;
    if (localStorage.getItem('cards') === null) {
        cards = [];
    }
    else {
        cards = JSON.parse(localStorage.getItem('cards'));
    }

    for (v of cards) {
        console.log(v[1]);
        let total_cards = document.querySelector('#total-cards');
        let div1 = document.createElement('div');
        div1.className = 'card text-dark bg-light mb-3';
        div1.setAttribute('style', 'max-width: auto;');
        // console.log(div1);

        let div2 = document.createElement('div');
        div2.className = 'card-header';
        div2.appendChild(document.createTextNode(`Product ID: ${v[0]}`));
        let icon = document.createElement('i');
        icon.className = 'bi bi-trash3 float-end';
        icon.id = 'delete';
        icon.setAttribute('style', 'cursor: pointer;');
        div2.appendChild(icon);
        console.log(div2);

        let div3 = document.createElement('div');
        div3.className = 'card-body';
        let h6_1 = document.createElement('h6');
        let h6_2 = document.createElement('h6');
        h6_1.className = 'card-title';
        h6_1.appendChild(document.createTextNode(`Product Name: `));
        let span_1 = document.createElement('span');
        span_1.appendChild(document.createTextNode(`${v[1]}`))
        h6_1.appendChild(span_1);
        h6_2.className = 'card-title';
        h6_2.appendChild(document.createTextNode(`Product Price: `));
        let span_2 = document.createElement('span');
        span_2.appendChild(document.createTextNode(`${v[2]}`))
        h6_2.appendChild(span_2);
        div3.appendChild(h6_1);
        div3.appendChild(h6_2);

        // console.log(div3);

        div1.appendChild(div2);
        div1.appendChild(div3);
        // console.log(div1);

        total_cards.appendChild(div1);

        let total_cardss = document.querySelector('#total-cards').childElementCount;
        let counter = document.querySelector('#set-counter');
        // counter.appendChild(document.createTextNode(total_cards));
        counter.textContent = `${total_cardss}`;
        // icon.addEventListener('click', removeElements);
    }
}


function removeElements(targets) {
    let t = targets;
    // console.log(t.parentElement.parentElement);
    t.parentElement.parentElement.remove();
    let cards;
    if (localStorage.getItem('cards') === null) {
        cards = [];
    }
    else {
        cards = JSON.parse(localStorage.getItem('cards'));
    }
    // console.log(t);
    let pro_id = t.parentElement.textContent;
    console.log(pro_id);
    let pro_Name = t.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.textContent;
    console.log(pro_Name);
    let pro_price = t.parentElement.parentElement.lastElementChild.lastElementChild.lastElementChild.textContent;
    console.log(pro_price);


    let cards_arr = Array.from(cards);
    let p1 = false;
    let p2 = false;
    let p3 = false;
    cards_arr.forEach(function (item, index) {
        for (i of pro_id) {
            if (item[0] === i) {
                // console.log('yes');
                p1 = true;
            }
        }
        if (item[1] === pro_Name) {
            // console.log('name matched');
            p2 = true;
        }
        if (item[2] === pro_price) {
            // console.log('price matched');
            p3 = true;
        }

        if (p1 === true && p2 === true && p3 === true) {
            console.log(`three section is matched! ${item} and ${index}`);
            cards.splice(index, 1);

            p1 = false;
            p2 = false;
            p3 = false;
        }
        // console.log(item[0]);
    });
    showWarningAlert();
    let total_cardss = document.querySelector('#total-cards').childElementCount;
    let counter = document.querySelector('#set-counter');
    // counter.appendChild(document.createTextNode(total_cards));
    counter.textContent = `${total_cardss}`;

    localStorage.setItem('cards', JSON.stringify(cards));

}
function alertforaddElement() {
    let div = document.createElement('div');
    div.className = 'alert alert-warning role=alert text-center';
    div.id = 'alerts';
    div.appendChild(document.createTextNode(`Product is added to your cart `));
    let icon = document.createElement('i');
    icon.className = 'bi bi-emoji-smile';
    div.appendChild(icon);
    console.log(div);

    let alert = document.querySelector('#alert');
    let con = document.querySelector('.container');

    con.insertBefore(div, alert);

    setTimeout(() => {
        document.querySelector('#alerts').remove();
    }, 2000);
}
function showWarningAlert() {
    let div = document.createElement('div');
    div.className = 'alert alert-warning role=alert text-center';
    div.id = 'alerts';
    div.appendChild(document.createTextNode(`Product is deleted from the cart section `));
    let icon = document.createElement('i');
    icon.className = 'bi bi-emoji-frown';
    div.appendChild(icon);
    console.log(div);

    let alert = document.querySelector('#alert');
    let con = document.querySelector('.container');

    con.insertBefore(div, alert);

    setTimeout(() => {
        document.querySelector('#alerts').remove();
    }, 2000);

}

function gotoToatalCards(e){
    // console.log(e.target.id);
    let icon = document.querySelector('#delete').id;
    if(e.target.id === icon){
        // console.log('matched');
        removeElements(e.target);

    }
    else{
        console.log('not matched');
    }
}

