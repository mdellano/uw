var Project=Class.extend({
    _raw:null,
    init:function(raw) {
        this._raw=raw;
    },
    data:function() {
        return this._raw;
    }
});