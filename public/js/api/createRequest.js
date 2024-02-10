const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    let url = options.url; 
    let data = Object.entries(options.data);
    let method = options.method;
    let formData = new FormData();

    xhr.addEventListener('load', ()=> {
        options.callback(err, xhr.response)
    })

    if (method === 'GET'){
        for(const [key, value] of data) 
            url += key + '=' + value + '&';
        }
    } else {
        for(const [key, value] of data) {
            formData.append(key, value);
        }
    }

    xhr.open(method, url);
    xhr.send(formData);

};

