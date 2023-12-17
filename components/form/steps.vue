<template>
    <div class="steps-card">
        <div
            v-for="(step, index) in steps"
            :key="`${index}-${step}`"
            class="steps-card__row"
        >
            <p
                :class="{'isActive': index === currentStep}"
                class="steps-card__row__order"
            >
                {{ index + 1 }}
            </p>

            <div class="steps-card__row__description">
                <p class="steps-card__row__description__step">Step {{ index + 1 }}</p>
                <p class="steps-card__row__description__title">{{ step }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormSteps",
    props: {
        currentStep: {
            default: 0,
            type: Number
        }
    },
    data() {
        return {
            steps: ["Your info", "Select plan", "Add-ons", "Summary"]
        };
    },
    methods: {
        setSubmitted() {
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";
    @import "./../../scss/abstracts/_mixins.scss";

    .steps-card {
        background-image: url("./../../assets/images/bg-sidebar-desktop.svg");
        border-radius: 0.6rem;
        display: flex;
        flex-direction: column;
        font-weight: 700;
        gap: 1.85rem;
        height: 35.5rem;
        padding-left: 1.98rem;
        padding-top: 2.41rem;
        text-transform: uppercase;
        width: 17rem;

        @include respond(phone) {
            background-image: url("./../../assets/images/bg-sidebar-mobile.svg");
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 0;
            height: auto;
            width: auto;

            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            padding: 1.8rem 0 6rem 0; // top right bottom left
            gap: 0.82rem;
        }

        &__row {
            align-items: center;
            display: flex;
            gap: 1rem;

            &__order {
                align-items: center;
                border-radius: 50%;
                border: 1px solid $white;
                color: $white;
                display: flex;
                height: 0.5rem;
                justify-content: center;
                padding: 1rem;
                width: 0.5rem;

                @include respond(phone) {
                    padding: 0.9rem;
                }

            }

            &__description {
                display: flex;
                flex-direction: column;
                gap: 0.3rem;

                @include respond(phone) {
                    display: none;
                }


                &__step {
                    color: $pastel-blue;
                    font-size: 0.79rem;
                    font-weight: 400;
                }

                &__title {
                    color: $magnolia;
                    font-size: 0.96rem;
                }
            }
        }
    }

    .isActive {
        background-color: $light-blue;
        border: 1px solid $light-blue;
        color: $marine-blue;
    }
</style>