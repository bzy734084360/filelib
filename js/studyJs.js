// "use strict";
try {
    function myFunction6() {
        document.getElementById("demo12").innerHTML = Date();
    }

    var urlTest = "http://www.csxiaoyao.com?username='CS逍遥剑仙'&password='19931128'";
    console.log(5 + 6);
    console.log(urlTest);
    console.log(encodeURIComponent(urlTest));// 编码
    console.log(encodeURI(urlTest));// 编码
    console.log(encodeURI(urlTest));// 编码
    // decodeURI("%%%%");
    document.getElementById("output1").innerHTML = 5 + 6;
    var x = 10;
    var y = 10;
    var z = 11;
    document.getElementById("demo6").innerHTML = (x === y) + "<br/>" + (x === z);
    var cars = ["Porsche", "Volvo", "BMW"];
    document.getElementById("demo7").innerHTML = cars[2];
    var person = {firstName: "Bill", lastName: "Gates", age: 62, eyeColor: "Blue"};
    document.getElementById("demo8").innerHTML = person.firstName + "<br/>" + person.age;
    document.getElementById("demo9").innerHTML = typeof 0;

    function malfunction2() {
        document.getElementById("demo3").innerHTML = "这是body中修改的P标签";
    }

    function myFunction5(num1, num2) {
        return num1 * num2;
    }

    document.getElementById("demo10").innerHTML = myFunction5(2, 3);
    document.getElementById("demo11").innerHTML = myFunction5;
    var x, y, z;
    x = 10;
    y = 20;
    z = x + y;
    var t = z;
    document.getElementById("demo5").innerHTML = "t的值是" + t + "。";


    var txt = "ABCZXCASDLASDKHLGLKH";
    var sln = txt.length;
    document.getElementById("demo13").innerHTML = sln;
    var specialStr = "这是一段有特殊字符的\"字符串\"";
    document.getElementById("demo14").innerHTML = specialStr;
    document.getElementById("demo15").innerHTML = "在编辑字符串中\
              用反斜杠换行！";
    var x16 = "Bill";
    var y16 = new String("Bill");
    document.getElementById("demo16").innerHTML = "x16变量类型为" + typeof x16 + "<br/>" +
        "y16变量类型为" + typeof y16;
    document.getElementById("demo17").innerHTML = "x16变量与y16变量 ==比较结果为：" +
        (x16 == y16) + ";<br/>因值相同所以返回true" + "<br/>" +
        "x16变量与y16变量===的比较结果为：" + (x16 === y16) + ";<br/>因为类型不同所以返回false";
    var demo18 = "asdzxcasdqwezxzxc";
    document.getElementById("demo18").innerHTML = "demo18的字符串长度为：" + demo18.length;
    var demo19 = "The full name of China is the People's Republic of China.";
    var demo19In = demo19.indexOf("China");
    var demo19Last = demo19.lastIndexOf("China");
    document.getElementById("demo19").innerHTML = "china字符出现起始的索引为：" +
        demo19In + ";<br/>最后出现的索引为：" + demo19Last + ";";
    var demo20 = "The full name of China is the People's Republic of China.";
    var demo20Str = demo20.search("China");
    document.getElementById("demo20").innerHTML = "Search检索字符串:" +
        demo20Str;
    var demo21 = "       Dog,Cat,Fish";
    document.getElementById("demo21").innerHTML = "slice()方法提取字符串：" + demo21.slice(-8, -5);
    document.getElementById("demo22").innerHTML = "substring()方法提取字符串：" +
        demo21.substring(4, 7) + "    	\"索引无法为负值\" ;";
    document.getElementById("demo23").innerHTML = "substr()方法提取字符串：" + demo21.substr(4, 3);
    document.getElementById("demo24").innerHTML = "原字符串值为：" + demo21;
    document.getElementById("demo25").innerHTML = "将dog替换为数字DDD:" + demo21.replace(/dog/i, "DDD");
    document.getElementById("demo26").innerHTML = "将字符串转为大写：" + demo21.toUpperCase();
    document.getElementById("demo27").innerHTML = "将字符串转为小写：" + demo21.toLowerCase();
    document.getElementById("demo28").innerHTML = demo21.concat(" ", demo20);
    document.getElementById("demo29").innerHTML = demo21.trim();
    document.getElementById("demo30").innerHTML = 100 / "Apple";
    document.getElementById("demo31").innerHTML = "\"Apple\" 是否为合法数：" + isNaN("Apple");
    var demo32 = 2;
    while (demo32 !== Infinity) {
        demo32 = demo32 * demo32;
        txt = txt + demo32 + "<br/>";
    }
    document.getElementById("demo32").innerHTML = txt + "<br/> 除0的结果：" + (2 / 0) + " " + (-2 / 0);
    var demo33 = 128;
    document.getElementById("demo33").innerHTML = "0xFF的值为：" + 0xFF + "<br/>" +
        "toString()将数值" + demo33 + "转换为指定进制：<br/>16进制：" +
        demo33.toString(16) + "<br/>8进制：" + demo33.toString(8) + "<br/>2进制：" +
        demo33.toString(2);
    var demo34 = 9.656;
    document.getElementById("demo34").innerHTML = "9.656.toExponential(2、4、6) 的值：<br/>" +
        demo34.toExponential() + "<br/>" + demo34.toExponential(2) + "<br/>" +
        demo34.toExponential(4) + "<br/>" + demo34.toExponential(6);
    document.getElementById("demo35").innerHTML = "toFixed(2)：" + demo34.toFixed(2);
    document.getElementById("demo36").innerHTML = "toPrecision()方法：" + demo34.toPrecision(4);
    document.getElementById("demo37").innerHTML = "valueOf()方法：" + demo34.valueOf() +
        ";typeOf is :" + typeof demo34.valueOf();
    var demo34 = true;
    document.getElementById("demo38").innerHTML = "x=true调用Number()方法的结果是：" +
        Number(demo34) + "<br/>" +
        "将日期转换为数字(方法返回1970年1月1日至今的毫秒数)：" + Number(new Date("2019-10-17"));
    document.getElementById("demo39").innerHTML = "\"10\":" + parseInt("10") + "<br/> \"10.33\":" + parseInt("10.33") + "<br/> \"10 20 30\":" + parseInt("10 20 30 ") + "<br/> \"10 years\"" + parseInt("10 years") + "<br/> \"years 10\":" + parseInt("years 10");
    document.getElementById("demo40").innerHTML = "\"10\":" + parseFloat("10") + "<br/> \"10.33\":" + parseFloat("10.33") + "<br/> \"10 20 30\":" + parseFloat("10 20 30 ") + "<br/> \"10 years\"" + parseFloat("10 years") + "<br/> \"years 10\":" + parseFloat("years 10");
    document.getElementById("demo41").innerHTML = "MAX_VALUE的值为:" + Number.MAX_VALUE + "<br/> MIN_VALUE的值为：" + Number.MIN_VALUE + "<br/> POSITIVE_INFINITY的值为：" + Number.POSITIVE_INFINITY + "<br/> NEGATIVE_INFINITY的值为：" + Number.NEGATIVE_INFINITY;
    var demo42 = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo42").innerHTML = "数组创建以及显示：" + demo42 + "<br/> 访问数组元素 demo42[2]:" + demo42[2];
    demo42[0] = "Opel";
    document.getElementById("demo43").innerHTML = "修改后原数组值：" + demo42 + "<br/> 修改的索引值：" + demo42[0] + "<br/>数组类型：" + typeof demo42;
    document.getElementById("demo44").innerHTML = "demo42数组的长度：" + demo42.length + "<br/> 访问最后一个元素：" + demo42[demo42.length - 1];
    var demo45, demo45Length;
    demo45Length = demo42.length;
    demo45 = "<ul>";
    for (var i = 0; i < demo45Length; i++) {
        demo45 += "<li>" + demo42[i] + "</li>";
    }
    demo45 += "</ul>";
    document.getElementById("demo45").innerHTML = "For循环方式遍历：<br/>" + demo45;

    var demo46;
    demo46 = "<ul>";
    demo42.forEach(arrayByForeach);
    demo46 += "</ul>";
    document.getElementById("demo46").innerHTML = "Array.Foreach()函数遍历结果：<br/>" + demo46;

    function arrayByForeach(value) {
        demo46 += "<li>" + value + "</li>";
    }

    document.getElementById("demo47").innerHTML = "转换结果：" + demo42.toString() + "<br/>join()方法将数组元素姐合成一个字符串可自定义分隔符：" + demo42.join(" | ");
    var popValue = demo42.pop();
    document.getElementById("demo48").innerHTML = " pop()方法删除数组中的最后一个元素；pop()返回值：" + demo42.toString() + "<br/>被删除的元素：" + popValue;
    document.getElementById("demo49").innerHTML = "push()方法，向数组结尾添加一个新元素,方法返回数组长度：" + demo42.push("Kiwi")
        + "<br/>demo42数组内容：" + demo42.toString();
    document.getElementById("demo50").innerHTML = "shift()方法删除数组中第一个元素" + demo42[0] +
        "<br/> 结果：" + demo42.shift() + " 数组元素为：" + demo42.toString() +
        "<br/> unshift()方法在数组开头插入元素返回值为：" + demo42.unshift("test") + ";数组元素为：" + demo42.toString();
    document.getElementById("demo51").innerHTML = "原数组：" + demo42.toString();

    function spliceShow() {
        var spliceValue = demo42.splice(2, 1, "AddOne", "AddTwo");
        document.getElementById("demo52").innerHTML = "修改后的数组：" + demo42.toString();
        document.getElementById("demo53").innerHTML = "删掉的值：" + spliceValue;
    }

    var demo54 = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo54").innerHTML = "concat():拼接数组" + demo42.concat(demo54) +
        "<br/> concat():拼接值" + demo54.concat("value1", "value2");
    document.getElementById("demo55").innerHTML = "slice()剪切数组:" + demo54.slice(1);
    document.getElementById("demo56").innerHTML = "数组排序sort():" + demo54.sort();
    document.getElementById("demo57").innerHTML = "反转数组reverse():" + demo54.reverse();
    var demo58 = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo58").innerHTML = "原数字数组:" + demo58.toString() + "<br/>数字排序升序:" + demo58.sort(function (a, b) {
        return a - b
    });
    document.getElementById("demo59").innerHTML = "数字排序降序:" + demo58.sort(function (a, b) {
        return b - a
    });
    var demo60 = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo60").innerHTML = demo60;

    function letterSort() {
        demo60.sort();
        document.getElementById("demo60").innerHTML = demo60;
    }

    function numSort() {
        demo60.sort(function (a, b) {
            return a - b
        });
        document.getElementById("demo60").innerHTML = demo60;
    }

    document.getElementById("demo61").innerHTML = demo60;

    function randomSort() {
        document.getElementById("demo61").innerHTML = demo60.sort(function (a, b) {
            return 0.3 - Math.random()
        });
    }

    var demo62 = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo62").innerHTML = "原数组：" + demo62 + "</br>数组中最大值：" + Math.max.apply(null, demo62) +
        "<br/>数组中最小值：" + Math.min.apply(null, demo62);

    function getArrayMax(arr) {
        var len = arr.length;
        var max = -Infinity;
        while (len--) {
            if (arr[len] > max) {
                max = arr[len];
            }
        }
        return max;
    }

    function getArrayMin(arr) {
        var len = arr.length;
        var min = Infinity;
        while (len--) {
            if (arr[len] < min) {
                min = arr[len];
            }
        }
        return min;
    }

    function setMaxValue() {
        document.getElementById("demo63").innerHTML = getArrayMax(demo62);
    }

    function setMinValue() {
        document.getElementById("demo63").innerHTML = getArrayMin(demo62);
    }

    var classOne = [
        {name: "李四", age: 10},
        {name: "张三", age: 15},
        {name: "王五", age: 9}
    ];
    showClassMsg(classOne);

    function showClassMsg(objectClass) {
        var classMsg = "";
        for (var i = 0; i < objectClass.length; i++) {
            classMsg += objectClass[i].name + "|" + objectClass[i].age + "<br/>";
        }
        document.getElementById("demo64").innerHTML = classMsg;
    }

    function sortClassMsg() {
        classOne.sort(function (a, b) {
            return a.age - b.age
        });
        showClassMsg(classOne);
    }

    function sortClassByName() {
        classOne.sort(function (a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        showClassMsg(classOne);
    }

    var demo65 = [4, 9, 16, 25, 45];
    var txt = "";
    demo65.forEach(forEachDemo65);
    document.getElementById("demo65").innerHTML = txt;

    function forEachDemo65(value, index, array) {
        txt = txt + value + "<br>";
    }

    var demo66 = demo65.map(demo66Map);

    document.getElementById("demo66").innerHTML = demo66;

    function demo66Map(value, index, array) {
        return value * 3;
    }


    var demo67 = demo65.filter(demo67filter);
    document.getElementById("demo67").innerHTML = demo67;

    function demo67filter(value, index, array) {
        return value > 18;
    }

    var demo68 = demo65.reduce(demo68reduce);

    document.getElementById("demo68").innerHTML = "总和是：" + demo68;

    function demo68reduce(total, value, index, array) {
        return total + value;
    }

    var demo69 = demo65.every(demo69allOver18);
    document.getElementById("demo69").innerHTML = "数组元素值是否都大于18：" + demo69;

    function demo69allOver18(value, index, array) {
        return value > 18;
    }

    var demo70 = demo65.some(demo70Some);
    document.getElementById("demo70").innerHTML = "数组元素是否包含大于18的值：" + demo70;

    function demo70Some(value, index, array) {
        return value > 18;
    }

    var demo71 = ["Apple", "Orange", "Apple", "Mango"];

    document.getElementById("demo71").innerHTML = "Apple出现的首位置" + demo71.indexOf("Apple");

    document.getElementById("demo72").innerHTML = "Apple最后出现的位置" + demo71.lastIndexOf("Apple");

    var demo73 = demo65.find(demo73Find);

    document.getElementById("demo73").innerHTML = "数组中第一个大于18的元素值为：" + demo73;

    function demo73Find(value, index, array) {
        return value > 18;
    }

    var demo74 = demo65.findIndex(demo74FindIndex);

    document.getElementById("demo74").innerHTML = "数组中第一个大于18的元素索引为：" + demo74;

    function demo74FindIndex(value, index, array) {
        return value > 18;
    }

    document.getElementById("demo75").innerHTML = "当前时间为：" + new Date() +
        "<br/>将日期转换为UTC字符串:" + (new Date()).toUTCString() +
        "<br/> 创建指定时间的对象(7参数)：" + new Date(2018, 11, 24, 10, 33, 30, 0) +
        "<br/> 创建指定时间的对象(6参数)：" + new Date(2018, 12, 24, 10, 10, 30);

    document.getElementById("demo76").innerHTML = "通过日期字符串创建的日期对象为：" + new Date("December 25, 2019 12:46:00");
    document.getElementById("demo77").innerHTML = "创建一个零时日期对象：" + new Date(0);

    document.getElementById("demo78").innerHTML = "创建短日期格式：" + new Date("02/19/2018") +
        "<br/> 创建长日期格式：" + new Date("Feb 19 2018") +
        "<br/> JS创建完整日期：" + new Date("Mon Feb 19 2018 06:55:23 GMT+0100 (W. Europe Standard Time)") +
        "<br/> Date.parse 获取当前时间的毫秒数" + Date.parse((new Date().toString()));

    document.getElementById("demo79").innerHTML = "getTime()：" + (new Date()).getTime() +
        "<br/> getFullYear()：" + (new Date()).getFullYear() +
        "<br/> getMonth()：" + (new Date()).getMonth() +
        "<br/> getDate()：" + (new Date()).getDate() +
        "<br/> getHours()：" + (new Date()).getHours() +
        "<br/> getMinutes()：" + (new Date()).getMinutes() +
        "<br/> getSeconds()：" + (new Date()).getSeconds() +
        "<br/> getMilliseconds()：" + (new Date()).getMilliseconds() +
        "<br/> getDay()：" + (new Date()).getDay()
    ;
    document.getElementById("demo81").innerHTML = "getTime()：" + (new Date()).getTime() +
        "<br/> getUTCFullYear()：" + (new Date()).getUTCFullYear() +
        "<br/> getUTCMonth()：" + (new Date()).getUTCMonth() +
        "<br/> getUTCDate()：" + (new Date()).getUTCDate() +
        "<br/> getUTCHours()：" + (new Date()).getUTCHours() +
        "<br/> getUTCMinutes()：" + (new Date()).getUTCMinutes() +
        "<br/> getUTCSeconds()：" + (new Date()).getUTCSeconds() +
        "<br/> getUTCMilliseconds()：" + (new Date()).getUTCMilliseconds() +
        "<br/> getUTCDay()：" + (new Date()).getUTCDay()
    ;
    document.getElementById("demo80").innerHTML = new Date().toString();
    window.setInterval(getDateNow, 1000);

    function getDateNow() {
        document.getElementById("demo80").innerHTML = new Date().toString();
    }

    var today, someday, demo82;
    today = new Date();
    someday = (new Date()).setFullYear(2100, 0, 15);

    if (today < someday) {
        demo82 = "今天在2100年1月15日之前";
    }
    else {
        demo82 = "今天在2100年1月15日之后";
    }
    document.getElementById("demo82").innerHTML = demo82;

    document.getElementById("demo83").innerHTML = "Math.round(8.2)：" + Math.round(8.2);
    document.getElementById("demo84").innerHTML = "Math.pow(8,2)：" + Math.pow(8, 2);
    document.getElementById("demo85").innerHTML = "Math.sqrt(9)：" + Math.sqrt(9);
    document.getElementById("demo86").innerHTML = "Math.abs(-9)：" + Math.abs(-9);
    document.getElementById("demo87").innerHTML = "Math.ceil(8.2)：" + Math.ceil(8.2);
    document.getElementById("demo88").innerHTML = "Math.floor(8.2)：" + Math.floor(8.2);
    document.getElementById("demo89").innerHTML = "Math.sin(8.2)：" + Math.sin(90 * Math.PI / 180);
    document.getElementById("demo90").innerHTML = "Math.cos(8.2)：" + Math.cos(0 * Math.PI / 180);
    var demo91 = [1, 2, 55, 4, 100];
    document.getElementById("demo91").innerHTML = "Math.max(demo91)：" + Math.max(demo91);
    document.getElementById("demo92").innerHTML = "Math.min(demo91)：" + Math.min(1, 2, 55, 4, 100);
    document.getElementById("demo93").innerHTML = "Math.random()：" + Math.random();
    document.getElementById("demo93").innerHTML = "Math.random()：" + Math.random();
    document.getElementById("demo94").innerHTML = "获取一个10以内的整数" + Math.floor(Math.random() * 10);

    function funcitondemo96(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    document.getElementById("demo97").innerHTML = "Boolean(10>9):" + Boolean(10 > 9) +
        "<br/> 或直接 10>9 比较：" + (10 > 9);

    //获取用户输入随机数范围
    function getRandomDemo95() {
        document.getElementById("demo95").innerHTML = Math.floor(Math.random() * (document.getElementById("input95").value));
    }

    function funcDemo98() {
        var demo98, demo98Time;
        demo98Time = new Date().getHours()
        if (demo98Time < 12) {
            demo98 = "早上好";
        }
        else if (demo98Time > 12 && demo98Time < 18) {
            demo98 = "下午好";
        }
        else {
            demo98 = "晚上好";
        }
        document.getElementById("demo98").innerText = demo98;
    }

    var day;

    switch (new Date().getDay()) {

        case 0:
            day = "星期天";
            break;
        case 1:
            day = "星期一";
            break;
        case 2:
            day = "星期二";
            break;
        case 3:
            day = "星期三";
            break;
        case 4:
            day = "星期四";
            break;
        case 5:
            day = "星期五";
            break;
        case 6:
            day = "星期六";
            break;
    }
    document.getElementById("demo99").innerHTML = "今天是" + day;

    var demo100Array = ["A", "B", "C", "D"];
    var demo100Test = "";
    for (x in demo100Array) {
        demo100Test += demo100Array[x] + "|";
    }
    document.getElementById("demo100").innerHTML = "Forin循环结果:" + demo100Test;
    document.getElementById("demo101").innerHTML = "\"Bill\".constructor:" + "Bill".constructor +
        "<br/> (3.14).constructor:" + (3.14).constructor +
        "<br/> false.constructor:" + false.constructor +
        "<br/>[1,2,3,4].constructor:" + [1, 2, 3, 4].constructor +
        "<br/>{name:'Bill', age:62}.constructor:" + {name: 'Bill', age: 62}.constructor +
        "<br/> new Date().constructor:" + new Date().constructor +
        "<br/> function () {}.constructor:" + function () {
        }.constructor;
    var demo102 = "Visit W3School!Visit W3School!Visit W3School!";
    document.getElementById("demo102").innerHTML = demo102.search(/w3School/i);

    function funcDemo103() {
        var demo103 = document.getElementById("demo103").innerHTML;
        var demo103T = demo103.replace(/晚上/i, "早上");
        document.getElementById("demo103").innerHTML = demo103T;
    }

    document.getElementById("demo104").innerHTML = "test()：" + /[x]+/.test("The best things in life are free!");
    document.getElementById("demo105").innerHTML = "exec()：" + /[c]+/.exec(demo102);
    document.getElementById("demo106").innerHTML = "match():" + demo102.match(/[c]+/ig).toString();

    function functionDemo109() {
        var demo110Msg, demo109value;
        demo110Msg = document.getElementById("demo110");
        demo110Msg.innerHTML = "";
        demo109value = document.getElementById("demo109").value;
        try {
            if (demo109value == "") throw ("输入的值为空!");
            if (isNaN(demo109value)) throw("输入的值为非数字1");
            demo109value = Number(demo109value);
            if (demo109value < 5) throw("输入的值小于5!");
            if (demo109value > 10) throw("输入的值大于10!");
        }
        catch (err) {
            demo110Msg.innerHTML = "输入是" + err;
        }
        finally {
            document.getElementById("demo109").value = "";
        }

    }

    //测试自动全局
    functionDemo111();

    function functionDemo111() {
        demo111 = "测试自动全局";
    }

    document.getElementById("demo111").innerHTML = demo111;

    //JS let
    var demo112var;
    let demo112let = 5;
    for (let demo112let = 0; demo112let < 10; demo112let++) {
    }
    for (demo112var = 0; demo112var < 10; demo112var++) {
    }

    document.getElementById("demo112").innerHTML = "var定义变量循环后结果:" + demo112var +
        "<br/> let变量定义的结果：" + demo112let;

    var demo113var = "varProperty";
    let demo113let = "letProperty";
    document.getElementById("demo113").innerHTML = "var定义变量使用window结果：" + window.demo113var +
        "<br/> let定义变量使用window结果：" + window.demo113let;


    //const 定义变量说明：不可重新赋值，且必须在声明的时候赋值
    // const testConstPropery = "A";
    // testConstPropery = "2";

    var demo114, demo114a, demo114b;
    demo114a = 5;
    demo114b = 10;
    demo114 = demo114a + demo114b;
    console.log("demo114的值：" + demo114);
    document.getElementById("demo114").innerHTML = "demo114的值为：" + demo114 +
        "<br/> 在调试窗口查看值";
    debugger;
    document.getElementById("demo115").innerHTML = "未添加debugger将会变成当前文本";
    //JS常见错误
    var demo116a = 0.1;
    var demo116b = 0.2;
    document.getElementById("demo116").innerHTML = "0.1+0.2=" + (demo116a + demo116b) +
        "<br/>针对浮点数相加导致结果差异，可通过扩大倍数来处理：" + (demo116a * 30 + demo116b * 30) / 30;
    //JSON.parse() JSON.stringify()方法
    var demo117json = '{"name":"Bill","age":62,"city":"Seatle"}';
    var demo117obj = JSON.parse(demo117json);
    document.getElementById("demo117").innerHTML = "JSON.parse():" + demo117obj.name + "|" + demo117obj.age;
    document.getElementById("demo118").innerHTML = "JSON.stringify():" + JSON.stringify(demo117obj);

    //JS表单认证
    function JSFormAuth() {
        let x = document.forms["myForm"]["fname"].value;
        debugger;
        if (x == "") {
            alert("必须填写姓名！");
            return false;
        }

    }

    //JS 约束验证DOM
    function JSDOMAtuh() {
        let inpOjb = document.getElementById("demo119");
        if (!inpOjb.checkValidity()) {
            document.getElementById("demo120").innerHTML = inpOjb.validationMessage;
        }
        else {
            document.getElementById("demo120").innerHTML = "输入有效！";
        }
    }

    //JS对象
    //JS属性
    var objectDemo121 = {
        "Name": "名字", "Age": 18, "Sex": "男", language: "en", fullName: function () {
            return this.Name + "|" + this.Age;
        }, get lang() {
            return this.language;
        },
        set lang(lang) {
            this.language = lang;
        }
    };
    var txtDemo121 = "";
    document.getElementById("demo121").innerHTML = "object.property:" + objectDemo121.Age +
        "<br> object[\"property\"]:" + objectDemo121["Name"];
    //JS添加属性
    objectDemo121.OurCode = "AE280";
    delete objectDemo121.Sex;
    //JS for……in循环
    for (x in objectDemo121) {
        txtDemo121 += objectDemo121[x];
    }
    document.getElementById("demo122").innerHTML = "遍历对象输出：" + txtDemo121;
    //JS方法
    document.getElementById("demo123").innerHTML = "JS对象方法:" + objectDemo121.fullName() +
        "<br> 若访问对象方法是没有添加()则返回函数定义：" + objectDemo121.fullName;
    //JS 使用内建方法
    var demo124Message = "Hello World";
    document.getElementById("demo124").innerHTML = "使用String对象内建方法：" + demo124Message.toUpperCase();
    //JS 对象添加新的方法
    objectDemo121.newFunc = function () {
        return this.Age;
    };
    document.getElementById("demo125").innerHTML = "添加新年龄方法：" + objectDemo121.newFunc();
    //JS 对象访问器
    //get
    document.getElementById("demo126").innerHTML = "JS对象访问器get：" + objectDemo121.lang;
    //set
    objectDemo121.lang = "Test";
    document.getElementById("demo127").innerHTML = "JS对象访问器set：" + objectDemo121.language;
    //JS 计数器
    var demo128Obj = {
        counter: 0,
        get reset() {
            this.counter = 0;
        },
        get increment() {
            this.counter++;
        },
        get decrement() {
            this.counter--;
        },
        set add(value) {
            this.counter += value;
        },
        set subtract(value) {
            this.counter -= value;
        }
    };
    demo128Obj.reset;
    demo128Obj.add = 5;
    demo128Obj.subtr = 1;
    demo128Obj.increment;
    demo128Obj.decrement;
    document.getElementById("demo128").innerHTML = "JS计数器：" + demo128Obj.counter;

    //JS对象构造器
    function Demo129Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    //prototype为对象构造器添加函数和方法;
    Demo129Person.prototype.showName = function () {
        return this.firstName + " " + this.lastName;
    };
    Demo129Person.prototype.sex = "男";

    var demo129Obj = new Demo129Person("Bill", "Gat", 62, "blue");
    document.getElementById("demo129").innerHTML = "对象构造器创建对象：" + demo129Obj.age;
    //JS对象原型
    document.getElementById("demo130").innerHTML = "JS为对象构造器添加新属性：" + demo129Obj.sex +
        "<br> JS为对象构造器添加新方法：" + demo129Obj.showName();
    //JS ES5对象方法


    // alert("欢迎访问！");
    document.getElementById("demo107").innerHTML = "暂无异常！";
    // throw("测试用户自定义异常");
}
catch (err) {
    document.getElementById("demo107").innerHTML = err;
}
finally {
    document.getElementById("demo108").innerHTML = "无论结果如何都会执行的代码！";
}