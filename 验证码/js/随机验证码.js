//真实项目中 验证码一般都是后台处理的 后台返回给客户端展示的是一个图片(图片中包含了验证码)  目的 防批量注入
        // 1.字母加数字
        // 2.问答
        // 3.选图片
        // 4.成语填空
        // 5.图片拼图
        // 6.滑动拖拽
        var codeBox = document.getElementById('codeBox');
        // 生成四位随机验证码: 取值范围
        var areaStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRISUVWXYZ';
        var result = '';
        for (var i = 0; i < 4; i++) {
            //随机获取一个0~61之间的整数 作为接下来获取字符的索引
            var ran = Math.round(Math.random() * 61);
            //根据索引获取一个随机字符
            var char = areaStr.charAt(ran);
            //把每一个循环获取的字符存放在最后结果中
            result += char;
        }
        codeBox.innerHTML = result;