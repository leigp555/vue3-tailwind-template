<script setup lang="ts"></script>

<template>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-logo"></use>
  </svg>

  <div class="menu">xxx</div>
  <button @click="theme">暗黑模式</button>
  <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div>
      <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <svg
          class="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <!-- ... -->
        </svg>
      </span>
    </div>
    <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
      Writes Upside-Down
    </h3>
    <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
      The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
      works in outer space.
    </p>
  </div>

  <div class="w-32 h-32 bg-primary dark:bg-green-500"></div>

  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>

        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as placeholder text. It shares
          some characteristics of a real written text but is random or otherwise generated.
        </p>
      </div>
      <!-- text - end -->

      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        <!-- article - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >New trends in Tech</a
              >
            </h2>

            <p class="mb-8 text-gray-500">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text.
            </p>

            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
                <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                    loading="lazy"
                    alt="Photo by Brock Wegner"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <span class="block text-indigo-500">Mike Lane</span>
                  <span class="block text-sm text-gray-400">July 19, 2021</span>
                </div>
              </div>

              <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
            </div>
          </div>
        </div>
        <!-- article - end -->

        <!-- article - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >Working with legacy stacks</a
              >
            </h2>

            <p class="mb-8 text-gray-500">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text.
            </p>

            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
                <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                    loading="lazy"
                    alt="Photo by peter bucks"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <span class="block text-indigo-500">Jane Jackobs</span>
                  <span class="block text-sm text-gray-400">April 07, 2021</span>
                </div>
              </div>

              <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
            </div>
          </div>
        </div>
        <!-- article - end -->

        <!-- article - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >10 best smartphones for devs</a
              >
            </h2>

            <p class="mb-8 text-gray-500">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text.
            </p>

            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
                <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                    loading="lazy"
                    alt="Photo by Jassir Jonis"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <span class="block text-indigo-500">Tylor Grey</span>
                  <span class="block text-sm text-gray-400">March 15, 2021</span>
                </div>
              </div>

              <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
            </div>
          </div>
        </div>
        <!-- article - end -->

        <!-- article - start -->
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img
              src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>

          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a
                href="#"
                class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >8 High performance Notebooks</a
              >
            </h2>

            <p class="mb-8 text-gray-500">
              This is a section of some simple filler text, also known as placeholder text. It
              shares some characteristics of a real written text.
            </p>

            <div class="mt-auto flex items-end justify-between">
              <div class="flex items-center gap-2">
                <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                    loading="lazy"
                    alt="Photo by Aiony Haust"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <span class="block text-indigo-500">Ann Park</span>
                  <span class="block text-sm text-gray-400">January 27, 2021</span>
                </div>
              </div>

              <span class="rounded border px-2 py-1 text-sm text-gray-500">Article</span>
            </div>
          </div>
        </div>
        <!-- article - end -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
