! function () {
    var view = document.querySelector('section.message')
    var model = {
        init: function () {
            var APP_ID = 'F3UOvz2tclcfjJasNqv6efzK-gzGzoHsz';
            var APP_KEY = 'P8a9ROPzmGFBVTQwAqilctVe';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        // 获取数据
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find() // Promise 对象
        },
        // 创建数据
        save: function(name, content){
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                name: name,
                content: content
            })
        }
    }
    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function() {
            this.model.fetch().then((messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        let messageList = document.querySelector('#messageList')
                        this.messageList.appendChild(li)
                    })
                }, function (error) {
                    alert('提交失败')
                }).then(() => {}, (error) => {
                    console.log(error)
                });
        },
        bindEvents: function() {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view, model)
}.call()
