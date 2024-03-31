<template>
    <div class="text-3xl lg:text-5xl font-bold flex flex-col p-8">
        <h1>
            “Travel is fatal to prejudice, bigotry, and narrow-mindedness, and
            many of our people need it sorely on these accounts.
            <br /><br />
            Broad, wholesome, charitable views of men and things cannot be
            acquired by vegetating in one little corner of the earth all one's
            lifetime.”
        </h1>
        <span class="ml-auto mt-8">― Mark Twain</span>

        <div
            class="mt-8 flex flex-wrap justify-center items-center gap-8 font-[Forum] font-bold text-xl underline"
        >
            <NuxtLink to="/photos/china">China</NuxtLink>
            <NuxtLink to="/photos/costarica">Costa Rica</NuxtLink>
            <NuxtLink to="/photos/jordan-syria">Jordan & Syria</NuxtLink>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
    font-family: 'Forum';
}
</style>
