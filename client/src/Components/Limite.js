Array.prototype.take = function(count = 10){
    this.splice(count)
    return this
}