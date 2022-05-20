import MyComponent from '../../../../slices/Logos';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Logos'
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
      mock: {"variation":"stacked","name":"Stacked","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"tagline":"reintermediate vertical metrics","title":[{"type":"heading2","text":"Grow one-to-one methodologies","spans":[]}]},"id":"_Stacked"}
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
      mock: {"variation":"carousel","name":"Carousel","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}}],"primary":{"tagline":"reintermediate global functionalities","title":[{"type":"heading2","text":"Exploit world-class e-commerce","spans":[]}]},"id":"_Carousel"}
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
      mock: {"variation":"stackedSecondary","name":"Stacked / Secondary colors","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://twitter.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"http://google.com"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"tagline":"integrate B2C web services","title":[{"type":"heading2","text":"Streamline world-class blockchains","spans":[]}]},"id":"_StackedSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_StackedSecondary.storyName = 'Stacked / Secondary colors'

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
      mock: {"variation":"carouselSecondary","name":"Carousel / Secondary colors","slice_type":"logos","items":[{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://slicemachine.dev"}},{"logo":{"dimensions":{"width":320,"height":120},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=320&h=120&fit=crop"},"link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"tagline":"productize 24/365 e-services","title":[{"type":"heading2","text":"Brand open-source infomediaries","spans":[]}]},"id":"_CarouselSecondary"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_CarouselSecondary.storyName = 'Carousel / Secondary colors'
