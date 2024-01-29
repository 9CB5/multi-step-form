<template>
    <section>
        <FormHeader
            :title="'Finishing up'"
            :description="'Double-check everything looks OK before confirming.'"
        />

        <aside class="summary-card">
            <!-- Plan -->
            <div
                v-if="Object.keys(formData.plan).length !== 0 && formData.frequency"
                :class="formData.addons.length > 0 ? 'divider' : ''"
                class="summary-card__row"
            >
                <div>
                    <p class="summary-card__row__frequency">{{`${formData.plan.type} (${formData.frequency})`}}</p>

                    <p
                        @click="$emit('change-form-page', 'change')"
                        class="summary-card__row__link"
                    >
                        Change
                    </p>
                </div>

                <p class="summary-card__row__price">
                    {{formData.frequency === "monthly" ? `$${formData.plan[formData.frequency]}/mo` :
                        `$${formData.plan[formData.frequency]}/yr`
                    }}
                </p>
            </div>

            <!-- Addons -->
            <div
                v-for="(addon, index) in formData.addons"
                :key="`${index}-${addon.title}`"
                class="summary-card__row"
            >
                <p> {{ addon.title }} </p>
                <p> {{ `+${addon[formData.frequency]}${suffix}` }} </p>
            </div>
        </aside>

        <!-- Total -->
        <div class="summary-total">
            <p> {{ `Total (per ${formData.frequency === 'monthly' ? 'month' : 'year'})` }} </p>
            <p class="summary-total__price"> {{`$${totalCost}${suffix}`}} </p>
        </div>
    </section>
</template>

<script>
    import FormHeader from "../form/header.vue";

    export default {
        name: "FormSummary",
        components: {
            FormHeader
        },
        props: {
            formData: {
                default: () => ({}),
                type: Object
            }
        },
        computed: {
            suffix() {
                let output = "/mo";

                if (this.formData && this.formData.frequency === "yearly") {
                    output = "/yr";
                }

                return output;
            },
            totalCost() {
                let output = 0;

                if (this.formData) {
                    output += this.formData.plan[this.formData.frequency];

                    this.formData.addons.forEach(addon => {
                        output += addon[this.formData.frequency];
                    });
                }

                return output;
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "./../../scss/abstracts/_variables.scss";

    .divider {
        border-bottom: 1px solid $light-gray;
        padding-bottom: 1rem;
    }

    .summary-card {
        background-color: $magnolia;
        border-radius: 0.5rem;
        color: $cool-gray;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        &__row {
            align-items: center;
            display: flex;
            justify-content: space-between;

            &__frequency {
                color: $marine-blue;
                font-weight: 700;
                text-transform: capitalize;
                padding-bottom: 0.3rem;
            }

            &__link {
                cursor: pointer;
                text-decoration: underline;
            }

            &__price {
                color: $marine-blue;
                font-weight: 700;
            }
        }
    }

    .summary-total {
        color: $cool-gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        &__price {
            color: $purplish-blue;
            font-size: 1.2rem;
            font-weight: 700;
        }
    }
</style>