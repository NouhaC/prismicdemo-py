import MyComponent from '../../../../slices/Testimonials';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Testimonials'
}


export const _Stacked = () => ({
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
      mock: {"variation":"stacked","name":"Stacked","slice_type":"testimonials","items":[{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Quis dolore deserunt aliquip minim ullamco fugiat. Esse ex voluptate duis aute dolore id voluptate in ea duis aute elit dolore.","spans":[]}],"author":"maximize world-class systems","title":"target extensible niches"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Culpa exercitation qui culpa ex tempor elit.","spans":[]}],"author":"unleash next-generation e-services","title":"strategize open-source deliverables"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Dolore culpa aliquip consequat.","spans":[]}],"author":"whiteboard enterprise markets","title":"embrace web-enabled networks"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Anim nulla commodo ipsum incididunt. Ipsum consectetur pariatur fugiat incididunt voluptate deserunt sit anim ullamco minim incididunt in reprehenderit velit amet. Elit incididunt ipsum quis pariatur culpa pariatur deserunt veniam culpa amet laboris.","spans":[]}],"author":"monetize cross-platform experiences","title":"aggregate clicks-and-mortar blockchains"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Elit in non reprehenderit enim incididunt incididunt cillum Lorem cupidatat. Ex aliquip ipsum laboris id magna nulla laborum nulla ullamco.","spans":[]}],"author":"strategize customized vortals","title":"monetize intuitive initiatives"}],"primary":{"tagline":"scale extensible eyeballs","title":[{"type":"heading2","text":"Mesh one-to-one bandwidth","spans":[]}],"text":[{"type":"paragraph","text":"Pariatur dolor sunt labore amet adipisicing quis reprehenderit do commodo pariatur.","spans":[]}]},"id":"_Stacked"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Stacked.storyName = 'Stacked'

export const _Carousel = () => ({
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
      mock: {"variation":"carousel","name":"Carousel","slice_type":"testimonials","items":[{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Culpa minim ut sint duis Lorem aliqua sit aute ut est sint consectetur anim commodo adipisicing. In aliqua nulla et occaecat irure do.","spans":[]}],"author":"implement back-end relationships","title":"scale visionary action-items"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Aute dolore eiusmod quis. In aute eiusmod sit officia et anim.","spans":[]}],"author":"whiteboard customized schemas","title":"generate leading-edge infrastructures"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Aliqua officia sit pariatur enim quis ut laboris do cillum voluptate cupidatat sint. Officia excepteur exercitation proident fugiat incididunt irure ut consequat anim excepteur sunt.","spans":[]}],"author":"synthesize customized convergence","title":"maximize vertical channels"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Pariatur magna in amet veniam deserunt. Do labore incididunt reprehenderit anim. Laboris consectetur officia est ullamco excepteur dolor excepteur eiusmod eu.","spans":[]}],"author":"orchestrate bleeding-edge models","title":"visualize clicks-and-mortar vortals"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Ipsum irure duis ex pariatur ullamco mollit ea. Occaecat Lorem ex pariatur sunt exercitation consectetur. Cillum ut nulla deserunt sunt cillum pariatur officia in occaecat duis aute sint.","spans":[]}],"author":"recontextualize rich partnerships","title":"implement end-to-end interfaces"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Nisi sint nulla nisi sunt pariatur deserunt sunt aute tempor reprehenderit sint officia amet ex ea.","spans":[]}],"author":"syndicate extensible eyeballs","title":"grow web-enabled schemas"}],"primary":{"tagline":"generate visionary web services","title":[{"type":"heading2","text":"Maximize user-centric niches","spans":[]}],"text":[{"type":"paragraph","text":"Enim sunt consectetur cillum amet anim. Officia exercitation proident consequat excepteur reprehenderit sunt commodo mollit laborum. Id elit elit Lorem laborum quis dolor voluptate magna quis eu eiusmod irure laboris velit est.","spans":[]}]},"id":"_Carousel"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Carousel.storyName = 'Carousel'

export const _StackedSecondary = () => ({
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
      mock: {"variation":"stackedSecondary","name":"Stacked / Secondary","slice_type":"testimonials","items":[{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Magna ad sint commodo anim elit adipisicing id labore nostrud non eu dolor laboris fugiat. Laborum adipisicing sint sunt minim do ea fugiat ex excepteur incididunt. Lorem dolor enim deserunt quis ad voluptate anim occaecat ea Lorem nisi minim eiusmod.","spans":[]}],"author":"cultivate value-added infomediaries","title":"harness dot-com applications"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Aliquip reprehenderit consectetur non id occaecat laboris deserunt officia ullamco laborum ea dolore nostrud.","spans":[]}],"author":"redefine turn-key infomediaries","title":"transition collaborative interfaces"}],"primary":{"tagline":"transform innovative functionalities","title":[{"type":"heading2","text":"Empower e-business partnerships","spans":[]}],"text":[{"type":"paragraph","text":"Ea ullamco qui non exercitation laborum dolor tempor eiusmod ullamco consectetur nisi.","spans":[]}]},"id":"_StackedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StackedSecondary.storyName = 'Stacked / Secondary'

export const _CarouselSecondary = () => ({
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
      mock: {"variation":"carouselSecondary","name":"Carousel / Secondary","slice_type":"testimonials","items":[{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Duis ea aute exercitation esse ullamco voluptate et cillum consequat quis. Voluptate ullamco in et.","spans":[]}],"author":"streamline compelling e-commerce","title":"exploit leading-edge e-services"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Voluptate consequat anim commodo Lorem culpa ea.","spans":[]}],"author":"deploy clicks-and-mortar ROI","title":"enhance scalable partnerships"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Sit id nulla eiusmod laboris anim officia adipisicing ut excepteur Lorem laborum anim. Veniam sint consectetur aliquip velit exercitation in do cupidatat Lorem culpa.","spans":[]}],"author":"monetize ubiquitous systems","title":"integrate B2C portals"},{"image":{"dimensions":{"width":512,"height":512},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=512&h=512&fit=crop"},"quote":[{"type":"paragraph","text":"Consequat est dolor sit non id ex ut veniam nisi magna commodo qui enim esse laboris. Do culpa excepteur ipsum incididunt.","spans":[]}],"author":"brand end-to-end solutions","title":"monetize revolutionary niches"}],"primary":{"tagline":"expedite innovative web-readiness","title":[{"type":"heading2","text":"Mesh value-added vortals","spans":[]}],"text":[{"type":"paragraph","text":"Tempor do elit consequat aliquip labore quis deserunt. Excepteur excepteur non officia adipisicing.","spans":[]}]},"id":"_CarouselSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CarouselSecondary.storyName = 'Carousel / Secondary'
