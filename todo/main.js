var URLS = {
    prefix:"https://kdy0962.github.io/todo/",
    icon:{
        unchecked:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYR4sh0fM1Buy__0F9ea9VWazxLdfj9fV0dGCse3mMKiW5UVR-Yw",
        checked:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ok_sign_font_awesome.svg/2000px-Ok_sign_font_awesome.svg.png"
    },
    list:"jsonData/groupList.json",
    taskList:"jsonData/taskList.json",
    taskAdd:"jsonData/taskAdd.json",
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
        console.log("addList");
        /*
        data.data.push({name:arg});
        end(data);
        */
        break;
    case"list":
         $.get(URLS.prefix + URLS.list, end);
        //$.get(URLS.prefix + URLS.list, end);
        // console.log("list");
        // end(data);
        break;
    case"taskList":
        $.get(URLS.prefix + URLS.taskList,{name:arg},end);
        break;
    case"toggleComplete":
        $.get(URLS.prefix+URLS.taskList,{complete:arg},end);
        break;
    default:
        //console.log("def");
        throw "invalid command";
    }
}