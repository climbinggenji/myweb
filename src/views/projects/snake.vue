<template>
  <div id="snake">
    <canvas id="canvas" width="800" height="800"></canvas>
    <p>得分： {{score}}</p>
  </div>
</template>

<script>
export default {
    inject: ['reload'],
    data() {
        return {
            score: 0,
            inPage: true
        }
    },
    mounted() {
        const _this = this
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        let isEatFood = false
        let gameover = false
        let timer

        function Rect(x, y, width, height, color) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
            this.color = color
        }

        Rect.prototype.rDraw = function() {
            ctx.beginPath()
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.strokeRect(this.x, this.y, this.width, this.height)
        }

        //创建snake对象
        function Snake() {
            // 蛇头
            this.head = new Rect(canvas.width/2-10, canvas.height/2-10, 10, 10, 'black')
            // 蛇身
            this.body = new Array()
            // 运动方向
            this.direction = 'right'

            let x = this.head.x - 10
            let y = this.head.y

            for (let i = 0; i < 3; i++) {
                let rect = new Rect(x, y, 10, 10, 'green')
                this.body.push(rect)
                x -= 10
            }
        }

        Snake.prototype.sDraw = function() {
            // 绘制蛇头
            this.head.rDraw()
            // 绘制蛇身
            for (let i = 0; i < this.body.length; i++) {
                this.body[i].rDraw()
            }
        }

        // 蛇移动的方法
        Snake.prototype.move = function() {
            // 蛇移动就相当于头部前面加一个头部，去掉一个尾部，如果吃到食物则不去尾
            let rect = new Rect(this.head.x, this.head.y, this.head.width, this.head.height, 'green')
            this.body.splice(0, 0, rect)
            if (!isEatFood) {
                this.body.pop()
            } else {
                isEatFood = false
            }

            switch (this.direction) {
                case 'left':
                    this.head.x -= this.head.width
                    if (this.head.x == -10) {
                        gameover = true
                    }
                    break;
                case 'up':
                    this.head.y -= this.head.height
                    if (this.head.y == -10) {
                        gameover = true
                    }
                    break;
                case 'right':
                    this.head.x += this.head.width
                    if (this.head.x == 800) {
                        gameover = true
                    }
                    break;
                case 'down':
                    this.head.y += this.head.height
                    if (this.head.y == 800) {
                        gameover = true
                    }
                    break;
            }

            for (let i = 0; i < this.body.length; i++) {
                if (this.body[i].x == this.head.x && this.body[i].y == this.head.y) {
                    gameover = true
                }
            }
            if (gameover) {
                clearInterval(timer)
                _this.$alert('Game Over~~', '提示', {
                    confirmButtonText: '重新开始', 
                    callback: () => {
                        _this.reload()
                    }
                })
            }
            // 是否吃到食物
            if (this.head.x == food.x && this.head.y == food.y) {
                isEatFood = true
                _this.score += 1
                food = new randForFood
            }
        }

        let snake = new Snake()
        let food = new randForFood()
        snake.sDraw()
        
        // 响应按键
        document.onkeydown = function(val) {
            let event = val || window.event
            switch (event.keyCode) {
                case 37:
                    if (snake.direction !== 'right') {
                        snake.direction = 'left'
                    }
                    break;
                case 38:
                    if (snake.direction !== 'down') {
                        snake.direction = 'up'
                    }
                    break;
                case 39:
                    if (snake.direction !== 'left') {
                        snake.direction = 'right'
                    }
                    break;
                case 40:
                    if (snake.direction !== 'up') {
                        snake.direction = 'down'
                    }
                    break;
            }
        }

        function getRandInRange(min, max) {
            return Math.round((Math.random() * (max - min)) + min)
        }

        // 食物刷新
        function randForFood() {
            let isInSnake = true
            while (isInSnake) {
                let x = getRandInRange(0, canvas.width/10 - 1) * 10
                let y = getRandInRange(0, canvas.height/10 - 1) * 10
                let rect = new Rect(x, y, 10, 10, 'red')
                // 判断是否与蛇头重叠
                if (rect.x == snake.head.x && rect.y == snake.head.y) {
                    isInSnake = true
                    break
                }

                // 判断是否与蛇身重叠
                for (let i = 0; i < snake.body.length; i++) {
                    if (snake.body[i].x == rect.x && snake.body[i].y == rect.y) {
                        isInSnake = true
                        break
                    }
                }

                isInSnake = false
                return rect
            }
        }

        // 绘制动画
        function animate() {
            if (_this.inPage) {
                if (!gameover) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    snake.move()
                    snake.sDraw()
                    food.rDraw()
                }
            } else {
                clearInterval(timer)
            }
        }
        timer = setInterval(animate, 100)

    },
    beforeRouteLeave (to, from, next) {
        // 离开页面销毁定时器
        this.inPage = false
        next()
    }
};
</script>

<style lang="less" scoped>
#snake {
    width: 1080px;
    margin: 10px auto;
    text-align: center;

    #canvas {
        box-shadow: 0 0 5px #000;
    }
}
</style>