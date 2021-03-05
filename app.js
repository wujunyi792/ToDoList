document.onkeydown = function (event) {
    if (event.key == "Enter") {
        let text = document.getElementById("add_text").value;
        if (text != "") {
            // console.log(text);
            arrList = document.getElementsByClassName("blank");
            // console.log(arrList);
            if (arrList.length == 0) {
                alert("先做完已有的 ToDo 再刷新页面开始下一轮 ToDoList 吧！");
            }
            ele = arrList[randomNum(0, arrList.length)];
            console.log(ele);
            ele.innerText = text;
            ele.className += "edited";
            ele.className = ele.className.replace("blank", "");
            document.getElementById("add_text").value = "";

            changeColor();
        }

    }
}

let list = document.getElementsByClassName("todo");
for (var i in list) {
    list[i].onclick = gray;
}

function gray() {
    console.log(this);
    console.log(this.attributes["style"].value);
    if (this.attributes["style"].value.search("background-color") != -1) {
        // this.removeAttribute("style");
        this.setAttribute("style", "background-color: " + grey + ";text-decoration:line-through");
        this.className = this.className.replace("edited", "");
    }

}


function getRandomArrayElements(arr, count) {
    console.log(arr);
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

let grey = '#CCCCCC';
let colors = ['#FF6666', '#CC99CC', '#FF99CC', '#99CCCC', '#FFFFCC', '#CCFFFF', '#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFCC99', '#CCCC99', '#FF9999', '#e7ba9a', '#ff9a96', '#fffea5', '#92caf4'];

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function changeColor() {
    editedEle = document.getElementsByClassName("edited");
    colorArr = getRandomArrayElements(colors, 15);
    for (i = 0; i < editedEle.length; i++) {
        editedEle[i].setAttribute("style", "background-color: " + colorArr[i]);
    }
}

function overShow(t, e) {
    // alert(/on/);
    var showDiv = document.getElementById('showDiv');
    showDiv.innerText = t.innerText;
}
function outHide() {
    var showDiv = document.getElementById('showDiv');
    showDiv.innerText = '';
}

function magic() {
    size = randomNum(3, 5);
    document.getElementById("waterfall").setAttribute("class", "waterfall-" + size);
}