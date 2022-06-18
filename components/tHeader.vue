<template>
    <header class="text-gray-600 body-font  ">
        <div class=" container mx-auto flex flex-wrap py-5  flex-col md:flex-row items-center">
            <nuxt-link to="/" class="avatar mx-3">
                <div class="w-32 h-24 rounded bg-[url('4ze.jpg')]  bg-cover">
                </div>
            </nuxt-link>
            <nav class="md:ml-auto my-3 md:my-3 md:pl-4 flex flex-wrap items-center text-base justify-center">
                <nuxt-link to="/services"
                    class="mx-2 bg-primary  backdrop-blur-sm hover:ring-2 rounded-sm ring-offset-2 ring-primary  text-white hover:text-primary hover:bg-white btn  ">
                    خدمات ما
                </nuxt-link>
                <nuxt-link to="/about"
                    class="mx-2 bg-primary  backdrop-blur-sm hover:ring-2 rounded-sm ring-offset-2 ring-primary  text-white hover:text-primary hover:bg-white btn  ">
                    درباره ما
                </nuxt-link>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>