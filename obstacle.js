function Obstacle() {
    this.x = width;
    this.y = ground;

    this.update = function() {
        this.x = this.x - obstaclespeed;
        if (this.x < -obstaclelength) {
            this.x = width;
        }

    }

    this.show = function() {
        fill(255, 0, 0);
        rect(this.x, this.y - obstacleheight, obstaclelength, obstacleheight);
    }
}