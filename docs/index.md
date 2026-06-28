---
layout: home
title: Jackson Lanyon
---

<script setup>
const lotusSrc = '/lotus.svg'
</script>

<div class="home-hero" id="hero">

<div class="hero-lotus">
  <GlitchImage :duration="300" :delay="3000" :variance="2000" :intensity="1.5">
    <img :src="lotusSrc" alt="lotus" class="lotus-hero-img" />
  </GlitchImage>
</div>

<div>
  <h1 class="hero-name">Jackson Lanyon</h1>
  <p class="hero-subtitle">Software engineer - Python, C#, React and creatively coding clean systems that scale</p>
</div>

<p class="hero-intro">Thank you for visiting my website! If you find the time, please feel free to check out my <GlitchLink href="https://sausytime.com" target="_blank" text="Design Portfolio" /> :&gt;</p>

<hr />

<p>
  <TypeWriter :headings="[
    'React and Next.js frontends with a designer\'s perspective',
    'Python automation that saves teams hours every week',
    'C# data pipelines and backend tooling',
    'motion graphics and visual effects for software products',
    'self-hosted infrastructure on Debian Linux',
    'full-stack development with TypeScript and Node.js',
    'CI/CD pipelines with GitHub Actions and systemd',
    'developer tooling that accelerates your workflow',
    'automation-first engineering with a creative edge',
    'creative technology at the intersection of art and code'
  ]" />
</p>

<div class="home-actions">
  <Button href="/projects">View Projects</Button>
  <Button href="/blog/">Read Blog</Button>
</div>

<a href="#about" class="btn-primary btn-scroll">
  <span class="btn-scroll-label">About me</span>
  <br>
  <span class="btn-scroll-arrow">&darr;</span>
</a>

</div>

<div class="about-section" id="about">

<!-- @include: ./about.md -->

</div>

