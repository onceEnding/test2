var ClassArr = [
    {'ClassId':'0','ClassName':'一班','ClassYear':'大班','ClassDay':'2020-3-5',"ClassRen":'6','XiuXue':'1'},
    {'ClassId':'1','ClassName':'二班','ClassYear':'小班','ClassDay':'2020-4-5',"ClassRen":'7','XiuXue':'2'},
    {'ClassId':'2','ClassName':'三班','ClassYear':'大班','ClassDay':'2020-1-2',"ClassRen":'5','XiuXue':'5'},
    {'ClassId':'3','ClassName':'二班','ClassYear':'中班','ClassDay':'2020-1-2',"ClassRen":'8','XiuXue':'0'},
    {'ClassId':'4','ClassName':'一班','ClassYear':'大班','ClassDay':'2020-4-5',"ClassRen":'7','XiuXue':'1'},
];
var classID;
var classDate;
var sClass;
var sYear;
var renshu;
var xiuxue;
var tableClass = $('.tableClass');
bindStudent();
function bindStudent() {
    // 循环遍历，将数据动态插入表格中
    for(var clArr of ClassArr) {
        var ClassId = clArr["ClassId"];
        var ClassName = clArr["ClassName"];
        var ClassYear = clArr["ClassYear"];
        var ClassDay = clArr["ClassDay"];
        var ClassRen = clArr["ClassRen"];
        var ClassXiuXue = clArr["XiuXue"];
        ClassId++;
        // 每行数据绑定在表格中
        tableClass.append(`<tr>
                    <td><input type="checkbox" name="check"/></td>
                    <td>${ClassId}</td>
                    <td>${ClassName}</td>
                    <td>${ClassYear}</td>
                    <td>${ClassDay}</td>
                    <td>${ClassRen}</td>
                    <td>${ClassXiuXue}</td>
                    <td><button class="Tabdel"><span class="icon-shanchu">删除</span></button><button class="revise"><span class="icon-bianji"  data-toggle="modal" data-target="#myModal">修改</span></button></td>
                </tr`);
        //设置表格偶数行变色
        // $("tr:even:not(:first)").css("background","whitesmoke");
    }
    AddClass ();
    TrDel();
    searchStudent()
}
//全选
$("#checkedAll").click(function() {
    if (this.checked) {
        $("[name=check]:checkbox").prop("checked", true);
    }else {
        $("[name=check]:checkbox").prop("checked", false);
    }
});
/* 批量删除*/
$('#ClassDel').click(function () {
    if (confirm('确定全部删除吗')) {
        var isChe = $(':CheckBox:checked');
        isChe.each(function () {
            $(this).parent().parent().remove();
        })
    }
});
/*删除*/
function TrDel(){
    $(function () {
        var tabDel = $('.Tabdel');
        tabDel.on('click',function () {
            if (confirm('确定删除吗?')) {
                $(this).closest('tr').remove();
            }
        })
    });
}
/*7.搜索框*/
function searchStudent(){
    $(function () {
        $("#tiJiao").on('click',function () {
            var $sea=$('#souSuo').val();
            //先隐藏全部，再把符合筛选条件的值显示
            $('table tbody tr').hide().filter(':contains('+$sea+')').show();
        });
    });
}
function AddClass () {
    $(function () {
        $('#sub').on('click', function () {
            classID = $('#classID').val();
            sClass = $('.sClass').val();
            sYear = $('.sYear').val();
            classDate = $('.classDate').val();
            renshu = $('.renshu').val();
            xiuxue = $('.xiuxue').val();
            if (classID == null || classID ==''){
                alert('编号不能为空');
                return false;
            }else if (sClass ==null || sClass ==''){
                alert('班级不能为空');
                return false;
            }else if (sYear ==null || sYear =='') {
                alert('年级不能为空');
                return false;
            }else if (classDate ==null || classDate =='') {
                alert('日期不能为空');
                return false;
            }else if (renshu == null || renshu==''){
                alert('人数不能为空')
                return false;
            }
            else {
                $('#myModal').modal('hide');
            }
            for (var i = 0; i < ClassArr.length; i++) {
                var obj = {
                    'ClassId': classID,
                    'ClassName': sClass,
                    'ClassYear': sYear,
                    "ClassDay": classDate,
                    'ClassRen': renshu,
                    'XiuXue': xiuxue
                };
            }
            ClassArr.push(obj);
            $('.tableClass').append(`<tr>
                     <td><input type="checkbox" name="check"/></td>
                    <td>${obj.ClassId}</td>
                    <td>${obj.ClassName}</td>
                    <td>${obj.ClassYear}</td>
                    <td>${obj.ClassDay}</td>
                    <td>${obj.ClassRen}</td>
                    <td>${obj.XiuXue}</td>
                    <td><button class="del"><span class="icon-shanchu">删除</span></button><button class="revise"><span class="icon-bianji"  data-toggle="modal" data-target="#myModal">修改</span></button></td>
                </tr`);
            // $(".tableStudent").push($tr);
            //清空数据
            $('#myModal :text,:hidden').val('');
            TrDel();
        });

    });
    searchStudent();
}