<template>
    <section class="finish">
        <img src="./../../assets/images/icon-thank-you.svg"/>

        <h1 class="finish__title">Thank you!</h1>

        <p class="finish__description">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you
            ever need support, please feel free to email us at support@loremgaming.com.
        </p>
    </section>
</template>

<script>
    import JSConfetti from 'js-confetti';

    export default {
        name: "FormFinish",
        mounted() {
            this.confettiSetup();
        },
        methods: {
            confettiSetup() {
                const jsConfetti = new JSConfetti();

                jsConfetti.addConfetti({
                    confettiColors: [
                        "hsl(213, 96%, 18%)", "hsl(243, 100%, 62%)", "hsl(228, 100%, 84%)",
                        "hsl(206, 94%, 87%)", "hsl(354, 84%, 57%)", "hsl(23, 100%, 75%)"
                    ],
                    // confettiNumber: 400,
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";

    .finish {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        justify-content: center;
        text-align: center;

        &__title {
            color: $marine-blue;
            font-size: 2rem;
            font-weight: 700;
        }

        &__description {
            color: $cool-gray;
            line-height: 1.3rem;
        }
    }

</style>