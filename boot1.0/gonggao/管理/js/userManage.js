var send = [
    {id: "001", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "002", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"3"},
    {id: "003", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"3"},
    {id: "004", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "005", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "006", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "007", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"3"},
    {id: "008", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"3"},
    {id: "009", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "010", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "011", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "012", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
    {id: "013", username: "小王", time: "2020", nr: "xxx",js:"老师",Cmc:"大班",Cxh:"2"},
]
var operid = -1;
var perSize = 4; //每页显示的条数
var currentPage = 1; //当前显示的页数
var totalPage = -1; //总共的页数
window.onload=function(){
    displayUserTable();
    add();
    del();
    delAll();
    edit();
    pagebar();
    pageClick();
}

function edit(){
    $("#userTable").on('click','.edit',function(){
        var index = $(this).attr('data-index');
        operid = index;
        $("#addUser").modal('show');
        $("#txtId").val(send[index].id);
        $("#txtTime").val(send[index].time);
        $("#txtNr").val(send[index].nr);
        $("#txtJs").val(send[index].js);
        $("#txtCmc").val(send[index].Cmc);
        $("#txtCxh").val(send[index].Cxh);
    })
}
function del(){
    $("#userTable").on('click','.del',function(){
        console.log(this);
        var index = $(this).attr('data-index');
        send.splice(index,1);
        pagebar();
        displayUserTable();

    })
}
function add(){
    $("#btnAddForm").click(function(){
        operid= -1;
        $("#addUser").modal('show');
    })
    $("#btnAdd").click(function(){
        //添加数据
        //获取表单数据
        var id = $("#txtId").val();
        var username= $("#txtUsername").val();
        var time = $("#txtTime").val();
        var nr =  $("#txtNr").val();
        var js =  $("#txtJs").val();
        var Cmc =  $("#txtCmc").val();
        var Cxh = $("#txtCxh").val();

        var obj = {id: "id", username: "username", time: "time", nr: "nr",js:"js",Cmc:"Cmc",Cxh:"Cxh"};

        if(operid==-1){
            send.push(obj);
        }else{
            send.splice(operid,1,obj);
        }

        displayUserTable();
        pagebar();
        $("#addUser").modal('hide');
    })
    $("#btnCancel").click(function(){
        $("#addUser").modal('hide');
    })
}
function displayUserTable(){
    $("#userTable").html("");
    var start = (currentPage -1 )*perSize;
    var end = start + perSize;
    var outHtml = "";
    for(var i=start;i<end&&i<send.length;i++){
        outHtml+="<tr>"+
        "<td>"+send[i].id+"</td>"+
        "<td>"+send[i].username+"</td>"+
        "<td>"+send[i].time+"</td>"+
        "<td>"+send[i].nr+"</td>"+
        "<td>"+send[i].js+"</td>"+
        "<td>"+send[i].Cmc+"</td>"+
        "<td>"+send[i].Cxh+"</td>"+
        "<td><button class=\"btn btn-default btn-del del\" data-index='"+i+"'>删除</button><button class=\"btn btn-default edit btn-change\"  data-index='"+i+"'>修改</button></td>"+
        "</tr>";
    }

    $("#userTable").html(outHtml);
}
//用于显示页码 5
function pagebar(){

    totalPage = Math.ceil(send.length / perSize);
    if(currentPage>totalPage){
        currentPage = totalPage;
    }
    $("#divPage").html("");
    var str = "";
    for(var i = 0;i<totalPage;i++){
        if(currentPage==(i+1)){
            str+="<button class=\"btn btn-primary page\">"+(i+1)+"</button>";
        }else{
            str+="<button class=\"btn btn-default page\">"+(i+1)+"</button>";
        }

    }
    $("#divPage").html(str);
}
function pageClick(){
    $("#divPage").on("click",".page",function(){
        $(".page").each(function(index,item){
            $(this).removeClass('btn-primary');

        });
        $(this).addClass('btn-primary');
        currentPage = Number(this.innerText);
        displayUserTable();
    });

}
//全部删除

