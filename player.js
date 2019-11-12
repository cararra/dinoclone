function Player() {
    this.x = startingx;
    this.y = ground;
    this.yvel = 0;
    this.update = function() {
        this.y = this.y - this.yvel;
        if (this.y < ground) {
            this.yvel = this.yvel - gravity;
        }
        else {
            this.yvel = 0;
        }
    }
    this.show = function() {
        fill(255);
        rect(this.x, this.y - playerheight, playerwidth, playerheight);
    }
    this.jump = function() {
        if (this.y >= ground) {
            this.yvel = jumpspeed;
        }
    }
}