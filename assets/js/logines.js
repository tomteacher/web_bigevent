$(function () {
    // 点击去注册账号链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击登录的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form = layui.form
    var layer = layui.layer
    // 通过 form.verify()函数定义校验规则检查
    form.verify({
        // 自定义了一个密码鉴定
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 校验两次密码是否一致
        repwd: function (value) {
            // 通过形参拿到确认密码框的内容
            // 还需要拿到密码框中的内容
            // 然后进行一次等于判断
            // 如果判断失败，则return一个提示就行
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致'
            }
        }
    })
    $('#from_reg').on('submit', function (e) {
        e.preventDefault()
        var data = {
            username: $
                ('#form_reg [name=username]').val(), password: $('#form_reg[name=password]').val()
        }
        $.post('http://api-breakingnews-web.itheima.net/api/reguser', data, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功！请登录')
            // 模拟人的点击行为
            $('#link_login').click()
        })

    })

})