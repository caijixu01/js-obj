function define(parent, childFn) {
    var parentClone = $.extend(true, {}, parent);
    return $.extend({}, parentClone, childFn(parentClone));
}

var base = {
    level : 1,
    name : "base",
    toString : function() {
        return this.level + " - " + this.name;
    },
    act : function() {
        console.log("1111");
    }
};

var sub = define(base, function(_super) {
    return {
        name : "sub",
        act : function() {
            _super.act.apply(this, arguments); // ���ø��෽��
            console.log("2222");
        }
    };
});

console.log(base.toString()); // ��� 1 - base
console.log(sub.toString()); // ��� 1 - sub
sub.act(); // ��� 1111 2222
