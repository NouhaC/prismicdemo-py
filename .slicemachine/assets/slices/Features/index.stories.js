import MyComponent from '../../../../slices/Features';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Features'
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"features","items":[{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Syndicate bricks-and-clicks metrics","spans":[]}],"text":[{"type":"paragraph","text":"Tempor ullamco nulla pariatur nulla esse esse aute aliqua reprehenderit magna Lorem ad in. Est culpa labore sint do aliqua fugiat elit excepteur sint id deserunt laboris anim mollit cillum.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"synergize cutting-edge web-readiness"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Revolutionize leading-edge blockchains","spans":[]}],"text":[{"type":"paragraph","text":"Non laborum laboris ut non ut esse. In aute pariatur in fugiat adipisicing voluptate in sit est Lorem ex dolor amet mollit.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"repurpose cutting-edge metrics"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Harness robust convergence","spans":[]}],"text":[{"type":"paragraph","text":"Enim proident ex dolor dolor fugiat ut.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"syndicate world-class e-markets"}],"primary":{"tagline":"productize next-generation technologies","title":[{"type":"heading2","text":"Architect seamless convergence","spans":[]}],"text":[{"type":"paragraph","text":"Id id mollit ad. Eu id do exercitation minim. Cillum velit laborum consectetur dolor amet id eu eu consectetur mollit pariatur.","spans":[]}]},"id":"_Left"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Left.storyName = 'Left aligned'

export const _Centered = () => ({
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
      mock: {"variation":"centered","name":"Centered","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Unleash granular communities","spans":[]}],"text":[{"type":"paragraph","text":"Ut tempor enim ad do esse mollit dolore anim enim nulla tempor.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"leverage mission-critical content"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Leverage back-end experiences","spans":[]}],"text":[{"type":"paragraph","text":"Duis voluptate excepteur sunt culpa veniam in consectetur tempor nostrud. Elit ad elit adipisicing do consequat anim mollit ex. Laborum ullamco mollit eu consectetur consequat exercitation incididunt amet.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"strategize frictionless synergies"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Engage virtual e-tailers","spans":[]}],"text":[{"type":"paragraph","text":"Qui cillum reprehenderit qui deserunt magna nisi proident dolore qui. Sit ad minim in duis magna anim non voluptate voluptate fugiat proident velit ad ex. Labore sunt aute sit esse sint nostrud officia do ea in.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"reinvent visionary vortals"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Maximize enterprise e-services","spans":[]}],"text":[{"type":"paragraph","text":"Nulla laborum aliquip culpa sunt.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"streamline extensible relationships"}],"primary":{"tagline":"synthesize dot-com vortals","title":[{"type":"heading2","text":"Grow compelling e-tailers","spans":[]}],"text":[{"type":"paragraph","text":"Labore quis minim labore laborum aliqua dolore.","spans":[]}]},"id":"_Centered"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Centered.storyName = 'Centered'

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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Leverage global content","spans":[]}],"text":[{"type":"paragraph","text":"Aliquip dolore tempor cupidatat labore. Sunt quis magna mollit. Aute id nulla nostrud laborum cupidatat aliqua adipisicing amet labore.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"productize B2C platforms"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Target distributed web services","spans":[]}],"text":[{"type":"paragraph","text":"Magna pariatur nostrud reprehenderit.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"unleash dot-com e-tailers"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Embrace killer schemas","spans":[]}],"text":[{"type":"paragraph","text":"Aliqua do excepteur incididunt proident occaecat ipsum ipsum laborum occaecat ullamco adipisicing nisi laboris. Duis ea labore et ut est dolore ullamco ad cillum reprehenderit eu culpa anim.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"benchmark impactful bandwidth"}],"primary":{"tagline":"generate integrated partnerships","title":[{"type":"heading2","text":"Scale innovative methodologies","spans":[]}],"text":[{"type":"paragraph","text":"Eu cillum fugiat non duis.","spans":[]}]},"id":"_LeftSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LeftSecondary.storyName = 'Left aligned / Secondary'

export const _CenteredSecondary = () => ({
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
      mock: {"variation":"centeredSecondary","name":"Center / Secondary","slice_type":"features","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Orchestrate cross-platform e-services","spans":[]}],"text":[{"type":"paragraph","text":"Qui cupidatat exercitation voluptate proident.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"engineer e-business users"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Utilize impactful synergies","spans":[]}],"text":[{"type":"paragraph","text":"Ut veniam proident consectetur velit qui occaecat laborum eu ullamco cupidatat aliqua esse.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"reintermediate value-added applications"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Repurpose seamless schemas","spans":[]}],"text":[{"type":"paragraph","text":"Sunt sunt aliquip aliqua ut mollit eiusmod mollit qui consectetur. Officia irure aute qui nisi deserunt velit Lorem excepteur deserunt id ut ipsum culpa anim pariatur. Commodo incididunt anim qui non sint cillum.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"enable clicks-and-mortar functionalities"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Empower dynamic web-readiness","spans":[]}],"text":[{"type":"paragraph","text":"Consequat veniam voluptate velit voluptate adipisicing labore eu id culpa eu id est. Tempor duis cupidatat excepteur est irure irure incididunt ex laboris tempor veniam exercitation magna sunt. Minim est ex commodo ut mollit.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"envisioneer granular applications"}],"primary":{"tagline":"visualize cutting-edge communities","title":[{"type":"heading2","text":"Maximize holistic markets","spans":[]}],"text":[{"type":"paragraph","text":"Nisi mollit ullamco sit. Dolore duis nulla dolor aliquip consectetur consequat aliqua dolore nostrud deserunt magna cupidatat nisi eiusmod amet. Minim ut elit duis reprehenderit nostrud sint laboris sit ipsum Lorem ea tempor sit anim mollit.","spans":[]}]},"id":"_CenteredSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CenteredSecondary.storyName = 'Center / Secondary'
