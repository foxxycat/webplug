// по клику меняем заголовок и иконку на кнопке
function toggleTitle(title) {
    browser.browserAction.setTitle({
        title: title == 'off' ? 'on' : 'off'
    });

    browser.browserAction.setIcon({
        path: title == 'off' ? '/icons/001-dollar.svg' : '/icons/002-dollar.svg'
    });
}

// слушатель события клика
browser.browserAction.onClicked.addListener(() => {
    var gettingTitle = browser.browserAction.getTitle({});
        gettingTitle.then(toggleTitle);

    console.log();
});