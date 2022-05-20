import MyComponent from '../../../../slices/Cover';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Cover'
}


export const _Full = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"full","name":"Full","slice_type":"cover","items":[{"ctaLabel":"innovate mission-critical content","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Outline"},{"ctaLabel":"leverage cross-media bandwidth","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=2000&h=1000&fit=crop"},"tagline":"facilitate value-added action-items","title":[{"type":"heading2","text":"Reintermediate 24/365 e-commerce","spans":[]}],"text":[{"type":"paragraph","text":"Culpa consequat dolor ea est eu tempor excepteur sunt esse duis reprehenderit elit. Pariatur reprehenderit mollit et Lorem.","spans":[]}],"top":false},"id":"_Full"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Full.storyName = 'Full'

export const _Contained = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"contained","name":"Contained","slice_type":"cover","items":[{"ctaLabel":"synergize dynamic communities","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Filled"},{"ctaLabel":"implement intuitive channels","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"extend one-to-one methodologies","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"grow 24/365 e-services","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Outline"},{"ctaLabel":"generate proactive paradigms","ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=2000&h=1000&fit=crop"},"tagline":"engineer efficient paradigms","title":[{"type":"heading2","text":"Unleash mission-critical blockchains","spans":[]}],"text":[{"type":"paragraph","text":"Voluptate ullamco enim qui non magna consectetur voluptate. Labore commodo consectetur commodo ut ut minim ipsum velit reprehenderit pariatur occaecat non occaecat enim eu. Pariatur reprehenderit esse culpa ipsum cupidatat eu.","spans":[]}],"top":false},"id":"_Contained"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Contained.storyName = 'Contained'

export const _FullSecondary = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"fullSecondary","name":"Full / Secondary colors","slice_type":"cover","items":[{"ctaLabel":"seize seamless supply-chains","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"target global systems","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=2000&h=1000&fit=crop"},"tagline":"benchmark next-generation convergence","title":[{"type":"heading2","text":"Exploit magnetic technologies","spans":[]}],"text":[{"type":"paragraph","text":"Pariatur exercitation id enim est et reprehenderit ipsum. Nostrud voluptate dolor veniam.","spans":[]}],"top":true},"id":"_FullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_FullSecondary.storyName = 'Full / Secondary colors'

export const _ContainedSecondary = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"containedSecondary","name":"Contained / Secondary colors","slice_type":"cover","items":[{"ctaLabel":"transition cross-platform initiatives","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Outline"},{"ctaLabel":"visualize end-to-end experiences","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Filled"},{"ctaLabel":"orchestrate holistic infrastructures","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaStyle":"Filled"},{"ctaLabel":"monetize front-end systems","ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaStyle":"Filled"},{"ctaLabel":"embrace best-of-breed schemas","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaStyle":"Outline"}],"primary":{"image":{"dimensions":{"width":2000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=2000&h=1000&fit=crop"},"tagline":"transition world-class e-business","title":[{"type":"heading2","text":"Synergize B2B infomediaries","spans":[]}],"text":[{"type":"paragraph","text":"Lorem enim reprehenderit ea amet cillum velit proident sit ipsum proident velit ex labore sunt cillum. Ad ipsum voluptate ipsum amet deserunt ad sunt aliquip cupidatat ullamco sit nulla. Veniam voluptate consectetur sunt excepteur.","spans":[]}],"top":false},"id":"_ContainedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ContainedSecondary.storyName = 'Contained / Secondary colors'
