import MyComponent from '../../../../slices/ImageAndText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageAndText'
}


export const _Left = () => ({
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"tagline":"leverage bricks-and-clicks e-commerce","title":[{"type":"heading2","text":"Leverage strategic e-business","spans":[]}],"text":[{"type":"paragraph","text":"Quis proident amet dolore laboris veniam in laborum elit elit duis quis nisi ipsum ex.","spans":[]}],"ctaLabel":"empower global functionalities","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"top":false},"id":"_Left"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Left.storyName = 'Left aligned'

export const _Right = () => ({
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
      mock: {"variation":"right","name":"Right aligned","slice_type":"image_and_text","items":[],"primary":{"tagline":"seize strategic schemas","title":[{"type":"heading2","text":"Drive B2C deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Consequat ea minim deserunt officia aliquip tempor tempor aliquip consectetur excepteur anim laboris officia non irure. Ipsum anim minim ut eiusmod in ut eu sit excepteur reprehenderit consectetur ea ad.","spans":[]}],"ctaLabel":"cultivate granular infrastructures","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"top":true},"id":"_Right"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Right.storyName = 'Right aligned'

export const _LeftFull = () => ({
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
      mock: {"variation":"leftFull","name":"Left aligned / Full width","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"tagline":"engage intuitive bandwidth","title":[{"type":"heading2","text":"Facilitate extensible relationships","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit sit excepteur laboris eiusmod.","spans":[]}],"ctaLabel":"e-enable innovative niches","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"top":true},"id":"_LeftFull"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftFull.storyName = 'Left aligned / Full width'

export const _RightFull = () => ({
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
      mock: {"variation":"rightFull","name":"Right aligned / Full width","slice_type":"image_and_text","items":[],"primary":{"tagline":"utilize B2C communities","title":[{"type":"heading2","text":"Harness customized solutions","spans":[]}],"text":[{"type":"paragraph","text":"In officia qui nulla nisi exercitation irure. Tempor esse do velit. Aliquip do do ex aliqua.","spans":[]}],"ctaLabel":"revolutionize wireless technologies","ctaLink":{"link_type":"Web","url":"http://twitter.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/48a00ca6-db07-4a2f-91ed-afe60db0ccca_image-secondary.png?w=1000&h=1000&fit=crop"},"top":true},"id":"_RightFull"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightFull.storyName = 'Right aligned / Full width'

export const _LeftSecondary = () => ({
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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"tagline":"syndicate synergistic functionalities","title":[{"type":"heading2","text":"Reinvent viral platforms","spans":[]}],"text":[{"type":"paragraph","text":"Minim aute aliqua incididunt mollit qui aliqua.","spans":[]}],"ctaLabel":"evolve next-generation models","ctaLink":{"link_type":"Web","url":"http://google.com"},"top":true},"id":"_LeftSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftSecondary.storyName = 'Left aligned / Secondary colors'

export const _RightSecondary = () => ({
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
      mock: {"variation":"rightSecondary","name":"Right aligned / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"tagline":"drive turn-key relationships","title":[{"type":"heading2","text":"Incubate mission-critical ROI","spans":[]}],"text":[{"type":"paragraph","text":"In non esse enim excepteur culpa sunt dolor labore ut adipisicing deserunt. Cupidatat culpa elit adipisicing enim magna eu laboris ea anim eu nulla quis reprehenderit eu eiusmod. Nulla proident aute irure ex irure ipsum voluptate.","spans":[]}],"ctaLabel":"architect enterprise e-markets","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"video":{"link_type":"media","url":"https://source.unsplash.com/daily"},"top":false},"id":"_RightSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightSecondary.storyName = 'Right aligned / Secondary colors'

export const _LeftFullSecondary = () => ({
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
      mock: {"variation":"leftFullSecondary","name":"Left aligned / Full width / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"tagline":"scale seamless e-services","title":[{"type":"heading2","text":"Enable bleeding-edge synergies","spans":[]}],"text":[{"type":"paragraph","text":"Commodo consequat cillum nulla.","spans":[]}],"ctaLabel":"enable dynamic bandwidth","ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"top":false},"id":"_LeftFullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftFullSecondary.storyName = 'Left aligned / Full width / Secondary colors'

export const _RightFullSecondary = () => ({
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
      mock: {"variation":"rightFullSecondary","name":"Right aligned / Full width / Secondary colors","slice_type":"image_and_text","items":[],"primary":{"tagline":"recontextualize clicks-and-mortar ROI","title":[{"type":"heading2","text":"Deliver bleeding-edge models","spans":[]}],"text":[{"type":"paragraph","text":"Amet ex adipisicing nostrud laboris anim irure culpa est nulla aute deserunt culpa ad sit sit.","spans":[]}],"ctaLabel":"deploy one-to-one functionalities","ctaLink":{"link_type":"Web","url":"http://google.com"},"image":{"dimensions":{"width":1000,"height":1000},"alt":"Placeholder image","copyright":null,"url":"https://images.prismic.io/slices-example-nuxt/88018c9e-897f-4a96-b5af-8cad835333f0_image-primary.png?w=1000&h=1000&fit=crop"},"top":false},"id":"_RightFullSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_RightFullSecondary.storyName = 'Right aligned / Full width / Secondary colors'
