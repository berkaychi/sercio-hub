// ============================================================
// particles.js — Canvas parçacık ve ember animasyonu
// ============================================================

export function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let sparks = [];
    let embers = [];
    const sparkCount = 40;
    const emberCount = 25;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Spark {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 10;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = -(Math.random() * 2 + 1.5);
            this.opacity = Math.random() * 0.8 + 0.2;
            this.life = Math.random() * 150 + 100;
            this.maxLife = this.life;
            const colors = [
                { r: 255, g: 215, b: 0 },
                { r: 255, g: 170, b: 0 },
                { r: 255, g: 107, b: 0 },
                { r: 255, g: 69, b: 0 },
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX + Math.sin(this.life * 0.05) * 0.3;
            this.y += this.speedY;
            this.life--;
            this.opacity = (this.life / this.maxLife) * 0.8;
            this.size *= 0.998;

            if (this.life <= 0 || this.y < -10) {
                this.reset();
            }
        }

        draw() {
            const { r, g, b } = this.color;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.2})`;
            ctx.fill();
        }
    }

    class Ember {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * canvas.width;
            this.y = initial ? Math.random() * canvas.height : canvas.height + 20;
            this.size = Math.random() * 1.5 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = -(Math.random() * 0.5 + 0.2);
            this.opacity = Math.random() * 0.4 + 0.1;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.05 + 0.02;
        }

        update() {
            this.x += this.speedX + Math.sin(this.pulse) * 0.2;
            this.y += this.speedY;
            this.pulse += this.pulseSpeed;

            const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.15;

            if (this.y < -20) {
                this.reset();
            }

            return Math.max(0, pulseOpacity);
        }

        draw(pulseOpacity) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 180, 50, ${pulseOpacity})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 150, 0, ${pulseOpacity * 0.15})`;
            ctx.fill();
        }
    }

    function init() {
        resize();
        sparks = [];
        embers = [];

        for (let i = 0; i < sparkCount; i++) {
            const spark = new Spark();
            spark.y = Math.random() * canvas.height;
            spark.life = Math.random() * spark.maxLife;
            sparks.push(spark);
        }

        for (let i = 0; i < emberCount; i++) {
            embers.push(new Ember());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        embers.forEach((ember) => {
            const pulseOpacity = ember.update();
            ember.draw(pulseOpacity);
        });

        sparks.forEach((spark) => {
            spark.update();
            spark.draw();
        });

        requestAnimationFrame(animate);
    }

    // AbortController ile resize listener temizleme desteği
    const controller = new AbortController();
    window.addEventListener("resize", resize, { signal: controller.signal });

    init();
    animate();

    // Temizleme fonksiyonunu dışa aç (ileride SPA'ya geçilirse kullanılabilir)
    return () => controller.abort();
}
