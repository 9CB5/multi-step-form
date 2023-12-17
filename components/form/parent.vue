<template>
    <aside class="form-parent">
        <FormSteps
            :currentStep="currentStep"
        />

        <div class="form-parent__right">
            <!-- Renders a different form component depending on current step -->
            <component
                @change-form="changeForm"
                @change-form-page="changeFormPage"
                :is="currentForm"
                :formData="formData"
                :formErrors="formErrors"
            />

            <FormNav
                v-if="currentStep < 4"
                @change-form-page="changeFormPage"
                :currentStep="currentStep"
            />
        </div>
    </aside>
</template>

<script>
    import FormAddons from "./addons.vue"
    import FormFinish from "./finish.vue"
    import FormInfo from "./info.vue";
    import FormNav from "./nav.vue";
    import FormPlan from "./plan.vue";
    import FormSummary from "./summary.vue";

    export default {
        name: "FormParent",
        components: {
            FormAddons,
            FormFinish,
            FormInfo,
            FormNav,
            FormPlan,
            FormSummary,
        },
        data() {
            return {
                currentStep: 0,
                formData: {
                    name: "",
                    email: "",
                    phone: "",

                    plan: {
                        type: "arcade",
                        monthly: 9,
                        yearly: 90,
                        src: ""
                    },
                    frequency: "monthly",

                    addons: []
                },
                formErrors: [],

                isMobile: false
            }
        },
        computed: {
            currentForm() {
                const forms = ["Info", "Plan", "Addons", "Summary"];
                let output = "FormFinish";

                if (this.currentStep < 4) {
                    const form = forms[this.currentStep];

                    output = `Form${form}`
                }

                return output;
            },
        },
        methods: {
            changeFormPage(direction) {
                if (direction === "back" && this.currentStep > 0) {
                    this.currentStep--;
                    // ----------------------------------------------------------------------------
                } else if (direction === "forward") {
                    this.formErrors.length = 0;
                    this.validateForm();  // Validate form first before advancing

                    if (!this.formErrors.length) this.currentStep++;
                    // ----------------------------------------------------------------------------
                } else if (direction === "change") {
                    this.currentStep = 1;
                }
            },
            changeForm(formKey, formValue) {
                this.formData[formKey] = formValue;
            },
            validateForm() {
                const checks = ["name", "email", "phone"];  // Variables that require validation

                // Only check for blanks for now
                checks.forEach(check => {
                    if (this.formData[check] === "") this.formErrors.push(check);
                });
            }
        }
    }
</script>

<style lang="scss">
    @import "./../../scss/abstracts/_variables.scss";
    @import "./../../scss/abstracts/_mixins.scss";

    .form-parent {
        background-color: $white;
        border-radius: 0.7rem;
        display: flex;
        height: 37.5rem;
        padding: 1rem;
        width: 58.6rem;

        @include respond(phone) {
            flex-direction: column;
            height: auto;
            padding: 0;
        }

        &__right {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: space-between;
            padding: 2.5rem 5rem 1rem 6.3rem;
            width: 39.5rem;

            @include respond(phone) {
                background-color: $white;
                border-radius: 0.5rem;
                left: 0;
                margin-left: auto;
                margin-right: auto;
                margin: 0.7rem 1rem;
                padding: 2rem 1rem;
                position: absolute;
                right: 0;
                top: 5rem;
                width: auto;
            }
        }
    }
</style>