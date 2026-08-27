---
title: Contact | JDLanyon
description: Get in touch with me via Email, GitHub, LinkedIn and more.
---

<script setup>
import { ref } from 'vue'

const email = 'jlany9@hotmail.com'
const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch { /* clipboard unavailable in this context */ }
}
</script>

# Contact

I'm always open to talk about software engineering, automation, creative coding, a potential collaboration or you just want to chat!

<div class="contact-methods">

I check my **Email** daily, this is the best platform to contact me on.

- <a href="mailto:jlany9@hotmail.com">jlany9@hotmail.com</a>
<Button @click="copyEmail">{{ copied ? 'Copied!' : 'Copy email' }}</Button>
<Button :href="`mailto:${email}`">Email me</Button>
</div>

## Direct links

- <GlitchLink href="https://github.com/JDLanyon" text="GitHub" />
- <GlitchLink href="https://linkedin.com/in/jdlanyon" text="LinkedIn" />
- <GlitchLink href="https://youtube.com/@sausytime" text="YouTube" />
- <GlitchLink href="https://sausytime.com" text="Design Portfolio" />

<!-- #TODO Contact Form -->