let accountKey = "";
let defaultLanguage = "en";

const url = (productNo, language) => `https://privateapi.tdsmaker.com/api/v2/form/getPublic?appId=${accountKey}&productNo=${productNo}&language=${language}`

const onItemClick = (e) => {
    const productNo = e.target.getAttribute('data-pn');
    const language = e.target.getAttribute('data-lang') || defaultLanguage;
    var newWindow = window.open('', '_blank');
    newWindow.document.write('Loading file...');

    if(accountKey && language && productNo){
        fetch(url(productNo, language))
        .then(x => x.json())
        .then(x => {
            if(x.pdfFile){
                newWindow.location.href = x.pdfFile;
            }else{
                newWindow.document.write('File Not Found!');
            }
        });
        
    }
}

const setAnchor = (target) => {
    const href = target.getAttribute('href');
    if(href && href.indexOf('app.tdsmaker.com') > 0 ) return;

    const productNo = target.getAttribute('data-pn');
    const language = target.getAttribute('data-lang') || defaultLanguage;

    if(accountKey && language && productNo){
        fetch(url(productNo, language))
        .then(x => x.json())
        .then(x => {
            if(x.pdfFile){
                target.setAttribute('href',x.pdfFile);
                target.setAttribute('target', '_blank');
            }
        })
        
    }
}

const bindItems = () => {
    const items = document.querySelectorAll('[data-pn]');
    if(items && items.length > 0){
        for(let i=0; i < items.length; i++){
            const item = items[i];
            
            if(item.tagName.toLowerCase() !== "a"){
                addEventListener(item, onItemClick, 'click');
            }else{
                setAnchor(item);
            }
            
        }
    }
}

const init = (_accountKey) => {
    accountKey = _accountKey;
    addEventListener(document, bindItems, "DOMContentLoaded", "onreadystatechange");
    addEventListener(document.body, bindItems, "DOMSubtreeModified");
}

const addEventListener = (target, method, ...eventNames) => {
    removeEventListener(target, method, eventNames);
    target.addEventListener && target.addEventListener(eventNames[0], method) ||
    target.attachEvent && target.attachEvent(eventNames.length > 1 ? eventNames[1] : eventNames[0], method);
}

const removeEventListener = (target, method, eventNames) => {
    target.removeEventListener && target.removeEventListener(eventNames[0], method) ||
    target.detachEvent && target.detachEvent(eventNames.length > 1 ? eventNames[1] : eventNames[0], method);
}

export {
    init
}