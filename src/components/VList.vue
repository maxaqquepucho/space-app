<script setup lang="ts">
import { getAsset } from '@/helpers/getAsset'
import { computed } from 'vue'

const callouts = [
  {
    name: 'Motor Merlin del cohete Falcon 9',
    description: 'Work from home accessories',
    imageSrc: 'img/motor-merlin.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#'
  },
  {
    name: 'Capsula Dragon',
    description: 'Journals and note-taking',
    imageSrc: 'img/dragon.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#'
  },
  {
    name: 'cohete Falcon 9',
    description: 'Daily commute essentials',
    imageSrc: 'img/falcon-9.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#'
  },
  {
    name: 'Cohete Starship',
    description: 'Work from home accessories',
    imageSrc: 'img/starship-rocket.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#'
  },
  {
    name: 'Motor Raptor del cohete Starship',
    description: 'Journals and note-taking',
    imageSrc: 'img/raptor-motor-rocket.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#'
  },
  {
    name: 'Cohete Super Heavy',
    description: 'Daily commute essentials',
    imageSrc: 'img/super-heavy-rocket.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#'
  }
]

const getImage = computed(() => (image) => getAsset(image))
</script>

<template>
  <div class="bg-slate-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-300">Tecnologías espaciales</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div v-for="callout in callouts" :key="callout.name" class="group relative mb-8">
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
            >
              <img
                :src="getImage(callout.imageSrc)"
                :alt="callout.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-2 text-lg text-gray-300">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <!-- <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
