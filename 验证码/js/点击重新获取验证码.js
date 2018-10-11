var codeBox = document.getElementById('codeBox');
        //获取四位验证码
        function queryCode() {
            var result = '',
                areaStr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRISUVWXYZ';
            for (var i = 0; i < 4; i++) {
                var ran = Math.round(Math.random() * 61);
                result += areaStr[ran];
            }
            codeBox.innerHTML = result;
        }
        //加载页面的时候需要执行一次这个方法 生成四位验证码
        queryCode();
        // 点击重新生成验证码 只是把函数绑定给元素的点击事件 方法还没有执行 点击的时候才执行
        codeBox.onclick = queryCode;