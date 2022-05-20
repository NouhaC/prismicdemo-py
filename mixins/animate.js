export default {
  mounted() {
    this.animateSlice()
  },
  methods: {
    // Counter for the numbers slice
    createCounterEffect() {
      this.$gsap.registerEffect({
        name: 'counter',
        extendTimeline: true,
        defaults: {
          end: 0,
          duration: 0.5,
          ease: 'linear',
          increment: 1,
        },
        effect: (targets, config) => {
          const tl = this.$gsap.timeline()
          const num = targets[0].innerText.replace(/,/g, '')
          targets[0].innerText = num

          tl.to(
            targets,
            {
              duration: config.duration,
              innerText: config.end,
              modifiers: {
                innerText: (innerText) => {
                  return this.$gsap.utils
                    .snap(config.increment, innerText)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                },
              },
              ease: config.ease,
            },
            0
          )

          return tl
        },
      })
    },
    // Slice animation method used on all slices
    animateSlice() {
      const slice = this.$refs.slice

      const animationParts = slice.querySelectorAll('.animate-slice-part')

      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: slice,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
      })

      animationParts.forEach((animation) => {
        let y = 0
        let x = 0

        if (animation.dataset.from) {
          x = animation.dataset.from === 'left' ? 100 : -100
        } else {
          y = 100
        }

        tl.from(animation, {
          autoAlpha: 0,
          y,
          x,
          ease: 'Power1.easeInOut',
        })
      })

      if (this.slice.slice_type === 'numbers') {
        this.createCounterEffect()

        const animationParts = slice.querySelectorAll('.animate-slice-number')

        animationParts.forEach((number) => {
          const tl = this.$gsap.timeline({
            scrollTrigger: {
              trigger: number,
              start: 'top 90%',
              end: 'top 40%',
              once: true,
            },
          })

          const target = number.dataset.end

          tl.counter(
            number.querySelector('.number-value'),
            {
              end: target,
              increment: 1,
            },
            '-=0.25'
          )

          tl.to(number.querySelector('.number-symbol'), {
            autoAlpha: 1,
            duration: 0.25,
          })

          tl.to(
            number.querySelector('.number-label'),
            {
              autoAlpha: 1,
              duration: 0.25,
            },
            '-=0.25'
          )
        })
      }
    },
  },
  // Destroy scrolltriggers on component destroy
  beforeDestroy() {
    const triggers = this.$ScrollTrigger.getAll()

    triggers.forEach((trigger) => {
      trigger.kill()
    })
  },
}
