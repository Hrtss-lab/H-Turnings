/* =========================================================
   AZURE DREAMS — palette & tokens
   ========================================================= */
:root{
  --navy:#081A3A;
  --royal:#1E4ED8;
  --azure:#4F8EF7;
  --sky:#A8D8FF;
  --ice:#F5FAFF;
  --glass:rgba(255,255,255,.10);
  --border:rgba(255,255,255,.18);
  --glow:rgba(79,142,247,.45);

  --font-display:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-body:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

*{ box-sizing:border-box; }

html{ scroll-behavior:smooth; }

body{
  margin:0;
  font-family:var(--font-body);
  color:var(--ice);
  background:var(--navy);
  overflow-x:hidden;
  opacity:0;
  transition:opacity .6s ease;
}
body.page-ready{ opacity:1; }
body.page-leaving{ opacity:0; transition:opacity .45s ease; }

main{ display:block; }

h1,h2{ font-family:var(--font-display); font-weight:700; margin:0; }
.serif{ font-family:var(--font-display); }

p{ margin:0; }

button{ font-family:var(--font-body); }

@media (prefers-reduced-motion: reduce){
  *{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
  html{ scroll-behavior:auto; }
}

/* =========================================================
   LOADER
   ========================================================= */
#loader{
  position:fixed; inset:0; z-index:999;
  background:var(--navy);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:18px;
  transition:opacity .7s ease, visibility .7s ease;
}
#loader.hidden{ opacity:0; visibility:hidden; pointer-events:none; }
.loader-line{
  width:120px; height:1px; background:rgba(255,255,255,.15); position:relative; overflow:hidden;
}
.loader-line::after{
  content:''; position:absolute; left:0; top:0; height:100%; width:0%;
  background:var(--sky);
  animation:loaderFill 1.3s ease forwards;
}
@keyframes loaderFill{ to{ width:100%; } }
.loader-text{
  font-size:11px; letter-spacing:.3em; text-transform:uppercase; color:rgba(255,255,255,.5);
}

/* =========================================================
   SIDE NAV DOTS
   ========================================================= */
.dots{
  position:fixed; right:22px; top:50%; transform:translateY(-50%);
  display:flex; flex-direction:column; gap:14px; z-index:80;
}
.dots a{
  display:block;
  width:6px; height:6px; border-radius:50%;
  background:rgba(255,255,255,.25);
  transition:all .4s ease;
  cursor:pointer;
  text-decoration:none;
}
.dots a.active{
  background:var(--sky);
  box-shadow:0 0 10px var(--glow);
  transform:scale(1.6);
}
.dots a:focus-visible{ outline:2px solid var(--sky); outline-offset:4px; }
@media (max-width:720px){ .dots{ right:12px; } }

/* =========================================================
   CURSOR GLOW
   ========================================================= */
.cursor-glow{
  position:fixed; width:280px; height:280px; border-radius:50%;
  pointer-events:none; z-index:5;
  background:radial-gradient(circle, var(--glow) 0%, transparent 70%);
  transform:translate(-50%,-50%);
  mix-blend-mode:screen;
  opacity:0; transition:opacity .4s ease;
  filter:blur(10px);
}
@media (max-width:900px){ .cursor-glow{ display:none; } }

/* =========================================================
   SCENE LAYOUT
   ========================================================= */
.scene{
  position:relative;
  min-height:100vh;
  width:100%;
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  text-align:center;
  padding:80px 24px;
  overflow:hidden;
  background:
    radial-gradient(circle at 30% 20%, rgba(120,183,255,.18) 0%, transparent 40%),
    radial-gradient(circle at 70% 80%, rgba(30,78,216,.25) 0%, transparent 45%),
    linear-gradient(160deg, #07162F, #0E347A 55%, #1B3F9E);
}
.scene-tall{ min-height:100vh; padding:120px 24px; }
.scene-dark{
  background:
    radial-gradient(circle at 50% 10%, rgba(79,142,247,.15) 0%, transparent 45%),
    linear-gradient(180deg, #050E24, #081A3A 60%, #050D1F);
}

.section-title{ font-size:clamp(28px,4vw,42px); margin-bottom:8px; }
.lede{ max-width:480px; color:rgba(245,250,255,.75); font-weight:300; font-size:16px; line-height:1.6; margin-top:14px; }

/* =========================================================
   AURORA + STARS + ORBS + CLOUDS  (welcome scene atmosphere)
   ========================================================= */
.aurora{
  position:absolute; top:-10%; left:-10%; width:120%; height:60%;
  background:
    linear-gradient(120deg, transparent 10%, rgba(168,216,255,.18) 35%, transparent 55%),
    linear-gradient(100deg, transparent 20%, rgba(79,142,247,.15) 45%, transparent 70%);
  filter:blur(40px);
  animation:auroraDrift 22s ease-in-out infinite alternate;
  pointer-events:none;
}
@keyframes auroraDrift{
  0%{ transform:translateX(-4%) translateY(0) rotate(0deg); opacity:.7; }
  100%{ transform:translateX(4%) translateY(3%) rotate(2deg); opacity:1; }
}

.stars{
  position:absolute; inset:0;
  background-image:
    radial-gradient(1.5px 1.5px at 20% 30%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 75% 15%, #fff, transparent),
    radial-gradient(1px 1px at 50% 60%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 85% 70%, #fff, transparent),
    radial-gradient(1px 1px at 10% 80%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 35% 45%, #fff, transparent),
    radial-gradient(1px 1px at 65% 90%, #fff, transparent),
    radial-gradient(1.5px 1.5px at 92% 40%, #fff, transparent);
  animation:twinkle 4s ease-in-out infinite;
  pointer-events:none;
}
.stars-dim{ opacity:.5; }
@keyframes twinkle{
  0%,100%{ opacity:.5; }
  50%{ opacity:1; }
}

.orb{
  position:absolute; border-radius:50%;
  filter:blur(70px); opacity:.28; pointer-events:none;
}
.orb1{ width:280px; height:280px; background:var(--azure); top:10%; left:8%; animation:orbFloat 30s ease-in-out infinite; }
.orb2{ width:220px; height:220px; background:var(--sky); bottom:8%; right:10%; animation:orbFloat 36s ease-in-out infinite reverse; }
@keyframes orbFloat{
  0%,100%{ transform:translate(0,0); }
  50%{ transform:translate(30px,-40px); }
}

.cloud{
  position:absolute; bottom:6%; width:260px; height:70px; opacity:.35; pointer-events:none;
  background:radial-gradient(ellipse at center, rgba(255,255,255,.5), transparent 70%);
  filter:blur(6px);
  animation:cloudDrift 40s linear infinite;
}
.cloud1{ left:-20%; animation-duration:50s; }
.cloud2{ left:-30%; bottom:14%; animation-duration:65s; animation-delay:-20s; }
@keyframes cloudDrift{
  from{ transform:translateX(0); }
  to{ transform:translateX(140vw); }
}

/* =========================================================
   GLASS CARD
   ========================================================= */
.glass-card{
  position:relative; z-index:10;
  max-width:480px; width:100%;
  padding:56px 40px;
  background:var(--glass);
  border:1px solid var(--border);
  border-radius:28px;
  backdrop-filter:blur(18px);
  -webkit-backdrop-filter:blur(18px);
  box-shadow:0 20px 60px rgba(5,15,40,.45), inset 0 1px 0 rgba(255,255,255,.15);
  display:flex; flex-direction:column; align-items:center;
}
.glass-card .mark{ margin-bottom:18px; opacity:.9; }
.glass-card h1{ font-size:clamp(30px,5vw,46px); line-height:1.15; }

/* fade-in on load, reveal on scroll */
.fade-in{ animation:fadeUp 1.1s ease .3s both; }
.reveal{ opacity:0; transform:translateY(24px); transition:opacity 1s ease, transform 1s ease; }
.reveal.in-view{ opacity:1; transform:translateY(0); }
@keyframes fadeUp{
  from{ opacity:0; transform:translateY(30px); }
  to{ opacity:1; transform:translateY(0); }
}

/* =========================================================
   BUTTONS
   ========================================================= */
.btn{
  margin-top:32px;
  position:relative;
  padding:14px 30px;
  border-radius:999px;
  border:1px solid var(--border);
  background:rgba(255,255,255,.08);
  color:var(--ice);
  font-size:14px; letter-spacing:.04em;
  cursor:pointer;
  display:inline-flex; align-items:center; gap:10px;
  backdrop-filter:blur(8px);
  transition:transform .35s ease, box-shadow .35s ease, background .35s ease;
}
.btn:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 30px var(--glow);
  background:rgba(255,255,255,.14);
}
.btn:hover .arrow{ transform:translateX(4px); }
.btn:focus-visible{ outline:2px solid var(--sky); outline-offset:3px; }
.arrow{
  width:14px; height:14px; position:relative; transition:transform .35s ease;
}
.arrow::before{
  content:'→'; font-size:14px; line-height:1;
}
a.btn{ text-decoration:none; }

/* =========================================================
   WORDLESS ICON BUTTON
   Used everywhere a person needs to know "press this" without
   being told to. A quiet, breathing glow invites the tap;
   no label does the inviting.
   ========================================================= */
.icon-btn{
  margin-top:32px;
  width:64px; height:64px;
  border-radius:50%;
  border:1px solid var(--border);
  background:rgba(255,255,255,.08);
  backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  display:flex; align-items:center; justify-content:center;
  cursor:pointer;
  text-decoration:none;
  transition:transform .35s ease, box-shadow .35s ease, opacity .5s ease, background .35s ease;
  animation:iconPulse 2.6s ease-in-out infinite;
}
.icon-btn:hover{
  transform:translateY(-3px) scale(1.06);
  box-shadow:0 10px 30px var(--glow);
  background:rgba(255,255,255,.14);
}
.icon-btn:focus-visible{ outline:2px solid var(--sky); outline-offset:4px; }
.icon-btn svg{ display:block; }

/* fades in after an interaction (e.g. once the gift is opened) */
.icon-btn.hidden-until-ready{ opacity:0; pointer-events:none; transform:translateY(8px); animation:none; }
.icon-btn.hidden-until-ready.shown{
  opacity:1; pointer-events:auto; transform:translateY(0);
  animation:iconPulse 2.6s ease-in-out infinite;
}

/* once pressed at least once, dims to show it's been used — but stays pressable */
.icon-btn.used{ opacity:.45; }
.icon-btn.used:hover{ opacity:.75; }

@keyframes iconPulse{
  0%,100%{ box-shadow:0 0 0 0 rgba(79,142,247,.35); }
  50%{ box-shadow:0 0 0 12px rgba(79,142,247,0); }
}


/* =========================================================
   GIFT
   ========================================================= */
.gift-box{
  position:relative; z-index:10; margin-top:30px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
.gift-glow{
  position:absolute; width:220px; height:220px; border-radius:50%;
  background:radial-gradient(circle, var(--glow) 0%, transparent 70%);
  opacity:.5; filter:blur(20px);
  transition:opacity .4s ease, transform .4s ease;
  animation:giftInvite 2.8s ease-in-out infinite;
}
.gift-box:hover .gift-glow{ opacity:.9; transform:scale(1.1); animation-play-state:paused; }
.gift-box.open .gift-glow{ animation:none; }
@keyframes giftInvite{
  0%,100%{ opacity:.4; transform:scale(1); }
  50%{ opacity:.7; transform:scale(1.06); }
}

.gift-svg{ position:relative; z-index:2; }
.gift-lid{ transform-origin:100px 85px; transition:transform .9s cubic-bezier(.2,.8,.2,1); }
.bow{ transition:transform .4s ease; transform-origin:100px 50px; }
.gift-box:hover .bow{ transform:rotate(4deg); }
.gift-box.open .gift-lid{ transform:translateY(-60px) rotate(-18deg); }

.gift-burst{
  position:absolute; inset:0; pointer-events:none; z-index:3;
  opacity:0; background:radial-gradient(circle, rgba(255,255,255,.9), transparent 60%);
  transition:opacity .5s ease;
}
.gift-box.open .gift-burst{ animation:giftFlash 1s ease forwards; }
@keyframes giftFlash{
  0%{ opacity:0; }
  30%{ opacity:.9; }
  100%{ opacity:0; }
}

.gift-reveal-text{
  margin-top:30px; max-width:420px; color:var(--sky); font-family:var(--font-display);
  font-size:20px; font-style:italic;
  opacity:0; transform:translateY(10px); transition:opacity .8s ease, transform .8s ease;
}
.gift-reveal-text.shown{ opacity:1; transform:translateY(0); }

.gift-star{
  position:absolute; width:4px; height:4px; background:var(--ice); border-radius:50%;
  box-shadow:0 0 8px 2px var(--glow);
  animation:giftStarRise 1.4s ease-out forwards;
  pointer-events:none; z-index:4;
}
@keyframes giftStarRise{
  0%{ transform:translateY(0) scale(1); opacity:1; }
  100%{ transform:translateY(-140px) scale(0); opacity:0; }
}

/* =========================================================
   FINAL SCENE — cake + hearts
   ========================================================= */
.hearts{ position:absolute; inset:0; overflow:hidden; pointer-events:none; }
.heart-particle{
  position:absolute; bottom:-10%; color:var(--sky); opacity:.5;
  animation:heartRise linear infinite;
  font-size:16px;
}
@keyframes heartRise{
  0%{ transform:translateY(0) translateX(0) rotate(0deg); opacity:0; }
  10%{ opacity:.6; }
  90%{ opacity:.4; }
  100%{ transform:translateY(-120vh) translateX(20px) rotate(20deg); opacity:0; }
}

.cake{ margin-bottom:20px; }
.cake svg{ filter:drop-shadow(0 10px 30px rgba(79,142,247,.35)); }
.flame{
  animation:flicker 1.4s ease-in-out infinite alternate;
  transform-origin:center bottom;
}
@keyframes flicker{
  0%{ transform:scaleY(1) scaleX(1); opacity:1; }
  50%{ transform:scaleY(1.15) scaleX(.9); opacity:.85; }
  100%{ transform:scaleY(.95) scaleX(1.05); opacity:1; }
}

/* =========================================================
   ENDING
   ========================================================= */
.closing-line{
  font-size:clamp(22px,3.4vw,32px);
  font-style:italic;
  max-width:600px;
  color:var(--ice);
  z-index:10;
}
.made-with{
  margin-top:26px; font-size:13px; letter-spacing:.15em; text-transform:uppercase;
  color:rgba(245,250,255,.5); z-index:10;
}
.heart-glyph{ color:var(--sky); }

.shooting-star{
  position:absolute; top:20%; left:-5%; width:2px; height:2px;
  background:var(--ice); border-radius:50%;
  box-shadow:0 0 6px 2px rgba(255,255,255,.8);
  opacity:0;
}
.shooting-star.fire{
  animation:shoot 2.2s ease-in forwards;
}
.shooting-star::before{
  content:''; position:absolute; top:0; left:0; width:80px; height:1px;
  background:linear-gradient(90deg, rgba(255,255,255,.9), transparent);
  transform:translateX(-80px) rotate(0deg);
}
@keyframes shoot{
  0%{ transform:translate(0,0); opacity:0; }
  10%{ opacity:1; }
  90%{ opacity:1; }
  100%{ transform:translate(120vw, 60vh); opacity:0; }
}

/* =========================================================
   CONFETTI / BALLOONS (JS-driven elements, styled here)
   ========================================================= */
.balloon{
  position:fixed; bottom:-120px; width:46px; height:58px; border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;
  z-index:50; pointer-events:none;
  animation:balloonRise linear forwards;
}
.balloon::after{
  content:''; position:absolute; bottom:-16px; left:50%; width:1px; height:16px;
  background:rgba(255,255,255,.4); transform:translateX(-50%);
}
@keyframes balloonRise{
  0%{ transform:translateY(0) translateX(0) rotate(0deg); opacity:0; }
  8%{ opacity:.95; }
  100%{ transform:translateY(-115vh) translateX(var(--drift, 40px)) rotate(var(--rot, 8deg)); opacity:0; }
}
