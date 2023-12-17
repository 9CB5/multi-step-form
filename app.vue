<template>
    <main class="main">
        <FormParent/>
    </main>
</template>

<style lang="scss">
    @import "./scss/abstracts/_variables.scss";
    @import "./scss/abstracts/_mixins.scss";

    .main {
        background-color: $magnolia;
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;

        @include respond(phone) {
            align-items: flex-start;
        }
    }
</style>