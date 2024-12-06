function createProductCard(productName, price, imageUrl) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = productName;
    img.classList.add('product-image');
    
    const title = document.createElement('h3');
    title.textContent = productName;
    title.classList.add('product-title');

    const priceElement = document.createElement('p');
    priceElement.textContent = price;
    priceElement.classList.add('product-price');

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(priceElement);

    return card;
}

function createCommentMessage(author, message, timestamp) {
    const comment = document.createElement('div');
    comment.classList.add('comment');

    const authorName = document.createElement('h4');
    authorName.textContent = author;
    authorName.classList.add('comment-author');

    const commentText = document.createElement('p');
    commentText.textContent = message;
    commentText.classList.add('comment-message');

    const timestampElement = document.createElement('span');
    timestampElement.textContent = timestamp;
    timestampElement.classList.add('comment-timestamp');

    comment.appendChild(authorName);
    comment.appendChild(commentText);
    comment.appendChild(timestampElement);

    return comment;
}

function createMenuItem(name, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const dishName = document.createElement('h3');
    dishName.textContent = name;
    dishName.classList.add('menu-item-name');

    const dishPrice = document.createElement('p');
    dishPrice.textContent = price;
    dishPrice.classList.add('menu-item-price');

    const dishDescription = document.createElement('p');
    dishDescription.textContent = description;
    dishDescription.classList.add('menu-item-description');

    menuItem.appendChild(dishName);
    menuItem.appendChild(dishPrice);
    menuItem.appendChild(dishDescription);

    return menuItem;
}

const productCard = createProductCard('Iphone', '$999', 'https://apple.com/iphone.jpg');
document.body.appendChild(productCard);

const comment = createCommentMessage('Karim Baliyev', 'Krutoy telefon. Spasibo za texnologii!!', '2024-12-06 12:52');
document.body.appendChild(comment);

const menuItem = createMenuItem('Pizza', '$12.99', 'Pizza bomba s sOlami + gribami))');
document.body.appendChild(menuItem);