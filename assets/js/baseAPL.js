// 注意：每次调用$.get()或者$.post或者$.ajax()的时候
// 会先调用 ajaxPrefilter 这个函数
// 这这个函数中 可以拿到我们给ajax 提供的别致对象
$.ajaxPrefilter(function (options) {
    console.log(options.url)
    // 在发起ajax之前，统一拼接请求根路径
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
})