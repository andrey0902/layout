var container = document.getElementById('messages-container');

container.onclick = function (event) {
    if (!event.target.classList.contains('remove-button')) return;
    console.dir(event.target)
    console.dir(event.target.classList)
    console.dir(event.target.classList.value)
    console.dir(event.target.attributes)
    event.target.parentNode.style.visibility = 'hidden';
}


var div = document.querySelector('.content');
function ContentClose(elem) {
    this.close = function (target) {

        target.parentNode.style.display = 'none';
    };
    var self = this;
    elem.addEventListener('click', closess);

    function closess(e) {
        var target = e.target;
        if (target.tagName == 'SPAN') {
            self.close(target);
        }
    };
}
new ContentClose(div);


var chuxny = 55;
function Menu(elem) {
    this.save = function () {
        alert('сохраняю');
    };
    this.load = function () {
        alert('загружаю');
    };
    this.search = function () {
        alert('ищу');
    };

    var self = this;

    elem.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action) {
            self[action]();
        }
    };
}

console.dir(new Menu(document.getElementById('chuxny')));

