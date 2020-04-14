var StudentArr = [
    {'StudentId':'0','StudentName':'朱玲慧','StudentSex':'女',"StudentAge":'6','StudentYear':'中班','StudentClass':'二班','sAddress':'个',"sIdCard":'5115222000054254551','jName':'是','jPhone':'15982421598'},
    {'StudentId':'1','StudentName':'王瑶','StudentSex':'女',"StudentAge":'7','StudentYear':'大班','StudentClass':'一班','sAddress':'个',"sIdCard":'5115222000054254551','jName':'是','jPhone':'15982421598'},
    {'StudentId':'2','StudentName':'陈云','StudentSex':'女',"StudentAge":'5','StudentYear':'小班','StudentClass':'三班','sAddress':'个',"sIdCard":'5115222000054254551','jName':'是','jPhone':'15982421598'},
    {'StudentId':'3','StudentName':'杨德鳞','StudentSex':'男',"StudentAge":'8','StudentYear':'大班','StudentClass':'二班','sAddress':'个',"sIdCard":'5115222000054254551','jName':'是','jPhone':'15982421598'},
    {'StudentId':'4','StudentName':'吴佳家','StudentSex':'男',"StudentAge":'7','StudentYear':'中班','StudentClass':'一班','sAddress':'个',"sIdCard":'5115222000054254551','jName':'是','jPhone':'15982421598'},
];
var oper;
var Nmax;
var Nmin;
var delIndex;
var modIndex;
var tableStudent = $('.tableStudent');
var sId;
var sNme;
var sSex;
var sAge;
var sYear;
var sClass;
var sAddress;
var sIdCard ;
var jName ;
var jPhone ;
/*1.循环遍历数组对象绑定在表格中*/
        //查找绑定标签
    function bindStudent() {
        // 循环遍历，将数据动态插入表格中
        for(var StuArr of StudentArr) {
            var StudentId = StuArr["StudentId"];
            var StudentName = StuArr["StudentName"];
            var StudentSex = StuArr["StudentSex"];
            var StudentAge = StuArr["StudentAge"];
            var StudentYear = StuArr["StudentYear"];
            var StudentClass = StuArr["StudentClass"];
            var sAddress = StuArr["sAddress"];
            var sIdCard = StuArr["sIdCard"];
            var jName = StuArr["jName"];
            var jPhone = StuArr["jPhone"];
            StudentId++;
            // 每行数据绑定在表格中
            tableStudent.append(`<tr>
                    <td><input type="checkbox" name="check"/></td>
                    <td>${StudentId}</td>
                    <td>${StudentName}</td>
                    <td>${StudentSex}</td>
                    <td>${StudentAge}</td>
                    <td>${StudentYear}</td>
                    <td>${StudentClass}</td>
                    <td>${sAddress}</td>
                    <td>${sIdCard}</td>
                    <td>${jName}</td>
                    <td>${jPhone}</td>
                    <td><button class="del"><span class="icon-shanchu">删除</span></button><button class="up">升学</button><button class="down">退学</button></td>
                    <td><button id="look" class="btn"  data-toggle="modal" data-target="#myModal"><span class="icon-bianji" >修改</span></button></td>
                </tr`);
            //设置表格偶数行变色
            // $("tr:even:not(:first)").css("background","whitesmoke");
        }
        bianji ();
        TrDel();
        AddStudent();
        searchStudent();
        StudentDown();
    }
