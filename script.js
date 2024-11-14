document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'images/page1.jpg',
        'images/page2.jpg',
        'images/page3.jpg',
        'images/page4.jpg',
        'images/page5.jpg',
        'images/page6.jpg',
        'images/page7.jpg',
        'images/page8.jpg',
        'images/page9.jpg',
        'images/page10.jpg',
        'images/page11.jpg',
        'images/page12.jpg',
        'images/page13.jpg',
        'images/page14.jpg',
        'images/page15.jpg',
        'images/page16.jpg',
        'images/page17.jpg',
        'images/page18.jpg',
        'images/page19.jpg',
        'images/page20.jpg'
    ];
    
    const flipbook = document.getElementById('flipbook');

    // Initialize StPageFlip
    const pageFlip = new St.PageFlip(flipbook, {
        width: 400,  // Base page width
        height: 600, // Base page height
        size: 'stretch',
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 400,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false
    });

    // Load images into the flipbook
    const pages = images.map((src, index) => {
        const page = document.createElement('div');
        page.classList.add('page');
        page.innerHTML = `
            <div class="page-content">
                <img src="${src}" alt="Image ${index + 1}" style="width: 100%; height: 100%;">
            </div>
        `;
        return page;
    });

    pageFlip.loadFromHTML(pages);

    // Navigation buttons
    document.getElementById('prevPage').addEventListener('click', () => {
        pageFlip.flipPrev();
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        pageFlip.flipNext();
    });
});
