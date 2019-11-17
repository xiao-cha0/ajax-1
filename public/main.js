let n = 1;
getpage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
               const array = JSON.parse(request.response);
                array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
                });   
            }
            n += 1; 
        }
    }
    request.send()
};
getJson.onclick = () => { 
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) { 
            if (request.status >= 200 && request.status < 300) { 
                const object = JSON.parse(request.response)//通过JSON.parse()将JSON字符串解析成JS对应的数据类型（如：对象等）
                myName.textContent = object.name
            }
        }
     }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')//创建div
        div.innerHTML = request.response//填写内容
        document.body.appendChild(div)//放在body上
    }
    request.onerror = () => { }
    request.send()
};
getJs.onclick = () => { 
    const request = new XMLHttpRequest
    request.open('GET', '/2.js')
    request.onload = () => { 
        const script = document.createElement('script')//创建script标签
        script.innerHTML = request.response//填写script内容
        document.body.appendChild(script)//插到body上
    }
    request.onerror = () => { 

    }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {//下载完成
            //判断值是200，还是300、400；通常200表示下载成功
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')//创建style 标签
                style.innerHTML = request.response//填写内容
                document.head.appendChild(style)//插入到head
            } else {
                alert('加载 CSS 失败')
            }
        }
    };
    request.send()
}
