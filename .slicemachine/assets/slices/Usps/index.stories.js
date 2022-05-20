import MyComponent from '../../../../slices/Usps';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Usps'
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
      mock: {"variation":"left","name":"Left aligned","slice_type":"usps","items":[{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Engage sexy architectures","spans":[]}],"text":[{"type":"paragraph","text":"Consequat adipisicing minim consectetur excepteur amet cupidatat sit mollit fugiat velit ut consequat. Occaecat dolor nostrud quis non consequat ipsum nostrud eu nulla.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://twitter.com"},"ctaLabel":"reintermediate viral interfaces"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Morph customized e-services","spans":[]}],"text":[{"type":"paragraph","text":"Amet culpa deserunt occaecat consequat ad elit. Occaecat deserunt dolor minim mollit commodo quis qui ipsum non mollit magna deserunt exercitation.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"incentivize one-to-one e-commerce"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Orchestrate seamless niches","spans":[]}],"text":[{"type":"paragraph","text":"Et non quis fugiat officia et reprehenderit irure incididunt. Laborum ullamco ad minim id laborum magna eiusmod qui laboris eu. Ullamco aute ut magna culpa enim.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"grow innovative partnerships"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Syndicate next-generation deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Sit enim labore deserunt dolore ipsum non. Et Lorem reprehenderit enim. Consectetur dolore cupidatat ullamco sit magna est ullamco.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"mesh cross-platform supply-chains"},{"image":{"dimensions":{"width":128,"height":128},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=128&h=128&fit=crop"},"title":[{"type":"heading3","text":"Recontextualize transparent portals","spans":[]}],"text":[{"type":"paragraph","text":"Deserunt elit eiusmod adipisicing ex quis mollit minim aliqua aliquip. Cupidatat cillum ipsum cillum laboris ea occaecat aliqua duis eiusmod aliqua dolor magna. Reprehenderit ex aliquip amet eiusmod velit nisi officia in amet consectetur sint nostrud.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"matrix efficient networks"}],"primary":{"tagline":"optimize transparent architectures","title":[{"type":"heading2","text":"Cultivate granular applications","spans":[]}],"text":[{"type":"paragraph","text":"Aliqua commodo irure irure anim mollit eiusmod quis magna laboris. Elit aliquip et in non magna nulla duis officia eu. Nostrud cupidatat velit qui esse laboris nostrud ipsum duis exercitation non sint et.","spans":[]}]},"id":"_Left"}
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
      mock: {"variation":"centered","name":"Centered","slice_type":"usps","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Synthesize enterprise ROI","spans":[]}],"text":[{"type":"paragraph","text":"Deserunt nostrud in consectetur magna amet non exercitation aute enim consequat id et ex nostrud est. Incididunt eu nisi fugiat duis culpa elit adipisicing.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"deliver user-centric mindshare"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Aggregate innovative applications","spans":[]}],"text":[{"type":"paragraph","text":"In non aliquip fugiat officia nostrud laboris laboris amet occaecat elit anim non do pariatur deserunt. Non mollit velit proident amet labore exercitation adipisicing cillum pariatur.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"unleash open-source methodologies"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Disintermediate front-end eyeballs","spans":[]}],"text":[{"type":"paragraph","text":"Tempor ut sit aute commodo Lorem veniam non mollit enim sint enim. Duis elit aute nulla ex fugiat amet do pariatur adipisicing ad. Proident in deserunt sunt magna culpa qui laboris sunt cillum.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"disintermediate global eyeballs"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Reintermediate collaborative architectures","spans":[]}],"text":[{"type":"paragraph","text":"Sunt culpa mollit ex quis dolore in esse dolor dolor et anim occaecat duis pariatur cupidatat. Cillum sint sit excepteur sunt velit elit culpa magna sit commodo nostrud. Nulla consequat minim ea reprehenderit quis labore.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"morph value-added infrastructures"}],"primary":{"tagline":"incentivize frictionless markets","title":[{"type":"heading2","text":"Syndicate best-of-breed blockchains","spans":[]}],"text":[{"type":"paragraph","text":"Et fugiat est aute eiusmod irure excepteur sint et ut eiusmod aliquip qui deserunt sit elit.","spans":[]}]},"id":"_Centered"}
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
      mock: {"variation":"leftSecondary","name":"Left aligned / Secondary","slice_type":"usps","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Engage granular infomediaries","spans":[]}],"text":[{"type":"paragraph","text":"Consectetur aliqua est incididunt. Laborum et minim ipsum in occaecat aute ex proident cupidatat.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"revolutionize granular eyeballs"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Benchmark vertical bandwidth","spans":[]}],"text":[{"type":"paragraph","text":"Amet occaecat non cillum cillum ut cillum adipisicing irure ipsum cupidatat sint fugiat eiusmod commodo. Proident occaecat eu elit tempor et nisi laborum adipisicing cillum.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"cultivate scalable e-tailers"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Deploy enterprise experiences","spans":[]}],"text":[{"type":"paragraph","text":"Consequat Lorem excepteur laborum minim esse commodo qui esse. Et ullamco duis nulla enim cupidatat laborum exercitation eiusmod elit occaecat. Minim reprehenderit veniam veniam veniam.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://prismic.io"},"ctaLabel":"unleash efficient networks"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Utilize end-to-end paradigms","spans":[]}],"text":[{"type":"paragraph","text":"Qui ipsum irure aute irure deserunt amet ut dolore culpa laboris est incididunt.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"aggregate visionary convergence"}],"primary":{"tagline":"deliver bricks-and-clicks markets","title":[{"type":"heading2","text":"Productize sticky deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Lorem nostrud qui dolor adipisicing occaecat commodo id nulla reprehenderit quis minim magna nisi aliquip. Est aliqua labore amet elit in pariatur ex.","spans":[]}]},"id":"_LeftSecondary"}
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
      mock: {"variation":"centeredSecondary","name":"Center / Secondary","slice_type":"usps","items":[{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Maximize e-business e-markets","spans":[]}],"text":[{"type":"paragraph","text":"Enim occaecat labore culpa eu laboris laboris aliquip eiusmod tempor labore pariatur labore commodo velit commodo. Tempor adipisicing culpa incididunt sit in ad est laborum do ex nulla.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"streamline scalable bandwidth"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Streamline vertical networks","spans":[]}],"text":[{"type":"paragraph","text":"Ex laboris dolore esse deserunt. Fugiat quis pariatur magna ea sunt elit laboris velit deserunt.","spans":[]}],"ctaLink":{"link_type":"Web","url":"https://slicemachine.dev"},"ctaLabel":"embrace user-centric paradigms"},{"image":{"dimensions":{"width":300,"height":300},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=300&h=300&fit=crop"},"title":[{"type":"heading3","text":"Engage synergistic deliverables","spans":[]}],"text":[{"type":"paragraph","text":"Officia incididunt aliqua sint duis eiusmod mollit aliquip laboris irure velit non dolore aliquip.","spans":[]}],"ctaLink":{"link_type":"Web","url":"http://google.com"},"ctaLabel":"exploit user-centric channels"}],"primary":{"tagline":"maximize cross-media experiences","title":[{"type":"heading2","text":"Seize efficient solutions","spans":[]}],"text":[{"type":"paragraph","text":"Deserunt sit do eu amet ipsum culpa ea labore tempor aliqua consequat. Consectetur sit minim officia consequat in dolore mollit sunt. Veniam nisi amet id.","spans":[]}]},"id":"_CenteredSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CenteredSecondary.storyName = 'Center / Secondary'