/*编辑*/
function bianji () {
    $(function () {
        $('#look').on('click', function () {
            sId = $('#sId').val();//获取学号
            sNme = $('.sName').val();//获取学生姓名
            sSex = $('.sSex').val();//获取学生性别
            sAge = $('.sAge').val();//获取学生年龄
            sYear = $('.sYear').val();//获取学生年级
            sClass = $('.sClass').val();//获取学生班级
            sAddress = $('.sAddress').val();//获取家庭住址
            sIdCard = $('#sIdCard').val();//获取学生身份证号
            jName = $('.jName').val();//获取家长姓名
            jPhone = $('.jPhone').val();//获取家长电话
            if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(sNme)) {
                alert('学生姓名只能中文或汉字');
                return false;
            } else if (!/^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))[0-9]{8}$/.test(jPhone)) {
                alert('请输入正确手机号码');
                return false;
            } else if (!/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(sIdCard)) {
                alert('请输入正确的证件号(18位)');
                return false;
            } else if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(jName)) {
                alert('家长姓名只能中文或汉字');
                return false;
            } else if (sSex == null || sSex == '') {
                alert('性别不能为空');
                return false;
            } else if (sAge == null || sAge == '') {
                alert('年龄不能为空');
                return false;
            } else if (sYear == null || sYear == '') {
                alert('年级不能为空');
                return false;
            } else if (sClass == null || sClass == '') {
                alert('班级不能为空');
                return false;
            } else if (sId == null || sId == '') {
                alert('学号不能为空');
                return false;
            } else {
                $('#myModal').modal('hide');
            }

            for (var i = 0; i < StudentArr.length; i++) {
                StudentArr.splice(i, 1, {
                    'StudentId': sId,
                    'StudentName': sNme,
                    'StudentSex': sSex,
                    "StudentAge": sAge,
                    'StudentYear': sYear,
                    'StudentClass': sClass,
                    'sAddress': sAddress,
                    'sIdCard': sIdCard,
                    'jName': jName,
                    'jPhone': jPhone,
                })
            }
        });
    })
}

