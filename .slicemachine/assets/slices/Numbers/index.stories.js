import MyComponent from '../../../../slices/Numbers';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Numbers'
}


export const _Side = () => ({
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
      mock: {"variation":"side","name":"Side","slice_type":"numbers","items":[{"number":225,"label":"benchmark real-time models"},{"number":8973,"label":"productize intuitive infomediaries"},{"number":5976,"label":"drive holistic markets"}],"primary":{"tagline":"e-enable granular partnerships","title":[{"type":"heading2","text":"Enhance vertical e-commerce","spans":[]}],"text":[{"type":"paragraph","text":"Minim dolor eiusmod cillum sint sint velit voluptate ea tempor laborum cillum. Ea do incididunt occaecat eu ad nulla. Duis consequat Lorem nisi nisi.","spans":[]}]},"id":"_Side"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Side.storyName = 'Side'

export const _Center = () => ({
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
      mock: {"variation":"center","name":"Center","slice_type":"numbers","items":[{"number":9734,"label":"synergize bleeding-edge infomediaries"},{"number":804,"label":"extend ubiquitous paradigms"},{"number":4815,"label":"synergize strategic ROI"},{"number":8803,"label":"aggregate strategic portals"}],"primary":{"tagline":"harness killer eyeballs","title":[{"type":"heading2","text":"Harness ubiquitous applications","spans":[]}],"text":[{"type":"paragraph","text":"Eiusmod ipsum amet ex ipsum dolor dolore dolore. Lorem incididunt irure excepteur culpa. Lorem dolore veniam est dolor sunt minim Lorem minim.","spans":[]}]},"id":"_Center"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Center.storyName = 'Center'

export const _SideSecondary = () => ({
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
      mock: {"variation":"sideSecondary","name":"Side / Secondary colors","slice_type":"numbers","items":[{"number":2946,"label":"morph out-of-the-box web services"},{"number":3574,"label":"optimize world-class web services"},{"number":3709,"label":"scale plug-and-play bandwidth"},{"number":6320,"label":"matrix innovative platforms"},{"number":664,"label":"drive sexy markets"}],"primary":{"tagline":"deliver back-end networks","title":[{"type":"heading2","text":"Synthesize intuitive portals","spans":[]}],"text":[{"type":"paragraph","text":"Nulla officia ipsum Lorem dolor anim. Magna ad consectetur cillum esse consectetur ad. Fugiat tempor ex dolor et.","spans":[]}]},"id":"_SideSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_SideSecondary.storyName = 'Side / Secondary colors'

export const _CenterSecondary = () => ({
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
      mock: {"variation":"centerSecondary","name":"Center / Secondary colors","slice_type":"numbers","items":[{"number":904,"label":"synergize innovative convergence"},{"number":4155,"label":"enhance world-class initiatives"}],"primary":{"tagline":"optimize back-end users","title":[{"type":"heading2","text":"Reintermediate real-time technologies","spans":[]}],"text":[{"type":"paragraph","text":"Enim laboris dolore id sint veniam laborum pariatur tempor veniam nulla Lorem aliquip aliquip. Quis incididunt deserunt incididunt laborum aliqua id est ut id laborum. Aliquip incididunt fugiat dolore nostrud pariatur voluptate mollit velit adipisicing amet.","spans":[]}]},"id":"_CenterSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CenterSecondary.storyName = 'Center / Secondary colors'
