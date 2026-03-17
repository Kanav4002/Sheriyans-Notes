// ============================================
// STICKMAN SHOOTER - Main Game Script
// ============================================

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// DOM Elements
const hudEl = document.getElementById('hud');
const healthFill = document.getElementById('health-fill');
const healthText = document.getElementById('health-text');
const scoreEl = document.getElementById('score');
const waveEl = document.getElementById('wave');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreEl = document.getElementById('final-score');
const finalWaveEl = document.getElementById('final-wave');

// ============================================
// UTILITY
// ============================================
function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// ============================================
// PARTICLE
// ============================================
class Particle {
    constructor(x, y, color, speed, size, life) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = rand(0, Math.PI * 2);
        const vel = rand(speed * 0.3, speed);
        this.vx = Math.cos(angle) * vel;
        this.vy = Math.sin(angle) * vel;
        this.size = rand(size * 0.5, size);
        this.life = life;
        this.maxLife = life;
    }

    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.vx *= 0.97;
        this.vy *= 0.97;
        this.life -= dt;
    }

    draw() {
        const alpha = Math.max(0, this.life / this.maxLife);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }

    get dead() { return this.life <= 0; }
}

// ============================================
// BULLET
// ============================================
class Bullet {
    constructor(x, y, angle, speed = 800) {
        this.x = x;
        this.y = y;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.radius = 4;
        this.life = 2;
        this.trail = [];
    }

    update(dt) {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 6) this.trail.shift();
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.life -= dt;
    }

    draw() {
        // Trail
        for (let i = 0; i < this.trail.length; i++) {
            const t = this.trail[i];
            const alpha = (i / this.trail.length) * 0.4;
            ctx.globalAlpha = alpha;
            ctx.fillStyle = '#ffcc00';
            ctx.beginPath();
            ctx.arc(t.x, t.y, this.radius * 0.6, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Bullet
        ctx.fillStyle = '#ffee55';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ffcc00';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    get dead() {
        return this.life <= 0 ||
            this.x < -50 || this.x > canvas.width + 50 ||
            this.y < -50 || this.y > canvas.height + 50;
    }
}

// ============================================
// STICKMAN DRAWING HELPERS
// ============================================
function drawStickman(x, y, scale, color, armAngle, walkPhase, facingRight) {
    ctx.save();
    ctx.translate(x, y);

    const s = scale;
    const headR = 12 * s;
    const bodyLen = 30 * s;
    const limbLen = 22 * s;

    ctx.strokeStyle = color;
    ctx.lineWidth = 3 * s;
    ctx.lineCap = 'round';
    ctx.shadowBlur = 8;
    ctx.shadowColor = color;

    // Head
    ctx.beginPath();
    ctx.arc(0, -bodyLen - headR, headR, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(0, -bodyLen);
    ctx.lineTo(0, 0);
    ctx.stroke();

    // Legs
    const legSwing = Math.sin(walkPhase) * 0.4;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(Math.PI / 2 + legSwing) * limbLen, Math.sin(Math.PI / 2 + legSwing) * limbLen);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(Math.PI / 2 - legSwing) * limbLen, Math.sin(Math.PI / 2 - legSwing) * limbLen);
    ctx.stroke();

    // Arms
    const armOriginY = -bodyLen * 0.7;

    // Back arm
    ctx.beginPath();
    ctx.moveTo(0, armOriginY);
    const backArmAngle = facingRight ? armAngle + 0.3 : armAngle - 0.3;
    ctx.lineTo(Math.cos(backArmAngle) * limbLen * 0.8, armOriginY + Math.sin(backArmAngle) * limbLen * 0.8);
    ctx.stroke();

    // Front arm (gun arm)
    ctx.lineWidth = 3.5 * s;
    ctx.beginPath();
    ctx.moveTo(0, armOriginY);
    const gunArmLen = limbLen * 1.1;
    const gunTipX = Math.cos(armAngle) * gunArmLen;
    const gunTipY = armOriginY + Math.sin(armAngle) * gunArmLen;
    ctx.lineTo(gunTipX, gunTipY);
    ctx.stroke();

    // Gun
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 4 * s;
    ctx.shadowColor = '#666';
    ctx.beginPath();
    ctx.moveTo(gunTipX, gunTipY);
    ctx.lineTo(gunTipX + Math.cos(armAngle) * 12 * s, gunTipY + Math.sin(armAngle) * 12 * s);
    ctx.stroke();

    ctx.shadowBlur = 0;
    ctx.restore();
}

