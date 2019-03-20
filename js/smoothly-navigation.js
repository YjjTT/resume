! function () {
    var view = document.querySelector('nav.menu')
    var controller = function (view) {
        let liTags = view.querySelectorAll("nav.menu > ul > li");

        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add("active");
            };
            liTags[i].onmouseleave = function (x) {
                x.currentTarget.classList.remove("active");
            };
        }
        let aTags = document.querySelectorAll("nav.menu > ul > li > a");

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault();
                let a = x.currentTarget;
                let href = a.getAttribute("href");
                let element = document.querySelector(href);
                let top = element.offsetTop;

                let currentTop = window.scrollY;
                let targetTop = top - 80;
                let s = targetTop - currentTop; // 路程
                var coords = {
                    y: currentTop
                }; // 起始位置
                var t = Math.abs((s / 100) * 200); // 時間
                if (t > 400) {
                    t = 400;
                }
                var tween = new TWEEN.Tween(coords) // 起始位置
                    .to({
                        y: targetTop
                    }, t) // 結束位置和時間
                    .easing(TWEEN.Easing.Quadratic.In) // 緩動類型
                    .onUpdate(function () {
                        // coords.y 已經變了
                        window.scrollTo(0, coords.y); // 如何更新界面
                    })
                    .start(); // 開始緩動
            };
        }
    }
    controller(view)
}.call()