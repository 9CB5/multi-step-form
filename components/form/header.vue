<template>
    <div class="header">
        <h1 class="header__title">{{ title }}</h1>
        <p class="header__description">{{ description }}</p>
    </div>
</template>

<script>
    export default {
        name: "FormHeader",
        props: {
            title: {
                default: "",
                type: String
            },
            description: {
                default: "",
                type: String
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";
    @import "./../../scss/abstracts/_mixins.scss";

    .header {
        padding-bottom: 1.5rem;

        @include respond(phone) {
            padding-left: 0.3rem;
        }

        &__title {
            color: $marine-blue;
            font-size: 2rem;
            padding-bottom: 0.8rem;

            @include respond(phone) {
                font-size: 1.4rem;
            }
        }

        &__description {
            color: $cool-gray;
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
</style>