// ============================================
// PLAYER
// ============================================
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.speed = 280;
        this.maxHp = 100;
        this.hp = 100;
        this.radius = 22;
        this.armAngle = 0;
        this.walkPhase = 0;
        this.facingRight = true;
        this.shootCooldown = 0;
        this.shootRate = 0.15; // seconds between shots
        this.invincible = 0;
        this.groundY = 0;
    }

    update(dt, keys, mouse) {
        // Movement
        let mx = 0, my = 0;
        if (keys['w'] || keys['arrowup']) my -= 1;
        if (keys['s'] || keys['arrowdown']) my += 1;
        if (keys['a'] || keys['arrowleft']) mx -= 1;
        if (keys['d'] || keys['arrowright']) mx += 1;

        if (mx !== 0 || my !== 0) {
            const len = Math.hypot(mx, my);
            mx /= len;
            my /= len;
        }

        this.vx = mx * this.speed;
        this.vy = my * this.speed;
        this.x += this.vx * dt;
        this.y += this.vy * dt;

        // Clamp to canvas
        this.x = Math.max(30, Math.min(canvas.width - 30, this.x));
        this.y = Math.max(60, Math.min(canvas.height - 30, this.y));

        // Walk animation
        if (Math.abs(this.vx) > 10 || Math.abs(this.vy) > 10) {
            this.walkPhase += dt * 10;
        } else {
            this.walkPhase = lerp(this.walkPhase, 0, dt * 8);
        }

        // Aim
        const dx = mouse.x - this.x;
        const dy = mouse.y - (this.y - 20);
        this.armAngle = Math.atan2(dy, dx);
        this.facingRight = dx >= 0;

        // Shoot cooldown
        if (this.shootCooldown > 0) this.shootCooldown -= dt;
        if (this.invincible > 0) this.invincible -= dt;
    }

    shoot(mouse) {
        if (this.shootCooldown > 0) return null;
        this.shootCooldown = this.shootRate;

        const armOriginY = this.y - 30 * 0.7;
        const gunTipX = this.x + Math.cos(this.armAngle) * 35;
        const gunTipY = armOriginY + Math.sin(this.armAngle) * 35;

        return new Bullet(gunTipX, gunTipY, this.armAngle);
    }

    takeDamage(amount) {
        if (this.invincible > 0) return;
        this.hp = Math.max(0, this.hp - amount);
        this.invincible = 0.3;
    }

    draw() {
        // Damage flash
        let color = '#00ffaa';
        if (this.invincible > 0 && Math.sin(this.invincible * 30) > 0) {
            color = '#ff3355';
        }
        drawStickman(this.x, this.y, 1, color, this.armAngle, this.walkPhase, this.facingRight);
    }
}

// ============================================
// ENEMY
// ============================================
class Enemy {
    constructor(x, y, speed, hp) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.hp = hp;
        this.maxHp = hp;
        this.radius = 18;
        this.walkPhase = rand(0, Math.PI * 2);
        this.armAngle = 0;
        this.facingRight = true;
        this.damage = 15;
        this.attackCooldown = 0;
        this.hitFlash = 0;
    }

    update(dt, playerX, playerY) {
        const dx = playerX - this.x;
        const dy = playerY - this.y;
        const d = Math.hypot(dx, dy);

        if (d > 40) {
            this.x += (dx / d) * this.speed * dt;
            this.y += (dy / d) * this.speed * dt;
            this.walkPhase += dt * 8;
        }

        this.armAngle = Math.atan2(dy, dx);
        this.facingRight = dx >= 0;

        if (this.attackCooldown > 0) this.attackCooldown -= dt;
        if (this.hitFlash > 0) this.hitFlash -= dt;
    }

    canAttack() {
        return this.attackCooldown <= 0;
    }

    attack() {
        this.attackCooldown = 1;
    }

    takeDamage(amount) {
        this.hp -= amount;
        this.hitFlash = 0.1;
    }

    draw() {
        let color = '#ff3366';
        if (this.hitFlash > 0) color = '#fff';

        drawStickman(this.x, this.y, 0.85, color, this.armAngle, this.walkPhase, this.facingRight);

        // HP bar
        if (this.hp < this.maxHp) {
            const barW = 30;
            const barH = 4;
            const barX = this.x - barW / 2;
            const barY = this.y - 60;

            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(barX, barY, barW, barH);

            ctx.fillStyle = '#ff3366';
            ctx.shadowBlur = 6;
            ctx.shadowColor = '#ff3366';
            ctx.fillRect(barX, barY, barW * (this.hp / this.maxHp), barH);
            ctx.shadowBlur = 0;
        }
    }

    get dead() { return this.hp <= 0; }
}

