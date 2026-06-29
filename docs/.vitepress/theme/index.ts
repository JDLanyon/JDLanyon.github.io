import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Custom layout wrapper - adds BackToTop button before footer
import CustomLayout from './Layout.vue'

import GlitchText from './components/GlitchText.vue'
import GlitchImage from './components/GlitchImage.vue'
import GlitchLink from './components/GlitchLink.vue'
import TypeWriter from './components/TypeWriter.vue'
import Button from './components/Button.vue'
import Blog from './components/Blog.vue'
import BlogCard from './components/BlogCard.vue'
import Card from './components/Card.vue'
import ProjectFullPage from './components/ProjectFullPage.vue'
import ProjectCard from './components/ProjectCard.vue'
import ProjectDetailModal from './components/ProjectDetailModal.vue'
import YouTubeEmbeds from './components/YouTubeEmbeds.vue'

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,

  enhanceApp({ app }) {
    app.component('GlitchText', GlitchText)
    app.component('GlitchImage', GlitchImage)
    app.component('GlitchLink', GlitchLink)
    app.component('Button', Button)
    app.component('TypeWriter', TypeWriter)
    app.component('Blog', Blog)
    app.component('BlogCard', BlogCard)
    app.component('Card', Card)
    app.component('ProjectFullPage', ProjectFullPage)
    app.component('ProjectCard', ProjectCard)
    app.component('ProjectDetailModal', ProjectDetailModal)
    app.component('YouTubeEmbeds', YouTubeEmbeds)
  },
}
