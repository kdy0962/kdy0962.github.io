var URLS = {
    prefix:"localhost/8080", //"https://kdy0962.github.io/todo/",
    icon:{
        uncheckedIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYR4sh0fM1Buy__0F9ea9VWazxLdfj9fV0dGCse3mMKiW5UVR-Yw",
        checkedIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ok_sign_font_awesome.svg/2000px-Ok_sign_font_awesome.svg.png"
    },
    list:"jsonData/groupList.json",
    eachList:"list.html",
    groupAdd:"jsonData/groupAdd.json"
};
data ={
    data:[{},{},{}]
};
function network(command, end, arg){
    switch(command){
    case"eachList":
        location.href = URLS.prefix + URLS.eachList+"?name="+encodeURIComponent(arg);
        break;
    case"addList":
        $.get(URLS.prefix + URLS.groupAdd,{name:arg}, end);
        /*
        data.data.push({name:arg});
        end(data);
        */
        break;
    case"list":
        //$.get(URLS.prefix + URLS.list, end);
        end(data);
        break;
    default:throw "invalid command";
    }
}