// ============================================
// GAME
// ============================================
class Game {
    constructor() {
        this.state = 'menu'; // menu | playing | gameover
        this.player = null;
        this.enemies = [];
        this.bullets = [];
        this.particles = [];
        this.score = 0;
        this.wave = 1;
        this.enemiesRemaining = 0;
        this.waveDelay = 0;
        this.spawnTimer = 0;
        this.enemiesToSpawn = 0;

        this.keys = {};
        this.mouse = { x: 0, y: 0, down: false };

        this.lastTime = 0;
        this.stars = [];

        this._initStars();
        this._bindEvents();
        this._resize();
        this._loop(0);
    }

    _initStars() {
        for (let i = 0; i < 80; i++) {
            this.stars.push({
                x: rand(0, window.innerWidth),
                y: rand(0, window.innerHeight),
                r: rand(0.5, 2),
                alpha: rand(0.1, 0.5),
                speed: rand(0.1, 0.4)
            });
        }
    }

    _bindEvents() {
        window.addEventListener('resize', () => this._resize());

        window.addEventListener('keydown', e => {
            this.keys[e.key.toLowerCase()] = true;

            if (e.key.toLowerCase() === 'r' && this.state === 'gameover') {
                this.startGame();
            }
        });

        window.addEventListener('keyup', e => {
            this.keys[e.key.toLowerCase()] = false;
        });

        canvas.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX * (canvas.width / canvas.clientWidth);
            this.mouse.y = e.clientY * (canvas.height / canvas.clientHeight);
        });

        canvas.addEventListener('mousedown', e => {
            if (e.button === 0) this.mouse.down = true;
        });

        canvas.addEventListener('mouseup', e => {
            if (e.button === 0) this.mouse.down = false;
        });

        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.startGame());
    }

    _resize() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    startGame() {
        this.state = 'playing';
        this.score = 0;
        this.wave = 0;
        this.enemies = [];
        this.bullets = [];
        this.particles = [];
        this.player = new Player(window.innerWidth / 2, window.innerHeight / 2);
        this.waveDelay = 1;
        this.enemiesToSpawn = 0;
        this.enemiesRemaining = 0;

        startScreen.classList.add('hidden');
        gameOverScreen.classList.add('hidden');
        hudEl.style.display = 'flex';

        this._updateHUD();
    }

    gameOver() {
        this.state = 'gameover';
        gameOverScreen.classList.remove('hidden');
        finalScoreEl.textContent = `Score: ${this.score}`;
        finalWaveEl.textContent = `Wave: ${this.wave}`;
    }

    _nextWave() {
        this.wave++;
        this.enemiesToSpawn = 3 + this.wave * 2;
        this.enemiesRemaining = this.enemiesToSpawn;
        this.spawnTimer = 0;
        waveEl.textContent = this.wave;
    }

    _spawnEnemy() {
        let x, y;
        const side = Math.floor(rand(0, 4));
        const w = window.innerWidth;
        const h = window.innerHeight;

        switch (side) {
            case 0: x = rand(0, w); y = -40; break;
            case 1: x = w + 40; y = rand(0, h); break;
            case 2: x = rand(0, w); y = h + 40; break;
            case 3: x = -40; y = rand(0, h); break;
        }

        const speedMult = 1 + this.wave * 0.08;
        const hpMult = 1 + this.wave * 0.15;
        const speed = rand(80, 140) * speedMult;
        const hp = Math.round(rand(25, 40) * hpMult);

        this.enemies.push(new Enemy(x, y, speed, hp));
        this.enemiesToSpawn--;
    }

    _spawnParticles(x, y, color, count, speed, size, life) {
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(x, y, color, speed, size, life));
        }
    }

    _updateHUD() {
        const pct = this.player ? (this.player.hp / this.player.maxHp) * 100 : 100;
        healthFill.style.width = pct + '%';
        healthText.textContent = Math.round(this.player ? this.player.hp : 100);
        scoreEl.textContent = this.score;

        // Health bar color
        if (pct > 50) {
            healthFill.style.background = 'linear-gradient(90deg, #00ffaa, #00ff66)';
            healthFill.style.boxShadow = '0 0 15px rgba(0, 255, 170, 0.5)';
        } else if (pct > 25) {
            healthFill.style.background = 'linear-gradient(90deg, #ffaa00, #ff8800)';
            healthFill.style.boxShadow = '0 0 15px rgba(255, 170, 0, 0.5)';
        } else {
            healthFill.style.background = 'linear-gradient(90deg, #ff3366, #ff0044)';
            healthFill.style.boxShadow = '0 0 15px rgba(255, 51, 102, 0.5)';
        }
    }

    _update(dt) {
        if (this.state !== 'playing') return;

        // Player
        this.player.update(dt, this.keys, this.mouse);

        // Shooting
        if (this.mouse.down) {
            const bullet = this.player.shoot(this.mouse);
            if (bullet) {
                this.bullets.push(bullet);
                this._spawnParticles(bullet.x, bullet.y, '#ffcc00', 3, 100, 2, 0.2);
            }
        }

        // Wave logic
        if (this.enemiesRemaining <= 0 && this.enemies.length === 0) {
            this.waveDelay -= dt;
            if (this.waveDelay <= 0) {
                this._nextWave();
                this.waveDelay = 3;
            }
        }

        // Spawn enemies
        if (this.enemiesToSpawn > 0) {
            this.spawnTimer -= dt;
            if (this.spawnTimer <= 0) {
                this._spawnEnemy();
                this.spawnTimer = rand(0.3, 0.8);
            }
        }

        // Update enemies
        for (const enemy of this.enemies) {
            enemy.update(dt, this.player.x, this.player.y);

            // Melee attack
            if (dist(enemy, this.player) < enemy.radius + this.player.radius && enemy.canAttack()) {
                this.player.takeDamage(enemy.damage);
                enemy.attack();
                this._spawnParticles(this.player.x, this.player.y - 20, '#ff3366', 8, 150, 3, 0.4);
            }
        }

        // Update bullets
        for (const bullet of this.bullets) {
            bullet.update(dt);
        }

        // Bullet-enemy collisions
        for (const bullet of this.bullets) {
            if (bullet.dead) continue;
            for (const enemy of this.enemies) {
                if (enemy.dead) continue;
                if (dist(bullet, enemy) < bullet.radius + enemy.radius + 10) {
                    enemy.takeDamage(20);
                    bullet.life = 0;
                    this._spawnParticles(bullet.x, bullet.y, '#ffcc00', 6, 120, 3, 0.3);

                    if (enemy.dead) {
                        this.score += 100;
                        this.enemiesRemaining--;
                        this._spawnParticles(enemy.x, enemy.y - 20, '#ff3366', 15, 200, 4, 0.6);
                        this._spawnParticles(enemy.x, enemy.y - 20, '#ff6699', 10, 150, 3, 0.4);
                    }
                    break;
                }
            }
        }

        // Update particles
        for (const particle of this.particles) {
            particle.update(dt);
        }

        // Clean up
        this.enemies = this.enemies.filter(e => !e.dead);
        this.bullets = this.bullets.filter(b => !b.dead);
        this.particles = this.particles.filter(p => !p.dead);

        // Update HUD
        this._updateHUD();

        // Check death
        if (this.player.hp <= 0) {
            this._spawnParticles(this.player.x, this.player.y - 20, '#00ffaa', 30, 300, 5, 1);
            this.gameOver();
        }
    }

    _drawBackground() {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Dark gradient
        const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7);
        grad.addColorStop(0, '#111122');
        grad.addColorStop(1, '#060610');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        // Stars
        for (const star of this.stars) {
            star.y += star.speed;
            if (star.y > h) { star.y = 0; star.x = rand(0, w); }

            ctx.globalAlpha = star.alpha + Math.sin(Date.now() * 0.002 + star.x) * 0.15;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        // Grid lines
        ctx.strokeStyle = 'rgba(0, 255, 170, 0.03)';
        ctx.lineWidth = 1;
        const gridSize = 80;
        for (let x = 0; x < w; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }

    _draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        this._drawBackground();

        // Particles (behind entities)
        for (const p of this.particles) p.draw();

        // Enemies
        for (const e of this.enemies) e.draw();

        // Bullets
        for (const b of this.bullets) b.draw();

        // Player
        if (this.state === 'playing' && this.player) {
            this.player.draw();
        }

        ctx.restore();
    }

    _loop(time) {
        const dt = Math.min((time - this.lastTime) / 1000, 0.05);
        this.lastTime = time;

        this._update(dt);
        this._draw();

        requestAnimationFrame(t => this._loop(t));
    }
}

// Start the game
new Game();
