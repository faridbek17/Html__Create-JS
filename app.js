// const wrapper = document.querySelector('.wrapper');
// const header = create('header', 'header', null);
// const container = create('div', 'container', null);
// const headerRow = create('div', 'header__row', null);
// const headerLogo = create('div', 'header__logo', null);
// const headerTitle = create('h1', null, 'Logo');
// headerLogo.appendChild(headerTitle);

// const headerNav = create('div', 'header__nav', null);
// const headerLink = create('a', 'header__link', 'About');
// headerLink.setAttribute('href', '#')

// const headerLink2 = create('a', 'header__link', 'Portfolio');
// headerLink.setAttribute('href', '#')

// const headerLink3 = create('a', 'header__link', 'Contact');
// headerLink.setAttribute('href', '#')

// headerNav.appendChild(headerLink);
// headerNav.appendChild(headerLink2);
// headerNav.appendChild(headerLink3);

// headerRow.appendChild(headerLogo);
// headerRow.appendChild(headerNav);
// container.appendChild(headerRow);
// header.appendChild(container);
// wrapper.appendChild(header);

// function create(tagName, className, content){
//     const el = document.createElement(tagName)

//     el.classList.add(className)

//     el.innerText = content

//     return el;
// }









// Node Vertual 

const wrapper = document.querySelector('.wrapper');

function create(node, parent){
    const el = document.createElement(node.tagName)

    for(let attribute in node.attributes){
        el.setAttribute(attribute, node.attributes[attribute])
    }

    if(typeof node.content === 'string'){
        el.innerText = node.content
    }else{
        node.content.forEach(item => {
            create(item, el);
        })
    }

    parent.appendChild(el);

    return parent;
}



const node = {
    tagName: 'header',
    attributes: {
        class: 'header',
    },
    content: [
        {
            tagName: 'div',
            attributes: {
                class: 'container'
            },
            content: [
                {
                    tagName: 'div',
                    attributes: {
                        class: 'header__row'
                    },
                    content: [
                        {
                            tagName: 'h1',
                            attributes: {
                                class: 'header__logo'
                            },
                            content: 'logo'
                        }
                    ]
                },
                {
                    tagName: 'a',
                    attributes: {
                        class: 'header__link',
                        href: '#'
                    },
                    content: 'About'
                },
                {
                    tagName: 'a',
                    attributes: {
                        class: 'header__link',
                        href: '#'
                    },
                    content: 'Portfolio'
                },
                {
                    tagName: 'a',
                    attributes: {
                        class: 'header__link',
                        href: '#'
                    },
                    content: 'Contact'
                }
            ]
        }
    ]
}

create(node, wrapper)














