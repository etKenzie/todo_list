

const displayList = (list) => {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';

    const listInformation = document.createElement('div');
    listInformation.className = 'list-information';

    listInformation.innerHTML = `
        <div class="list-name">${list.name}</div>
        <div class="list-description">${list.description}</div>
    
    `;

    

    // listInformation.appendChild(addTask);



    const listContent = document.createElement('div');
    listContent.className = 'list-content';
    list.list.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';
        itemContainer.innerHTML = `
            <div class="item-name">${item.title}</div>
            <div class="item-due">${item.dueDate}</div>
            <div class="item-priority">${item.priority}</div>
        `;

        listContent.appendChild(itemContainer);
    });

    contentContainer.appendChild(listInformation);
    contentContainer.appendChild(listContent);


}

export default displayList;