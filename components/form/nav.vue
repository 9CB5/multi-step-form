<template>
    <div class="form-nav-container">
        <button
            @click="$emit('change-form-page', 'back')"
            :class="currentStep < 1 ? 'invisible' : ''"
            class="btn btn--back"
        >
            Go back
        </button>

        <button
            @click="$emit('change-form-page', 'forward')"
            :class="currentStep === 3 ? 'btn--confirm' : ''"
            class="btn btn--next"
        >
            {{ currentStep === 3 ? 'Confirm' : 'Next Step' }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "FormNav",
        props: {
            currentStep: {
                default: 0,
                type: Number
            }
        },
        methods: {
            changeFormPage(direction) {
                this.$emit("change-form-page", direction);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";
    @import "./../../scss/abstracts/_mixins.scss";

    .btn {
        border-radius: 0.3rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        outline: none;
        border: none;
        text-transform: capitalize;
        padding: 1rem 1.6rem;

        &--back {
            background-color: transparent;
            color: $cool-gray;
            padding: 0;
        }

        &--next {
            background-color: $marine-blue;
            color: $white;

            @include respond(phone) {
                padding: 0.5rem;
            }
        }

        &--confirm {
            background-color: $purplish-blue;
        }
    }

    .form-nav-container {
        display: flex;
        justify-content: space-between;
        width: 100%;

        @include respond(phone) {
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: $white;
            padding: 1rem;
        }
    }

    .invisible {
        visibility: hidden;
    }
</style>