# Wireframe-styled Slices, built with Prismic and Nuxt.js.

This example showcases [Prismic’s Slices](https://prismic.io/docs/core-concepts/slices) feature using [Nuxt.js](https://nuxtjs.org/) as a frontend framework.

It gives a good overview of how you’d configure Slices in your code.

You’ll also be able to preview the publishing experience you’d give to your content team.

## Demo

<span style="font-size:20px;">[slices-example-nuxt.vercel.app](slices-example-nuxt.vercel.app)</span>

## How to use

1. Click the green "Use this template" button in the top right of this page.
2. Give your new Github repository a name.
3. Clone your repository locally
4. Run `npm install` in the root folder to install all the dependencies.
5. Run `npm run dev`, then go to `http://localhost:3000` to get a local copy of the [example page](https://slices-example-nuxt.vercel.app/) up and running

### Definition

#### **What is a Slice?**

Slices are website sections that you’d build as **React or Vue components**. Once each component is ready, you can ship it to a website builder (Prismic). There it **becomes a section your content team can use to compose website pages.**
Learn more about [Slices](https://prismic.io/docs/core-concepts/slices).

This example project is built with 7 Slices:

##### Cover

![Cover Slice](https://images.prismic.io/slices-example-nuxt/a0ff6e9b-f3de-419b-bbc6-ce54d5d53b82_b3a33173-afd0-4fa7-b2d5-7742861e8616_cover.avif?auto=compress,format)

##### Features

![Features Slice](https://images.prismic.io/slices-example-nuxt/c41dd4f1-4b13-4322-a835-be7819b3ae5e_e89bfabe-1a85-456c-9bfb-bbc2ed0ecd7f_usps.avif?auto=compress,format)

##### ImageAndText

![ImageAndText Slice](https://images.prismic.io/slices-example-nuxt/4876bde7-a417-40b1-b360-9d621939546d_689c0344-714e-4603-963b-944626ed4518_media.avif?auto=compress,format)

##### Logos

![Logos Slice](https://images.prismic.io/slices-example-nuxt/dd353a0d-5478-4eec-a259-eb3b202af2ad_991ca9a7-0dca-4fbe-91a1-65008a4548c4_logos.avif?auto=compress,format)

##### Numbers

![Numbers Slice](https://images.prismic.io/slices-example-nuxt/db97a361-62b6-432a-a6a5-86d28f10f20a_2b5f56a1-b6ee-45c4-976d-bb8d952df44a_numbers.avif?auto=compress,format)

##### Teasers

![Teasers Slice](https://images.prismic.io/slices-example-nuxt/19fb4984-6e30-4394-b85d-f6c4b4bcbd6b_98b16189-1653-48c7-96ab-db38ed4d6856_teasers.avif?auto=compress,format)

##### Testimonials

![Testimonials Slice](https://images.prismic.io/slices-example-nuxt/b0adac56-782c-42f7-a465-33784c4b8017_6028da84-8414-4951-851f-022ffb129b18_testimonials.avif?auto=compress,format)

### Configuration

#### Part 1: Explore the /slices folder

Let’s start having a closer look at the 7 Slices provided in this example: Cover, Features, ImageAndText, Logos, Numbers, Teasers, Testimonials.

In your IDE of choice, locate the /slices folder at the root of your project. Opening this /slices folder, you’ll find 7 sub-folders, one per Slice.

Each folder contains 2 files, that together determine everything about a Slice:

- `index.js`: The Vue.js component code of that Slice.
- `model.json`: The JSON that defined the editable fields in that Slice. **These fields will be editable by content creators in the Prismic Website Builder.**

On the demo website you can see each of these 7 Slices in action: [`http://localhost:3000`](http://localhost:3000)

![Menu](https://images.prismic.io/slices-example-nuxt/fb2e83a7-d42a-4f08-8dff-f587791337ac_menu.png?auto=compress,format)

Each page of the menu features one of the Slices made available in this example project.

Let’s look in detail at the Cover Slice as an example.

![Cover Slice](https://images.prismic.io/slices-example-nuxt/a0ff6e9b-f3de-419b-bbc6-ce54d5d53b82_b3a33173-afd0-4fa7-b2d5-7742861e8616_cover.avif?auto=compress,format)

If we want to **make this Slice available in a website builder**, making it **a section your content team can use to compose website pages**. We need to define what are the elements of this Cover Slice that should be editable, customisable when being used in a website page.

Here are the ones we’ve defined for this Slice:

![Cover Slice explained](https://images.prismic.io/slices-example-nuxt/fe1fec94-0dc7-44ee-bd65-317178830cb0_cover-expl.png?auto=compress,format)

- A background image
- A “Tagline”
- A “Title”
- A checkbox for content teams to define if this Slice is used as a Hero. In that case, we want to have the title as an `<h1>,` otherwise it will be an `<h2>`. This field isn’t visible in the diagram above, but it allows to controls the title tag.
- A text subtitle
- A Button, for which these elements are editable:
  - Button label
  - Button link
  - Button style (filled style or outlined style)
  _Note: We want to give the ability to have multiple buttons in this section, so fields related to Buttons should be defined as repeatable_

This list of editable fields is defined in JSON format under the `model.json` file you’ll find under /slices/Cover folder.

#### Part 2: Start playing with Slices

Going back to our /slices folder in our Nuxt.js app, to summarize what we know so far: we have a subfolder for each of our 7 Slices (Cover, Features, ImageAndText, Logos, Numbers, Teasers, Testimonials). Each Slice’s folder contains:

- **`index.js`:** The Vue.js component code of that Slice.
- **`model.json`:** The JSON that defined the editable fields in that Slice. **These fields will be editable by content creators, when the Slice is used in the Prismic Website Builder.**

Let’s now see how you can make changes safely to the **`model.json`**file, so you can define the elements of each Slice that will be editable by content teams in the Website Builder you’ll hand-off to them.

Open a second terminal and run `npm run slicemachine` to see how the Slices editable fields are configured.

_Note: For more info about Slice Machine and what the `slicemachine` command does, refer to [this article.](https://prismic.io/docs/core-concepts/slice-machine)_

Go to [`http://localhost:9999`](http://localhost:9999)

Let’s look in the **Slices** tab. This tab allows you to create new Slices and define the fields that should be editable in each Slice.

![Slices tab](https://images.prismic.io/slices-example-nuxt/1cc76c2f-0c33-4f9d-8195-add3f11c8035_Slices-tab.png?auto=compress,format)

Still in Slice Machine, on [`http://localhost:9999`](http://localhost:9999/slices/Cover/full), under the **Slices** tab, select the Cover Slice.

You’ll find a configuration of editable fields for the Cover Slice that correspond to the set of editable fields we listed above:

- A background image
- A “Tagline”
- A “Title”
- A checkbox for content teams to define if this Slice is used as a Hero. In that case, we want to have the title as an `<h1>,` otherwise it will be an `<h2>`. This field isn’t visible in the diagram above, but it allows to controls the title tag.
- A text subtitle
- A Button, for which these elements are editable:
  - Button label
  - Button link
  - Button style (filled style or outlined style)
  _Note: We want to give the ability to have multiple buttons in this section, so fields related to Buttons were defined as repeatable_

![Repeatable](https://images.prismic.io/slices-example-nuxt/4f7027f7-33f7-4225-9760-7c2081395c40_repeatable.png?auto=compress,format)

This configuration is saved in the project code at `/slices/Cover/model.json` as a JSON file.

#### Part 3: Show Code snippets

Still on the Cover Slice page, select the “**Show code snippets**” option.

![Non repeatable zone](https://images.prismic.io/slices-example-nuxt/a23abc1d-f6bd-4d0a-8ea1-d53b62976801_non-repeatable-zone.png?auto=compress,format)

Suggested code snippets based on the project’s framework (here Vue.js/Nuxt.js) appear for each of the editable fields. These snippets are helpful tips for you on how to insert Prismic content in your Vue component.

Indeed, if you go to the Cover Slice component in the Nuxt project, in `/slices/Cover/index.js`, you’ll find these code snippets in the `<template>` of the Cover component.

See the extract of the `/slices/Cover/index.js` file below:

```jsx
<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-12 bg-background">
      <div class="container relative z-20">
        <div class="relative text-center">
          <div
            class="
              animate-slice-part
              relative
              z-10
              flex flex-col
              justify-center
              items-center
              px-6
            "
            :class="!variationFull ? 'py-32' : 'py-20 xl:py-32 2xl:py-64'"
          >
            <Tagline :text="**slice.primary.tagline**" />
            <Title
              :text="**slice.primary.title**"
              size="xl"
              :hero="**slice.primary.top**"
            />
            <Excerpt :text="**slice.primary.text**" />
            <nav
              v-if="slice.items.length"
              class="flex flex-wrap items-center justify-center mt-6"
            >
              <Cta
                v-for="**(cta, i) in slice.items**"
                :key="`cta-${i}`"
                class="m-2"
                :link="**cta.ctaLink**"
                :type="**cta.ctaStyle**.toLowerCase()"
              >
                {{ **cta.ctaLabel** }}
              </Cta>
            </nav>
          </div>
          <prismic-image
            v-if="!variationFull && **slice.primary.image.url**"
            :field="**slice.primary.image**"
            class="
              absolute
              object-cover
              h-full
              w-full
              top-0
              bottom-0
              rounded-lg
            "
          />
        </div>
      </div>
      <prismic-image
        v-if="variationFull && **slice.primary.image.url**"
        :field="**slice.primary.image**"
        class="absolute object-cover h-full w-full inset-0 z-10"
      />
      <Grid />
    </div>
  </section>
</template>
```

<span style="font-size:0.75rem;opacity:0.5;">`<template>` section of the /slices/Cover/index.js file</span>

#### Part 4: Go further by connecting your own Prismic repository and testing the Website Builder experience

If you want to take this a step further, connect your own Prismic repository to this project. You’ll be able to create new pages with the Slices provided and get an idea of the website builder experience you can deliver to your content team.

If you don’t have one yet, you can [create a new repository from here](https://prismic.io/dashboard/new-repository?framework=nuxt).

To connect your repository, you change line 2 in `./sm.json` to include your own repository endpoint, under `apiEndpoint`as shown below:

```json
{
  **"apiEndpoint": "https://<your-repository-name>.prismic.io/api/v2",**
  "libraries": [
    "@/slices"
  ],
  "_latest": "0.3.0",
  "localSliceSimulatorURL": "http://localhost:3000/slice-simulator",
  "framework": "previousNuxt"
}
```

<span style="font-size:0.75rem;opacity:0.5;">Update the apiEndpoint, in the sm.json file at the root of the project</span>

[`http://localhost:3000`](http://localhost:3000) is going to look a bit different now, because your app is now querying your newly created Prismic API for data. To get things working again, let’s [jump to your repository](https://prismic.io/dashboard) to start building pages.

Let’s start building your first page then.

First you need to push

First, you need to push the Custom Types & Slices that exist in your code to your repository, so you can find start composing pages with them.

From Slice Machine, under [`http://localhost:9999`](http://localhost:9999), open each Slice you want to use in your project, from the **Slices tab** and “**Push the Slices to Prismic**” for each of them to make them available in your repository.

![Slices screenshot](https://images.prismic.io/slices-example-nuxt/2dd94fc3-04fe-4597-8f90-ad1917a38793_Slices-screenshot.png?auto=compress,format)
![Push toolbar](https://images.prismic.io/slices-example-nuxt/fca3b674-3932-4d6e-add9-b0e3ebdb0a0f_push.png?auto=compress,format)

In Slice Machine, open each Custom Type of the **Custom Types tab** and “**Push to Prismic**” each of them to make them available in your repository.

![Custom types](https://images.prismic.io/slices-example-nuxt/a8eb918f-d913-438d-9b80-a7a2a33e1311_custom-types.png?auto=compress,format)
![Custom types push](https://images.prismic.io/slices-example-nuxt/7719d795-f9fe-4bbc-87c7-d4ff9a70972d_custom-types-push.png?auto=compress,format)

Now you should have your Custom Types and Slices available in your Prismic repository. You’ll be able to start creating new pages by assembling Slices.
Go back to your repository. You can click the pencil icon in the center or top right of the page to create some content for your own Slice example website.

![Prismic UI](https://images.prismic.io/slices-example-nuxt/4bf2d08b-9c00-41df-88b7-a0a190e42cd7_prismic-ui.png?auto=compress,format)

- Create a Home document for your Homepage, and try a few ways to compose your homepage with the available Slices.
- Create a Page document for a generic page of the website
- Create a Partials document for your Header and Footer. You can even link your existing Page in the Navigation now

Run `npm run dev` , then go to [`http://localhost:3000`](http://localhost:3000) to see what your new Nuxt Wireframe website looks like.

#### Part 5: Bonus: Customize a Slice

You can try to customize a Slice now. Try adding a new editable field to a Slice of your choice!

- Add a field to a Slice of your choice
- Click “**Save model to filesystem**” to save this change to the `model.json` file of this Slice
  ![Save model to filesystem](https://images.prismic.io/slices-example-nuxt/a810933d-c5fa-4e87-ac5e-4c1958e65cc8_save-model.png?auto=compress,format)
- Click “**Show code snippets**” to show how to template this new field in your Slice’s component.
- Add this new editable field in the template of `index.js` file of the Slice Component you are modifying.
- Click “**Preview Slice**” to see your newly modified Slice

![Preview slice](https://images.prismic.io/slices-example-nuxt/52b189df-d055-4acf-b70e-a93e97bb5ebc_preview-slice.png?auto=compress,format)

#### Going further: Slice Variations

You can create multiple versions of your Slice so that your content creators have the ability to choose between different variations of the Slice in the document editor to show on their website. As you can [see here on our Cover Slice example](https://slices-example-nuxt.vercel.app/cover), we have 4 variations

You can create as many variations of a Slice as you want. You might want to add a variation with an extra field, to change the position of the image with the CSS, or to present an image gallery in different views. The possibilities are as broad as the use cases!

Curious about Slice Variations? Read more about them [here](https://prismic.io/docs/core-concepts/slice-machine#add-a-slice-variation).
