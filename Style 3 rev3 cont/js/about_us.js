const addAboutUs = (servicesDetail) => {
    pageContent.append(`<div>${servicesDetail}</div>`);
}

const addContactUs = (contactUs) => {
    $('#contact_us_content').append(`<div>${contactUs}</div>`);
}

addAboutUs('Today will be a great day');
addAboutUs('Enjoy your life');
addAboutUs('Not only because you still live, but because');
addAboutUs('Today will be a great day');

addContactUs('Contact us here! Please!');