/* 4.退学*/
function StudentDown() {
    var $down = $('.down');
    $down.on('click',function () {
        $(this).css('color','red');
    })
}
/*5.升学*/

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
/*8.新增学生*/
function AddStudent () {
    $(function () {
        $('#sub').on('click', function () {
            sId = $('#sId').val();//获取学号
            sNme = $('.sName').val();//获取学生姓名
            sSex = $('.sSex').val();//获取学生性别
            sAge = $('.sAge').val();//获取学生年龄
            sYear = $('.sYear').val();//获取学生年级
            sClass = $('.sClass').val();//获取学生班级
            sAddress = $('.sAddress').val();//获取家庭住址
            sIdCard = $('#sIdCard').val();//获取学生身份证号
            jName = $('.jName').val();//获取家长姓名
            jPhone = $('.jPhone').val();//获取家长电话
            if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(sNme)) {
                alert('学生姓名只能中文或汉字');
                return false;
            }
            else if (!/^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))[0-9]{8}$/.test(jPhone)) {
                alert('请输入正确手机号码');
                return false;
            } else if (!/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(sIdCard)) {
                alert('请输入正确的证件号(18位)');
                return false;
            } else if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(jName)) {
                alert('家长姓名只能中文或汉字');
                return false;
            } else if (sSex == null || sSex == '') {
                alert('性别不能为空');
                return false;
            } else if (sAge == null || sAge == '') {
                alert('年龄不能为空');
                return false;
            } else if (sYear == null || sYear == '') {
                alert('年级不能为空');
                return false;
            } else if (sClass == null || sClass == '') {
                alert('班级不能为空');
                return false;
            } else if (sId == null || sId == '') {
                alert('学号不能为空');
                return false;
            }
            else {
                $('#myModal').modal('hide');
            }

            for (var i = 0; i < StudentArr.length; i++) {
                var obj = {
                    'StudentId': sId,
                    'StudentName': sNme,
                    'StudentSex': sSex,
                    "StudentAge": sAge,
                    'StudentYear': sYear,
                    'StudentClass': sClass,
                    'sIdCard':sIdCard,
                    'jName':jName,
                    'jPhone':jPhone,
                };
            }
            StudentArr.push(obj);
            $('.tableStudent').append(`<tr>
                     <td><input type="checkbox" name="check"/></td>
                    <td>${obj.StudentId}</td>
                    <td>${obj.StudentName}</td>
                    <td>${obj.StudentSex}</td>
                    <td>${obj.StudentAge}</td>
                    <td>${obj.StudentYear}</td>
                    <td>${obj.StudentClass}</td>
                     <td>${obj.sClass}</td>
                    <td>${obj.sIdCard}</td>
                    <td>${obj.jName}</td>
                    <td>${obj.jPhone}</td>
                    <td><button class="del"><span class="icon-shanchu">删除</span></button><button class="up">升学</button><button class="down">退学</button></td>
                    <td><button id="look" class="btn"  data-toggle="modal" data-target="#myModal"><span class="icon-bianji" >修改</span></button></td>
                </tr`);
            // $(".tableStudent").push($tr);
            //清空数据
            $('#myModal :text,:hidden').val('');
            TrDel();
            StudentDown();
        });

    });
    searchStudent();
}
bindStudent();
/* 全部选中*//* 10.全部取消*/
$("#checkedAll").click(function() {
    if (this.checked) {
        $("[name=check]:checkbox").prop("checked", true);
    }else {
        $("[name=check]:checkbox").prop("checked", false);
    }
});
/* 批量删除*/
$('#plDel').click(function () {
    if (confirm('确定全部删除吗')) {
        var isChe = $(':CheckBox:checked');
        isChe.each(function () {
            $(this).parent().parent().remove();
        })
    }
});
/*换页符*/
// function bindTable(ndata,Nmin,Nmax) {
//     var str;
//     var id = -1;
//     $.each(ndata,function (i,obj) {
//         if (i>=Nmin && i<Nmax){
//             str +=`<tr class='idtr' id="${'tr'+i}">
//         <td>
//             <div class="checkbox">
//                 <label>
//                     <input class="checkItem" type="checkbox">
//                 </label>
//             </div>
//         </td>
//         <td>${obj.StudentId}</td>
//         <td>${obj.StudentName}</td>
//         <td>${obj.StudentSex}</td>
//         <td>${obj.StudentAge}</td>
//         <td>${obj.StudentYear}</td>
//         <td>${obj.StudentClass}</td>
//         <td>
//         <td><button class="del"><span class="icon-shanchu">删除</span></button><button class="revise"><span class="icon-bianji">修改</span></button><button class="up">升学</button><button class="down">退学</button></td>
//         <td><button  id="look" class="btn"  data-toggle="modal" data-target="#myModal"><span class="icon-chakan">查看</span></button></td>
// </td>
// </tr>`;
//         }
//     });
//     Tbody.append(str);
//
// }
// $(function(){
//     $(".next").click(function () {
//         Tbody.empty();
//         Nmin += Num;//最小
//         Nmax += Num;//最大
//         if(Nmin<data.length-1){
//             if(showType==1){  //假如只是数据展示showType=1
//                 bindTable(data,Nmin,Nmax);
//             }else if(showType==2){  //假如是搜索后的数据展示showType=2
//                 bindTable(searchdata,Nmin,Nmax);
//             }
//         }else{
//             Tbody.empty();
//             Nmin -= Num;//
//             Nmax -= Num;//
//             if(showType==1){  //假如只是数据展示showType=1
//                 bindTable(data,Nmin,Nmax);
//             }else if(showType==2){  //假如是搜索后的数据展示showType=2
//                 bindTable(searchdata,Nmin,Nmax);
//             }
//         }
//     });
//     $(".prev").click(function () {
//
//         Tbody.empty();
//         Nmin -= Num;//
//         Nmax -= Num;//
//         if(Nmax>0){
//             if(showType==1){  //假如只是数据展示showType=1
//                 bindTable(data,Nmin,Nmax);
//             }else if(showType==2){  //假如是搜索后的数据展示showType=2
//                 bindTable(searchdata,Nmin,Nmax);
//             }
//             console.log(Nmin+"pre min/"+Nmax);
//         }else{
//             Tbody.empty();
//             Nmin += Num;//
//             Nmax += Num;//
//             if(showType==1){  //假如只是数据展示showType=1
//                 bindTable(data,Nmin,Nmax);
//             }else if(showType==2){  //假如是搜索后的数据展示showType=2
//                 bindTable(searchdata,Nmin,Nmax);
//             }
//         }
//     });
//     $(".first").click(function () {
//         Tbody.empty();
//         Nmin = 0;//
//         Nmax = Num;//
//         if(showType==1){  //假如只是数据展示showType=1
//             bindTable(data,Nmin,Nmax);
//         }else if(showType==2){  //假如是搜索后的数据展示showType=2
//             bindTable(searchdata,Nmin,Nmax);
//         }
//
//     });
//     $(".last").click(function () {
//         Tbody.empty();
//         Nmax = data.length+(data.length%Num)-1;
//         Nmin = data.length+(data.length%Num)-6;
//         if(showType==1){  //假如只是数据展示showType=1
//             bindTable(data,Nmin,Nmax);
//         }else if(showType==2){  //假如是搜索后的数据展示showType=2
//             bindTable(searchdata,Nmin,Nmax);
//         }
//     });
// });

/*删除*/
function TrDel(){
    $(function () {
        var tabDel = $('.del');
        tabDel.on('click',function () {
            if (confirm('确定删除吗?')) {
                $(this).closest('tr').remove();
            }
        })
    });
}

